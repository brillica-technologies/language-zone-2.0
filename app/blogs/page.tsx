import type { Metadata } from "next";
import CallbackBand from "@/components/course/CallbackBand";
import {
  Band,
  CardGrid,
  Lead,
  PageHero,
  PageTitle,
} from "@/components/course/Section";
import BlogEmpty from "@/components/blog/BlogEmpty";
import PostCard from "@/components/blog/PostCard";
import JsonLd from "@/components/JsonLd";
import { getPosts, postUrl } from "@/lib/blog";
import { ORG_ID, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/blogs";

export const metadata: Metadata = pageMetadata({
  title: "German Learning Blog & Goethe Exam Tips | Language Zone",
  description:
    "German learning guides from our trainers in Dehradun: Goethe-Zertifikat levels, grammar tips, study in Germany and beginner study plans.",
  keywords: [
    "German learning blog",
    "Goethe exam tips",
    "German grammar tips",
    "learn German in Dehradun",
    "study in Germany from Dehradun",
    "German classes in Dehradun",
  ],
  path: PATH,
});

export default function BlogPage() {
  const posts = getPosts();
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${absoluteUrl(PATH)}#blog`,
      url: absoluteUrl(PATH),
      name: "Language Zone German Learning Blog",
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: absoluteUrl(postUrl(p.slug)),
        datePublished: p.date,
      })),
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: PATH },
    ]),
  ];

  return (
    <main>
      <JsonLd data={jsonLd} />
      <PageHero crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}>
        <PageTitle>German Learning Blog</PageTitle>
        <Lead>
          Guides on Goethe exams, grammar, study abroad and learning habits,
          written by our trainers.
        </Lead>
      </PageHero>

      <Band>
        {posts.length === 0 ? (
          <BlogEmpty />
        ) : (
          <CardGrid min="320px">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </CardGrid>
        )}
      </Band>

      <CallbackBand />
    </main>
  );
}
