import type { Metadata } from "next";
import "@/styles/courses/about-us.css";
import "@/styles/courses/certificate.css";
import "@/styles/courses/course-curriculam.css";
import "@/styles/courses/faq.css";
import "@/styles/courses/our-faculties.css";
import "@/styles/courses/related-course.css";
import SpanishContent from "@/components/pages/SpanishContent";

export const metadata: Metadata = {
  title: "Best Spanish Language Training In Dehradun | Language Zone",
  description:
    "Language Zone provides the Best Spanish Language Training In Dehradun | Spanish Language Course In Dehradun | Learn Spanish in Dehradun.",
  keywords:
    "Spanish Language Training In Dehradun, Spanish Language Course In Dehradun, Learn Spanish in Dehradun, Learn Spanish Language in Dehradun, Spanish Language Classes in Dehradun, Spanish language training, Spanish language course, Spanish language classes, Learn Spanish, Learn Spanish language, dele certification, dele certificate.",
  alternates: {
    canonical: "https://languagezone.in/courses/spanish/",
  },
  openGraph: {
    type: "website",
    title: "Best Spanish Language Training In Dehradun | Language Zone",
    description:
      "Spanish Language Training In Dehradun, Spanish Language Course In Dehradun, Learn Spanish in Dehradun, Learn Spanish Language in Dehradun, Spanish Language Classes in Dehradun, Spanish language training, Spanish language course, Spanish language classes, Learn Spanish, Learn Spanish language, dele certification, dele certificate.",
    url: "https://languagezone.in/courses/spanish/",
  },
  other: {
    "identifier-URL": "https://languagezone.in/courses/spanish/",
    url: "https://languagezone.in/courses/spanish/",
    "instagram:title":
      "Best Spanish Language Training In Dehradun | Language Zone",
    "instagram:description":
      "Spanish Language Training In Dehradun, Spanish Language Course In Dehradun, Learn Spanish in Dehradun, Learn Spanish Language in Dehradun, Spanish Language Classes in Dehradun, Spanish language training, Spanish language course, Spanish language classes, Learn Spanish, Learn Spanish language, dele certification, dele certificate.",
    "instagram:card": "summary",
    "instagram:site": "@LanguageZone",
    "twitter:card": "https://languagezone.in/courses/spanish/",
    "twitter:site": "l",
    "twitter:title":
      "Best Spanish Language Training In Dehradun | Language Zone",
    "twitter:description":
      "Spanish Language Training In Dehradun, Spanish Language Course In Dehradun, Learn Spanish in Dehradun, Learn Spanish Language in Dehradun, Spanish Language Classes in Dehradun, Spanish language training, Spanish language course, Spanish language classes, Learn Spanish, Learn Spanish language, dele certification, dele certificate.",
    "twitter:image": "twitter_image",
    "twitter:url": "https://languagezone.in/courses/spanish/",
  },
};

export default function Page() {
  return <SpanishContent />;
}
