// Blog posts live in data/blog/posts.json (structured blocks, not raw HTML) and are
// rendered at build time. Swap this module's internals for a CMS or API later; the
// page code only uses the exports below.

import posts from "@/data/blog/posts.json";

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  /** ISO date, e.g. 2026-09-24 */
  date: string;
  author: string;
  readMinutes: number;
  seo: { title: string; description: string; keywords: string };
  content: Block[];
};

const ALL = (posts as Post[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));

/** All posts, newest first. */
export function getPosts(): Post[] {
  return ALL;
}

export function getPost(slug: string): Post | null {
  return ALL.find((p) => p.slug === slug) ?? null;
}

export const postUrl = (slug: string) => `/blogs/${slug}`;

/** "24 September 2026" */
export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
