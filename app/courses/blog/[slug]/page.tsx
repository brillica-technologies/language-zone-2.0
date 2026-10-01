import type { Metadata } from "next";
import "@/styles/blog_full_page.css";
import { getBlog } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getBlog(slug);

  return {
    title: data.pageTitle,
    description: data.meta_description,
    keywords: data.keywords,
    alternates: { canonical: "https://languagezone.in/" },
    openGraph: {
      type: "website",
      title: "Best Foreign Language Courses In Dehradun By Language Zone",
      description: data.meta_description,
      url: "https://languagezone.in//",
    },
    other: {
      "identifier-URL": "https://languagezone.in/",
      url: "https://languagezone.in/",
      "instagram:title":
        "Best Foreign Language Courses In Dehradun By Language Zone",
      "instagram:description": data.meta_description,
      "instagram:card": "summary",
      "instagram:site": "@LanguageZone",
      "twitter:card": "https://languagezone.in/",
      "twitter:site": "",
      "twitter:title":
        "Best Foreign Language Courses In Dehradun By Language Zone",
      "twitter:description": data.meta_description,
      "twitter:image": "twitter_image",
      "twitter:url": "https://languagezone.in/",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const data = await getBlog(slug);

  return (
    <main style={{ background: "#ede8f2" }}>
      <div className="div_main_outer_container">
        <div className="blog-date-section">
          <p className="blog-date">Created On {data.createdOn}</p>
        </div>
        <div
          className="main_blog_outer_section"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </main>
  );
}
