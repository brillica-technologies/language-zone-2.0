import type { MetadataRoute } from "next";
import { getPosts, postUrl } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";
import { GERMAN_COURSE_URL, GERMAN_LEVELS, levelUrl } from "@/lib/site";

// Every public route. Static pages carry the build date; posts carry their own date.
export default function sitemap(): MetadataRoute.Sitemap {
  const built = new Date();
  const posts = getPosts();
  const latestPost = posts[0]?.date ?? built;

  return [
    {
      url: absoluteUrl("/"),
      lastModified: built,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(GERMAN_COURSE_URL),
      lastModified: built,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...GERMAN_LEVELS.map((l) => ({
      url: absoluteUrl(levelUrl(l.slug)),
      lastModified: built,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: absoluteUrl("/about"),
      lastModified: built,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/contact-us"),
      lastModified: built,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/blogs"),
      lastModified: latestPost,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts.map((p) => ({
      url: absoluteUrl(postUrl(p.slug)),
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
