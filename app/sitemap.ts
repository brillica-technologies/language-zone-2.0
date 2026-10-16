import type { MetadataRoute } from "next";
import { getPosts, postUrl } from "@/lib/blog";
import { GERMAN_COURSE_URL, GERMAN_LEVELS, levelUrl } from "@/lib/site";

const SITE = "https://languagezone.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, priority: 1 },
    { url: `${SITE}${GERMAN_COURSE_URL}`, priority: 0.9 },
    ...GERMAN_LEVELS.map((l) => ({
      url: `${SITE}${levelUrl(l.slug)}`,
      priority: 0.8,
    })),
    { url: `${SITE}/blogs`, priority: 0.6 },
    { url: `${SITE}/about-us`, priority: 0.6 },
    { url: `${SITE}/contact-us`, priority: 0.6 },
  ];
  const posts = getPosts().map((p) => ({
    url: `${SITE}${postUrl(p.slug)}`,
    lastModified: p.date,
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
