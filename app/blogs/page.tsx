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
import { getPosts } from "@/lib/blog";

const TITLE = "German Learning Blog | Goethe Exams and Grammar | Language Zone";
const DESCRIPTION =
  "Guides on Goethe-Zertifikat levels, German grammar, learning habits and studying in Germany from the trainers at Language Zone, Dehradun.";
const URL = "https://languagezone.in/blogs";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "German Learning Blog, Learn German, Goethe-Zertifikat, German Grammar, German Language Course In Dehradun, Study In Germany",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
  },
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main>
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
