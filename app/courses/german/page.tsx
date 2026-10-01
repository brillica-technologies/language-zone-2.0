import type { Metadata } from "next";
import "@/styles/courses/about-us.css";
import "@/styles/courses/certificate.css";
import "@/styles/courses/course-curriculam.css";
import "@/styles/courses/faq.css";
import "@/styles/courses/our-faculties.css";
import "@/styles/courses/related-course.css";
import GermanContent from "@/components/pages/GermanContent";

export const metadata: Metadata = {
  title: "Best German Language Training In Dehradun | Language Zone",
  description:
    "Language Zone provides the Best German Language Training In Dehradun | German language Course In Dehradun| Goethe certification",
  keywords:
    "German Language Training In Dehradun, German language Course In Dehradun, German Language Classes In Dehradun, Learn German language online, Learn German online, German language training, German language course, German language classes, German language, Learn German online, Learn German language online, Goethe certificate, Goethe certification.",
  alternates: {
    canonical: "https://languagezone.in/courses/german/",
  },
  openGraph: {
    type: "website",
    title: "Best German Language Training In Dehradun | Language Zone",
    description:
      "German Language Training In Dehradun, German language Course In Dehradun, German Language Classes In Dehradun, Learn German language online, Learn German online, German language training, German language course, German language classes, German language, Learn German online, Learn German language online, Goethe certificate, Goethe certification.",
    url: "https://languagezone.in/courses/german/",
  },
  other: {
    "identifier-URL": "https://languagezone.in/courses/german/",
    url: "https://languagezone.in/courses/german/",
    "instagram:title":
      "Best German Language Training In Dehradun | Language Zone",
    "instagram:description":
      "German Language Training In Dehradun, German language Course In Dehradun, German Language Classes In Dehradun, Learn German language online, Learn German online, German language training, German language course, German language classes, German language, Learn German online, Learn German language online, Goethe certificate, Goethe certification.",
    "instagram:card": "summary",
    "instagram:site": "@LanguageZone",
    "twitter:card": "https://languagezone.in/courses/german/",
    "twitter:site": "l",
    "twitter:title":
      "Best German Language Training In Dehradun | Language Zone",
    "twitter:description":
      "German Language Training In Dehradun, German language Course In Dehradun, German Language Classes In Dehradun, Learn German language online, Learn German online, German language training, German language course,, German language classes, German language, Learn German online, Learn German language online, Goethe certificate, Goethe certification.",
    "twitter:image": "twitter_image",
    "twitter:url": "https://languagezone.in/courses/german/",
  },
};

export default function Page() {
  return <GermanContent />;
}
