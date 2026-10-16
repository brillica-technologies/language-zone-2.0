import Link from "next/link";
import { Card } from "@/components/ui/card";
import { postUrl, type Post } from "@/lib/blog";

/** Text-only guide card from the design: category, title, excerpt, link. */
export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={postUrl(post.slug)} className="group block">
      <Card className="h-full gap-2.5 rounded-[20px] p-5 text-base ring-line transition-shadow group-hover:shadow-[0_12px_30px_rgba(20,20,58,0.10)] md:p-7">
        <p className="text-xs font-semibold tracking-widest text-brand-red uppercase">
          {post.category}
        </p>
        <h3 className="font-disp text-[23px] leading-tight text-navy">
          {post.title}
        </h3>
        <p className="text-mute">{post.excerpt}</p>
        <span className="mt-auto pt-1 font-semibold text-indigo">
          Read the guide →
        </span>
      </Card>
    </Link>
  );
}
