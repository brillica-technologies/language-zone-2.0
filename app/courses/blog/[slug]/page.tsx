import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { GERMAN_LEVELS } from "@/lib/site";

// Posts come from data/blog/posts.json; unknown slugs are a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

const SITE = "https://languagezone.in";

export async function generateMetadata({
  params,
}: PageProps<"/courses/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `${SITE}${postUrl(post.slug)}`;
  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical: url },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.seo.title,
      description: post.seo.description,
      url,
      publishedTime: post.date,
      section: post.category,
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/courses/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = `${SITE}${postUrl(post.slug)}`;
  const more = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seo.description,
      keywords: post.seo.keywords,
      articleSection: post.category,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
      publisher: {
        "@type": "EducationalOrganization",
        name: "Language Zone",
        url: `${SITE}/`,
      },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: "Home", item: `${SITE}/` },
        { name: "Blog", item: `${SITE}/courses/blog` },
        { name: post.title, item: url },
      ].map((c, i) => ({ "@type": "ListItem", position: i + 1, ...c })),
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/courses/blog" },
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
