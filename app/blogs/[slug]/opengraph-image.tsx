import { getPost, getPosts } from "@/lib/blog";
import { OG_SIZE, ogCard } from "@/lib/og";

export const alt = "German learning guide from Language Zone, Dehradun";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);
  return ogCard({
    eyebrow: post
      ? `${post.category} · Language Zone blog`
      : "Language Zone blog",
    title: post?.title ?? "German learning guides",
    subtitle: post ? `${post.readMinutes} min read` : undefined,
  });
}
