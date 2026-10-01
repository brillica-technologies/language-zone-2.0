import type { Metadata } from "next";
import "@/styles/index.css";
import "@/styles/hero.css";
import HomeContent from "@/components/pages/HomeContent";

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

export default function Page() {
  return <HomeContent />;
}
