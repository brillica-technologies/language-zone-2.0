import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import { getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "German Language Course in Dehradun (A1–C2) | Language Zone",
  description:
    "Looking for a German Language Course in Dehradun? Join Language Zone for Goethe-Zertifikat preparation from A1 to C2, with expert trainers and online and offline classes.",
  keywords: [
    "German language course in Dehradun",
    "German classes in Dehradun",
    "learn German in Dehradun",
    "German institute in Dehradun",
    "Goethe-Zertifikat Dehradun",
    "Goethe exam preparation Dehradun",
    "German A1 course Dehradun",
    "online German classes Uttarakhand",
  ],
  path: "/",
});

export default function Page() {
  const posts = getPosts().slice(0, 3);
  return (
    <>
      <HomeContent posts={posts} />
    </>
  );
}
