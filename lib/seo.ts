// SEO building blocks shared by every page: canonical URLs, per-page metadata and the
// schema.org graph. Next merges metadata shallowly (a page's `openGraph` replaces the
// layout's), so pageMetadata() always returns the complete set for a page.

import type { Metadata } from "next";
import { ADDRESS, MAP_LINK } from "@/lib/location";
import { EMAIL, PHONE_PRIMARY, PHONE_SECONDARY } from "@/lib/site";

export const SITE_URL = "https://languagezone.in";
export const SITE_NAME = "Language Zone";
export const LOCALE = "en_IN";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Centre location (Race Course, Dehradun)
export const GEO = { lat: 30.29403265533804, lng: 77.99704247140885 };

export const SOCIAL_PROFILES = [
  "https://www.facebook.com/LanguagezoneTraining",
  "https://www.instagram.com/languagezone0309/",
  "https://www.linkedin.com/company/72137283/",
];

// Social card routes: app/opengraph-image.tsx by default; level and blog pages pass
// their own (app/german/[level]/opengraph-image.tsx, app/blogs/[slug]/opengraph-image.tsx).
const DEFAULT_IMAGE = "/opengraph-image";

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "/" : path}`;

const e164 = (tel: string) => `+91${tel}`;

/**
 * Complete metadata for one page: title, description, keywords, canonical,
 * Open Graph and Twitter. Social images come from the opengraph-image files.
 */
export function pageMetadata({
  title,
  description,
  keywords,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  section,
  authors,
  noIndex,
  image = DEFAULT_IMAGE,
  imageAlt = "Language Zone, German language course in Dehradun, A1 to C2",
}: {
  title: string;
  description: string;
  keywords?: string | string[];
  /** route path, e.g. "/german/a1" */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  authors?: string[];
  noIndex?: boolean;
  /** path of this page's 1200×630 social image */
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: LOCALE,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
      ...(type === "article"
        ? { publishedTime, modifiedTime, section, authors }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Site-wide graph: the local business (the institute) and the website. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": ORG_ID,
        name: SITE_NAME,
        alternateName: "Language Zone Dehradun",
        description:
          "German language institute in Dehradun offering Goethe-Zertifikat courses from A1 to C2, with online and offline batches.",
        url: absoluteUrl("/"),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/logo.png"),
          width: 968,
          height: 280,
        },
        image: absoluteUrl("/opengraph-image"),
        telephone: e164(PHONE_PRIMARY.tel),
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.replace(/, Dehradun, Uttarakhand 248001$/, ""),
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          postalCode: "248001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.lat,
          longitude: GEO.lng,
        },
        hasMap: MAP_LINK,
        areaServed: [
          { "@type": "City", name: "Dehradun" },
          { "@type": "State", name: "Uttarakhand" },
        ],
        contactPoint: [PHONE_PRIMARY, PHONE_SECONDARY].map((p) => ({
          "@type": "ContactPoint",
          telephone: e164(p.tel),
          contactType: "admissions",
          areaServed: "IN",
          availableLanguage: ["English", "German"],
        })),
        knowsAbout: [
          "German language",
          "Goethe-Zertifikat",
          "German A1 to C2 courses",
          "Study in Germany",
        ],
        sameAs: SOCIAL_PROFILES,
        parentOrganization: {
          "@type": "Organization",
          name: "Brillica Services",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** BreadcrumbList for a trail like Home › German course › A1. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}
