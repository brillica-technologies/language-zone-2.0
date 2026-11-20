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
import {
  formatDate,
  getPost,
  getPosts,
  postUrl,
  postWordCount,
} from "@/lib/blog";
import { ORG_ID, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { GERMAN_LEVELS } from "@/lib/site";

// Posts come from the CMS and data/blog/posts.json (lib/blog.ts). Known posts are
// built ahead; a blog published in the CMS later is rendered on its first visit,
// and every page refreshes hourly. Unknown slugs are a 404.
export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return {
    ...pageMetadata({
      title: post.seo.title,
      description: post.seo.description,
      keywords: post.seo.keywords,
      path: postUrl(post.slug),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      section: post.category,
      authors: [post.author],
      // the CMS banner when there is one, else the generated card
      image: post.image?.src ?? `${postUrl(post.slug)}/opengraph-image`,
      imageAlt: post.image?.alt ?? post.title,
    }),
    authors: [{ name: post.author }],
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blogs/[slug]">) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  const url = absoluteUrl(postUrl(post.slug));
  const more = (await getPosts())
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);


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
      wordCount: postWordCount(post),
      datePublished: post.date,
      dateModified: post.updated,
      image: post.image?.src ?? `${url}/opengraph-image`,
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
          {post.image && (
            // CMS banner images live on the CMS CDN; a plain img keeps that host out of next.config
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image.src}
              alt={post.image.alt}
              className="mb-8 aspect-video w-full rounded-[20px] object-cover"
            />
          )}
          <ArticleBody body={post.body} />
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
