import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactContent from "@/components/pages/ContactContent";
import { ORG_ID, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const PATH = "/contact-us";

export const metadata: Metadata = pageMetadata({
  title: "Contact Language Zone | German Classes in Dehradun",
  description:
    "Contact Language Zone at Near Dwarka Store, EC Road, Race Course Dehradun, for German classes from A1 to C2. Call, WhatsApp or send an enquiry for a level check and batch dates.",
  keywords: [
    "contact Language Zone",
    "German classes in Dehradun contact",
    "German institute Race Course Dehradun",
    "German course enquiry Dehradun",
    "German language centre Dehradun address",
  ],
  path: PATH,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: absoluteUrl(PATH),
            name: "Contact Language Zone",
            about: { "@id": ORG_ID },
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact us", path: PATH },
          ]),
        ]}
      />
      <ContactContent />
    </>
  );
}
