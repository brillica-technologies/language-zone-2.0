import type { Metadata } from "next";
import CallbackBand from "@/components/course/CallbackBand";
import {
  Band,
  Lead,
  PageHero,
  PageTitle,
} from "@/components/course/Section";
import BlogEmpty from "@/components/blog/BlogEmpty";
import BlogFilter from "@/components/blog/BlogFilter";
import PostCard from "@/components/blog/PostCard";
import JsonLd from "@/components/JsonLd";
import { categorySlug, getCategories, getPosts, postUrl } from "@/lib/blog";
import { ORG_ID, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/blogs";

// CMS blogs published for Language Zone show up within the hour, no deploy needed
export const revalidate = 3600;

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

export default async function BlogPage() {
  const posts = await getPosts();
  const categories = await getCategories(posts);
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
        dateModified: p.updated,
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
          <BlogFilter
            categories={categories}
            items={posts.map((post) => ({
              key: post.slug,
              category: categorySlug(post.category),
              card: <PostCard post={post} />,
            }))}
          />
        )}
      </Band>

      <CallbackBand />
    </main>
  );
}
