import { notFound } from "next/navigation";

// Blog API access (the original PHP pages fetched these server-side with cURL).
export const BLOG_API_BASE =
  process.env.BLOG_API_BASE ?? "https://www.brillicaservices.com";

export type BlogItem = {
  path: string;
  hero_image: string;
  blog_title: string;
  createdAt: string;
  user_ip?: unknown[];
};

export type BlogPost = {
  pageTitle: string;
  meta_description: string;
  keywords: string;
  createdOn: string;
  content: string;
};

export async function getBlogs(): Promise<BlogItem[]> {
  try {
    const res = await fetch(`${BLOG_API_BASE}/static/LanguazeZoneBlogs`, {
      cache: "no-store",
    });
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function getBlog(slug: string): Promise<BlogPost> {
  const res = await fetch(
    `${BLOG_API_BASE}/static/language-zone-blog?blog_name=${encodeURIComponent(slug)}`,
    { cache: "no-store" },
  ).catch(() => null);
  const data = res ? await res.json().catch(() => null) : null;
  if (!data?.content) notFound();
  return data;
}
