import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnquiryButton from "@/components/EnquiryButton";
import JsonLd from "@/components/JsonLd";
import CallbackBand from "@/components/course/CallbackBand";
import FaqSection from "@/components/course/FaqSection";
import TrainerSection from "@/components/course/TrainerSection";
import {
  Band,
  CardGrid,
  LevelBadge,
  Lead,
  PageHero,
  PageTitle,
  SectionHead,
  Ticks,
} from "@/components/course/Section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GERMAN_COURSE,
  getLevel,
  getNeighbours,
  type Skill,
} from "@/lib/courses";
import { ADDRESS } from "@/lib/location";
import { ORG_ID, absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import {
  GERMAN_COURSE_URL,
  GERMAN_LEVELS,
  PHONE_PRIMARY,
  levelLabel,
  levelUrl,
} from "@/lib/site";
import { cn } from "@/lib/utils";

// Only the six levels exist; anything else is a 404 rather than an on-demand render.
export const dynamicParams = false;

export function generateStaticParams() {
  return GERMAN_LEVELS.map((l) => ({ level: l.slug }));
}

const SKILLS: Skill[] = ["reading", "listening", "writing", "speaking"];
const { glance, examIntro, skillLabels } = GERMAN_COURSE.level;
const card = "rounded-[20px] p-5 text-base ring-line md:p-7";

export async function generateMetadata({
  params,
}: PageProps<"/german/[level]">): Promise<Metadata> {
  const level = getLevel((await params).level);
  if (!level) return {};
  return pageMetadata({
    title: level.seo.title,
    description: level.seo.description,
    keywords: level.seo.keywords,
    path: levelUrl(level.slug),
    image: `${levelUrl(level.slug)}/opengraph-image`,
    imageAlt: `German ${level.code} course in Dehradun at Language Zone`,
  });
}

export default async function Page({ params }: PageProps<"/german/[level]">) {
  const level = getLevel((await params).level);
  if (!level) notFound();

  const { prev, next } = getNeighbours(level.slug);
  const course = levelLabel(level);

  const url = absoluteUrl(levelUrl(level.slug));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": `${url}#course`,
      url,
      name: `German ${level.code} Course in Dehradun (${level.name})`,
      description: level.description,
      courseCode: `GERMAN-${level.code}`,
      inLanguage: "de",
      educationalLevel: `CEFR ${level.code} (${level.name})`,
      educationalCredentialAwarded: level.exam,
      teaches: level.outcomes,
      syllabusSections: level.syllabus.map((name) => ({
        "@type": "Syllabus",
        name,
      })),
      provider: { "@id": ORG_ID },
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          courseMode: "Onsite",
          location: {
            "@type": "Place",
            name: "Language Zone, Race Course, Dehradun",
            address: ADDRESS,
          },
        },
        { "@type": "CourseInstance", courseMode: "Online" },
      ],
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "German course", path: GERMAN_COURSE_URL },
      { name: `German ${level.code}`, path: levelUrl(level.slug) },
    ]),
  ];

  const glanceRows = [
    ["Level", `${level.code}, ${level.name}`],
    ["Exam", level.exam],
    ["Mode", glance.mode],
    ["Batches", glance.batches],
    ["Fees and duration", glance.feesAndDuration],
  ];

  return (
    <main>
      <JsonLd data={jsonLd} />

      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "German course", href: GERMAN_COURSE_URL },
          { label: level.code },
        ]}
        className="flex flex-wrap items-start gap-3.5 md:gap-6"
      >
        <div className="min-w-0 flex-[3_1_480px]">
          <LevelBadge code={level.code} bg={level.bg} fg={level.fg} size="xl" />
          <div className="mt-5">
            <PageTitle>German {level.code} Course in Dehradun</PageTitle>
          </div>
          <p className="mt-2.5 font-disp text-[19px] text-indigo md:text-[22px]">
            {level.tagline}
          </p>
          <Lead>{level.description}</Lead>
          <div className="mt-6.5 flex flex-wrap gap-3">
            <EnquiryButton
              dialog="enroll"
              course={course}
              className="max-md:w-full"
            >
              Check batch availability
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
        </div>

        <Card
          aria-label="Course at a glance"
          className={cn(
            card,
            "min-w-0 flex-[2_1_340px] gap-0 shadow-[0_14px_36px_rgba(20,20,58,0.10)]",
          )}
        >
          <h2 className="font-disp text-2xl">Course at a glance</h2>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-3">
            {glanceRows.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-mute">{k}</dt>
                <dd className="font-medium text-navy">{v}</dd>
              </div>
            ))}
          </dl>
          <EnquiryButton
            dialog="curriculum"
            course={course}
            variant="ink"
            className="mt-5.5 w-full"
          >
            Get the {level.code} syllabus
          </EnquiryButton>
        </Card>
      </PageHero>

      <Band className="flex flex-wrap gap-7 md:gap-14">
        <div className="min-w-0 flex-[1_1_420px]">
          <SectionHead
            eyebrow="Outcomes"
            title={`What you will be able to do at ${level.code}`}
          />
          <Ticks items={level.outcomes} big />
        </div>
        <div className="min-w-0 flex-[1_1_420px]">
          <h3 className="mb-3.5 text-[22px] font-semibold">
            This course suits
          </h3>
          <Ticks items={level.suits} big />
        </div>
      </Band>

      <Band tone="paper">
        <SectionHead
          eyebrow="Syllabus"
          title={`What you will study in German ${level.code}`}
        />
        <ul className="flex flex-wrap gap-2.5">
          {level.syllabus.map((t) => (
            <li key={t}>
              <Badge
                variant="outline"
                className="h-auto rounded-full border-line bg-white px-4.5 py-2.5 text-base font-medium whitespace-normal text-navy"
              >
                {t}
              </Badge>
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <SectionHead eyebrow="The exam" title={level.exam} lead={examIntro} />
        <CardGrid as="ul" min="220px">
          {SKILLS.map((k) => (
            <li key={k}>
              <Card className={cn(card, "h-full gap-0")}>
                <p className="font-disp text-[15px] text-brand-red">
                  {skillLabels[k].de}
                </p>
                <h3 className="mt-0.5 text-[19px] font-semibold">
                  {skillLabels[k].en}
                </h3>
                <p className="mt-1.5 text-mute">{level.skills[k]}</p>
              </Card>
            </li>
          ))}
        </CardGrid>
      </Band>

      <TrainerSection
        tone="paper"
        title={`Your German ${level.code} trainer`}
      />

      <FaqSection
        title={`German ${level.code} course FAQs`}
        items={level.faq}
        tinted={false}
      />

      <Band tone="paper">
        <nav
          aria-label="Neighbouring levels"
          className="grid gap-3.5 md:grid-cols-2 md:gap-6"
        >
          {prev ? (
            <NeighbourLink
              href={levelUrl(prev.slug)}
              label="Previous level"
              title={`← German ${prev.code}: ${prev.name}`}
            />
          ) : (
            <span className="max-md:hidden" />
          )}
          {next && (
            <NeighbourLink
              href={levelUrl(next.slug)}
              label="Next level"
              title={`German ${next.code}: ${next.name} →`}
              alignEnd
            />
          )}
        </nav>
      </Band>

      <CallbackBand
        title={`Ready to start German ${level.code}?`}
        course={course}
      />
    </main>
  );
}

function NeighbourLink({
  href,
  label,
  title,
  alignEnd,
}: {
  href: string;
  label: string;
  title: string;
  alignEnd?: boolean;
}) {
  return (
    <Link href={href} className="group block">
      <Card
        className={cn(
          card,
          "h-full gap-1 text-navy transition-shadow group-hover:shadow-[0_12px_30px_rgba(20,20,58,0.10)]",
          alignEnd && "md:text-right",
        )}
      >
        <span className="text-mute">{label}</span>
        <b>{title}</b>
      </Card>
    </Link>
  );
}
