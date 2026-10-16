import type { Metadata } from "next";
import EnquiryButton from "@/components/EnquiryButton";
import JsonLd from "@/components/JsonLd";
import CallbackBand from "@/components/course/CallbackBand";
import ExamTable from "@/components/course/ExamTable";
import FaqSection from "@/components/course/FaqSection";
import LevelCard from "@/components/course/LevelCard";
import {
  Band,
  CardGrid,
  Lead,
  PageHero,
  PageTitle,
  SectionHead,
} from "@/components/course/Section";
import { buttonVariants } from "@/components/ui/button";
import { GERMAN_COURSE } from "@/lib/courses";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import {
  GERMAN_COURSE_URL,
  GERMAN_LEVELS,
  PHONE_PRIMARY,
  levelUrl,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const { seo, hero, levelsSection, examSection, faq } = GERMAN_COURSE;
export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  path: GERMAN_COURSE_URL,
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "German courses in Dehradun, A1 to C2",
    itemListElement: GERMAN_LEVELS.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(levelUrl(l.slug)),
      name: `German ${l.code} course in Dehradun`,
    })),
  },
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "German course", path: GERMAN_COURSE_URL },
  ]),
];

export default function Page() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "German course" }]}
      >
        <PageTitle>{hero.title}</PageTitle>
        <Lead>{hero.lead}</Lead>
        <div className="mt-6.5 flex flex-wrap gap-3">
          <EnquiryButton className="max-md:w-full">
            Check your level
          </EnquiryButton>
          <a
            href={`tel:${PHONE_PRIMARY.tel}`}
            className={cn(
              buttonVariants({ variant: "outline-ink", size: "pill" }),
              "max-md:w-full",
            )}
          >
            Call {PHONE_PRIMARY.label}
          </a>
        </div>
      </PageHero>

      <Band>
        <SectionHead
          eyebrow={levelsSection.eyebrow}
          title={levelsSection.title}
        />
        <CardGrid min="360px">
          {GERMAN_LEVELS.map((l) => (
            <LevelCard key={l.slug} level={l} detailed />
          ))}
        </CardGrid>
      </Band>

      <Band tone="paper">
        <SectionHead eyebrow={examSection.eyebrow} title={examSection.title} />
        <ExamTable />
      </Band>

      <FaqSection title="German course FAQs" items={faq} tinted={false} />

      <CallbackBand />
    </main>
  );
}
