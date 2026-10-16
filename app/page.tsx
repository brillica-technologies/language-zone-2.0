import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import { getPosts } from "@/lib/blog";
import { ADDRESS, EMAIL, PHONE_PRIMARY } from "@/lib/site";

const TITLE = "German Language Course in Dehradun | A1 to C2 | Language Zone";
const DESCRIPTION =
  "Learn German in Dehradun with Language Zone. Certified trainers, Goethe-Zertifikat preparation from A1 to C2, online and offline batches.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "German Language Course In Dehradun, German Classes In Dehradun, Learn German In Dehradun, Goethe Certification, Goethe-Zertifikat A1, A2, B1, B2, C1, C2, Language Courses In Dehradun",
  alternates: {
    canonical: "https://languagezone.in/",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://languagezone.in//",
  },
  other: {
    "identifier-URL": "https://languagezone.in/",
    url: "https://languagezone.in/",
    "instagram:title": TITLE,
    "instagram:description": DESCRIPTION,
    "instagram:card": "summary",
    "instagram:site": "@LanguageZone",
    "twitter:card": "https://languagezone.in/",
    "twitter:site": "l",
    "twitter:title": TITLE,
    "twitter:description": DESCRIPTION,
    "twitter:image": "twitter_image",
    "twitter:url": "https://languagezone.in/",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Language Zone",
  description:
    "German language institute in Dehradun offering Goethe-Zertifikat courses from A1 to C2.",
  url: "https://languagezone.in/",
  telephone: PHONE_PRIMARY.label,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.replace(/, Dehradun, Uttarakhand 248001$/, ""),
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },
  parentOrganization: { "@type": "Organization", name: "Brillica Services" },
  sameAs: [
    "https://www.facebook.com/LanguagezoneTraining",
    "https://www.instagram.com/languagezone0309/",
    "https://www.linkedin.com/company/72137283/",
  ],
};

export default function Page() {
  const posts = getPosts().slice(0, 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <HomeContent posts={posts} />
    </>
  );
}
