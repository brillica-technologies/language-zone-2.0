import type { Metadata } from "next";
import EnquiryButton from "@/components/EnquiryButton";
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
import { GERMAN_COURSE_URL, GERMAN_LEVELS, PHONE_PRIMARY } from "@/lib/site";
import { cn } from "@/lib/utils";

const { seo, hero, levelsSection, examSection, faq } = GERMAN_COURSE;
const URL = `https://languagezone.in${GERMAN_COURSE_URL}`;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: seo.title,
    description: seo.description,
    url: URL,
  },
};

export default function Page() {
  return (
    <main>
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
