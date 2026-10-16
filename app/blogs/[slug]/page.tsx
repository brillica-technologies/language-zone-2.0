import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/blog/ArticleBody";
import PostCard from "@/components/blog/PostCard";
import CallbackBand from "@/components/course/CallbackBand";
import LevelCard from "@/components/course/LevelCard";
import {
  Band,
  CardGrid,
  PageHero,
  PageTitle,
  SectionHead,
} from "@/components/course/Section";
import { formatDate, getPost, getPosts, postUrl } from "@/lib/blog";
import { ORG_ID, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { GERMAN_LEVELS } from "@/lib/site";

// Posts come from data/blog/posts.json; unknown slugs are a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    ...pageMetadata({
      title: post.seo.title,
      description: post.seo.description,
      keywords: post.seo.keywords,
      path: postUrl(post.slug),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      section: post.category,
      authors: [post.author],
      image: `${postUrl(post.slug)}/opengraph-image`,
      imageAlt: post.title,
    }),
    authors: [{ name: post.author }],
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blogs/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = absoluteUrl(postUrl(post.slug));
  const more = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const words = post.content
    .flatMap((b) => (b.type === "ul" ? b.items : [b.text]))
    .join(" ")
    .split(/\s+/).length;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: url,
      url,
      headline: post.title,
      description: post.seo.description,
      keywords: post.seo.keywords,
      articleSection: post.category,
      inLanguage: "en-IN",
      wordCount: words,
      datePublished: post.date,
      dateModified: post.date,
      image: `${url}/opengraph-image`,
      author: {
        "@type": "Organization",
        name: post.author,
        url: absoluteUrl("/about"),
      },
      publisher: { "@id": ORG_ID },
      isPartOf: { "@id": `${absoluteUrl("/blogs")}#blog` },
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blogs" },
      { name: post.title, path: postUrl(post.slug) },
    ]),
  ];

  return (
    <main>
      <JsonLd data={jsonLd} />

      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: post.category },
        ]}
        className="max-w-[860px]"
      >
        <PageTitle>{post.title}</PageTitle>
        <p className="mt-3 text-mute">
          {post.author} ·{" "}
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {post.readMinutes} min read
        </p>
      </PageHero>

      <Band narrow>
        <article>
          <ArticleBody blocks={post.content} />
        </article>
      </Band>

      <Band tone="paper">
        <SectionHead eyebrow="Next step" title="Find your German level" />
        <CardGrid min="360px">
          {GERMAN_LEVELS.map((l) => (
            <LevelCard key={l.slug} level={l} />
          ))}
        </CardGrid>
      </Band>

      {more.length > 0 && (
        <Band>
          <SectionHead eyebrow="Guides" title="More from our trainers" />
          <CardGrid min="320px">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </CardGrid>
        </Band>
      )}

      <CallbackBand />
    </main>
  );
}
