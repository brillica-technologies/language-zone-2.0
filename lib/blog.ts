// Blog posts come from two places, merged newest first:
// 1. The BSPL CMS (CRM backend): blogs ticked for "Language Zone" in the CMS
//    (?website=languageZone). Their body is HTML from the CMS editor.
// 2. data/blog/posts.json: the posts written before the CMS, as structured blocks.
// A CMS blog with the same page route as a local post replaces it.
// The page code only uses the exports below.

import localPosts from "@/data/blog/posts.json";

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type PostBody =
  | { kind: "blocks"; blocks: Block[] }
  | { kind: "html"; html: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  /** ISO date, e.g. 2026-09-24 */
  date: string;
  /** ISO date of the last edit */
  updated: string;
  author: string;
  readMinutes: number;
  seo: { title: string; description: string; keywords: string };
  image?: { src: string; alt: string };
  body: PostBody;
};

/** How often (seconds) published CMS changes reach the site without a deploy. */
export const BLOG_REVALIDATE = 3600;

const CMS_WEBSITE = "languageZone";
// Server-only override, else the same CRM backend the enquiry form uses
const CMS_API = process.env.CMS_API_URL || process.env.NEXT_PUBLIC_ENQUIRY_URL;
const DEFAULT_AUTHOR = "Language Zone German trainers";

/* ---------------- local posts (data/blog/posts.json) ---------------- */

type LocalPost = Omit<Post, "body" | "updated" | "image"> & { content: Block[] };

const LOCAL: Post[] = (localPosts as LocalPost[]).map(({ content, ...p }) => ({
  ...p,
  updated: p.date,
  body: { kind: "blocks", blocks: content },
}));

/* ---------------- CMS posts ---------------- */

type CmsBlog = {
  websites?: string[];
  pageRoute?: string;
  blogHeading?: string;
  content?: string;
  bannerImg?: { src?: string; alt?: string };
  blogCategoryId?: { categoryName?: string } | null;
  headSection?: {
    title?: string;
    meta?: { name?: string; property?: string; content?: string }[];
  };
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

const decode = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const plainText = (html = "") =>
  decode(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

const clip = (text: string, length: number) =>
  text.length > length
    ? `${text.slice(0, length).replace(/\s+\S*$/, "")}…`
    : text;

const words = (text: string) => (text ? text.split(" ").length : 0);

function fromCms(b: CmsBlog): Post | null {
  // Checked here too: a backend that doesn't know "languageZone" yet ignores the
  // ?website= filter and would hand back the main Brillica blogs.
  if (!b.websites?.includes(CMS_WEBSITE)) return null;
  if (!b.pageRoute || !b.blogHeading || !b.content) return null;
  const meta = (name: string) =>
    b.headSection?.meta?.find((m) => m.name === name || m.property === name)
      ?.content ?? "";
  const text = plainText(b.content);
  const description = meta("description") || clip(text, 160);
  const day = (iso?: string) => (iso ?? new Date().toISOString()).slice(0, 10);
  return {
    slug: b.pageRoute,
    title: b.blogHeading,
    category: b.blogCategoryId?.categoryName || "Guides",
    excerpt: clip(description, 170),
    date: day(b.createdAt),
    updated: day(b.updatedAt ?? b.createdAt),
    author: DEFAULT_AUTHOR,
    readMinutes: Math.max(1, Math.round(words(text) / 200)),
    seo: {
      title: b.headSection?.title?.trim() || b.blogHeading,
      description,
      keywords: meta("keywords"),
    },
    image: b.bannerImg?.src
      ? { src: b.bannerImg.src, alt: b.bannerImg.alt || b.blogHeading }
      : undefined,
    body: { kind: "html", html: b.content },
  };
}

async function cmsGet<T>(path: string): Promise<T | null> {
  if (!CMS_API) return null;
  try {
    const res = await fetch(`${CMS_API}/api/blog${path}`, {
      next: { revalidate: BLOG_REVALIDATE, tags: ["blogs"] },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (err) {
    // The CMS being down must not take the blog (or the build) down with it
    console.warn(`[blog] CMS request failed: ${path}`, err);
    return null;
  }
}

type ListResponse = { data?: CmsBlog[]; metaData?: { totalPages?: number } };

async function getCmsPosts(): Promise<Post[]> {
  const PAGE = 100;
  const all: CmsBlog[] = [];
  for (let page = 1; page <= 20; page++) {
    const json = await cmsGet<ListResponse>(
      `/?website=${CMS_WEBSITE}&isActive=true&limit=${PAGE}&page=${page}`,
    );
    all.push(...(json?.data ?? []));
    if (!json || page >= Number(json.metaData?.totalPages ?? 0)) break;
  }
  return all.flatMap((b) => fromCms(b) ?? []);
}

/* ---------------- public API ---------------- */

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const cms = await getCmsPosts();
  const cmsSlugs = new Set(cms.map((p) => p.slug));
  return [...cms, ...LOCAL.filter((p) => !cmsSlugs.has(p.slug))].sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export async function getPost(slug: string): Promise<Post | null> {
  const json = await cmsGet<{ data?: CmsBlog }>(
    `/page-route/${encodeURIComponent(slug)}?website=${CMS_WEBSITE}`,
  );
  const cms = json?.data && json.data.isActive !== false ? fromCms(json.data) : null;
  return cms ?? LOCAL.find((p) => p.slug === slug) ?? null;
}

export type BlogCategory = { name: string; slug: string; count: number };

export const categorySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * The categories that have posts, for the blog page's topic tabs: the CMS's Language
 * Zone categories in their CMS priority order first, then the rest by post count.
 */
export async function getCategories(posts: Post[]): Promise<BlogCategory[]> {
  const counts = new Map<string, number>();
  for (const p of posts) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);

  const json = await cmsGet<{ data?: { categoryName?: string }[] }>(
    `/category?website=${CMS_WEBSITE}`,
  );
  const cmsOrder = (json?.data ?? [])
    .map((c) => c.categoryName ?? "")
    .filter((name) => counts.has(name));
  const rest = [...counts.keys()]
    .filter((name) => !cmsOrder.includes(name))
    .sort((a, b) => counts.get(b)! - counts.get(a)! || a.localeCompare(b));

  return [...new Set([...cmsOrder, ...rest])].map((name) => ({
    name,
    slug: categorySlug(name),
    count: counts.get(name)!,
  }));
}

export const postUrl = (slug: string) => `/blogs/${slug}`;

/** Word count of a post body, for the BlogPosting schema. */
export const postWordCount = (post: Post) =>
  post.body.kind === "html"
    ? words(plainText(post.body.html))
    : words(
        post.body.blocks
          .flatMap((b) => (b.type === "ul" ? b.items : [b.text]))
          .join(" ")
          .replace(/\s+/g, " ")
          .trim(),
      );

/** "24 September 2026" */
export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
