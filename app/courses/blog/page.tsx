import type { Metadata } from "next";
import "@/styles/blog.css";
import BlogBanner from "@/components/pages/BlogBanner";
import BlogCard from "@/components/pages/BlogCard";
import BlogEmpty from "@/components/pages/BlogEmpty";
import { getBlogs } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Best Foreign Language Courses In Dehradun By Language Zone",
  description:
    "Language Zone Provides The Best Foreign Language Courses In Dehradun. Language Training In IELTS, French, German, Spanish, etc with certification",
  keywords:
    "Language Courses In Dehradun, Foreign Language Courses In Dehradun, Language Training In Dehradun, Language Courses, Language Training, Goethe Certification, DELF Certification, DELE Certification, IELTS Certification, JLPT Certification",
  alternates: {
    canonical: "https://languagezone.in/",
  },
  openGraph: {
    type: "website",
    title: "Best Foreign Language Courses In Dehradun By Language Zone",
    description:
      "Language Courses In Dehradun, Foreign Language Courses In Dehradun, Language Training In Dehradun, Language Courses, Language Training, Goethe Certification, DELF Certification, DELE Certification, IELTS Certification, JLPT Certification.",
    url: "https://languagezone.in//",
  },
  other: {
    "identifier-URL": "https://languagezone.in/",
    url: "https://languagezone.in/",
    "instagram:title":
      "Best Foreign Language Courses In Dehradun By Language Zone",
    "instagram:description":
      "Language Courses In Dehradun, Foreign Language Courses In Dehradun, Language Training In Dehradun, Language Courses, Language Training, Goethe Certification, DELF Certification, DELE Certification, IELTS Certification, JLPT Certification",
    "instagram:card": "summary",
    "instagram:site": "@LanguageZone",
    "twitter:card": "https://languagezone.in/",
    "twitter:site": "l",
    "twitter:title":
      "Best Foreign Language Courses In Dehradun By Language Zone",
    "twitter:description":
      "Language Courses In Dehradun, Foreign Language Courses In Dehradun, Language Training In Dehradun, Language Courses, Language Training, Goethe Certification, DELF Certification, DELE Certification, IELTS Certification, JLPT Certification.",
    "twitter:image": "twitter_image",
    "twitter:url": "https://languagezone.in/",
  },
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main>
      <BlogBanner />

      <div className="blog_page_main_container">
        <div className="category_section_blog">
          <div className="card_section_main_container">
            <div className="card_btn_container_section">
              {blogs.length == 0 && <BlogEmpty />}

              <div className="card_section_scroller">
                <div className="card_container_flex_section">
                  <div className="card_section_inner_container">
                    {blogs.map((item) => (
                      <BlogCard key={item.path} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
