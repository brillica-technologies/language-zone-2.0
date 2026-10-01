import type { Metadata } from "next";
import "@/styles/courses/about-us.css";
import "@/styles/courses/certificate.css";
import "@/styles/courses/course-curriculam.css";
import "@/styles/courses/faq.css";
import "@/styles/courses/our-faculties.css";
import "@/styles/courses/related-course.css";
import IeltsContent from "@/components/pages/IeltsContent";

export const metadata: Metadata = {
  title: "Best IELTS Coaching in Dehradun | IELTS certification",
  description:
    "Language Zone provides the Best IELTS Coaching in Dehradun |Best IELTS Training In Dehradun | IELTS course in Dehradun.",
  keywords:
    "Best IELTS Coaching in Dehradun, IELTS Coaching in Dehradun, IELTS Training in Dehradun, IELTS course in Dehradun, Best IELTS Coaching, IELTS Coaching, Best IELTS Training, IELTS Training, IELTS course, IELTS certification, IELTS certificate.",
  alternates: {
    canonical: "https://languagezone.in/courses/ielts/",
  },
  openGraph: {
    type: "website",
    title: "Best IELTS Coaching in Dehradun | IELTS certification",
    description:
      "Best IELTS Coaching in Dehradun, IELTS Coaching in Dehradun, IELTS Training in Dehradun, IELTS course in Dehradun, Best IELTS Coaching, IELTS Coaching, Best IELTS Training, IELTS Training, IELTS course, IELTS certification, IELTS certificate.",
    url: "https://languagezone.in/courses/ielts/",
  },
  other: {
    "identifier-URL": "https://languagezone.in/courses/ielts/",
    url: "https://languagezone.in/courses/ielts/",
    "instagram:title": "Best IELTS Coaching in Dehradun | IELTS certification",
    "instagram:description":
      "Best IELTS Coaching in Dehradun, IELTS Coaching in Dehradun, IELTS Training in Dehradun, IELTS course in Dehradun, Best IELTS Coaching, IELTS Coaching, Best IELTS Training, IELTS Training, IELTS course, IELTS certification, IELTS certificate.",
    "instagram:card": "summary",
    "instagram:site": "@LanguageZone",
    "twitter:card": "https://languagezone.in/courses/ielts/",
    "twitter:site": "l",
    "twitter:title": "Best IELTS Coaching in Dehradun | IELTS certification",
    "twitter:description":
      "Best IELTS Coaching in Dehradun, IELTS Coaching in Dehradun, IELTS Training in Dehradun, IELTS course in Dehradun, Best IELTS Coaching, IELTS Coaching, Best IELTS Training, IELTS Training, IELTS course, IELTS certification, IELTS certificate.",
    "twitter:image": "twitter_image",
    "twitter:url": "https://languagezone.in/courses/ielts/",
  },
};

export default function Page() {
  return <IeltsContent />;
}
