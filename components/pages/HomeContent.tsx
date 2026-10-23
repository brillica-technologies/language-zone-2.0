import Link from "next/link";
import EnquiryButton from "@/components/EnquiryButton";
import CallbackBand from "@/components/course/CallbackBand";
import ExamTable from "@/components/course/ExamTable";
import FaqSection from "@/components/course/FaqSection";
import LevelCard from "@/components/course/LevelCard";
import {
  Band,
  CardGrid,
  Eyebrow,
  Lead,
  SectionHead,
} from "@/components/course/Section";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import home from "@/data/home.json";
import PostCard from "@/components/blog/PostCard";
import type { Post } from "@/lib/blog";
import { GERMAN_COURSE_URL, GERMAN_LEVELS, levelUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

// A1 → C2 ladder bar heights in px, phone and desktop (from the design)
const LADDER = [
  [66, 84],
  [90, 124],
  [114, 164],
  [138, 204],
  [162, 244],
  [186, 284],
];

const TRUST = [
  "Goethe-Zertifikat preparation",
  "Online and offline batches",
  "Race Course, Dehradun",
];

const card = "rounded-[20px] p-5 text-base ring-line md:p-7";

export default function HomeContent({ posts }: { posts: Post[] }) {
  return (
    <main>
      <section className="bg-paper">
        <div className="page-wrap flex flex-wrap items-center gap-7 py-8 md:gap-14 md:py-18">
          <div className="min-w-0 flex-[1_1_480px]">
            <Eyebrow>German language institute · Dehradun</Eyebrow>
            <h1 className="mt-3.5 font-disp text-4xl leading-[1.06] md:text-[58px]">
              German Language Course in Dehradun
            </h1>
            <Lead>
              Learn German with a German language course in Dehradun at Language
              Zone. Our German classes in Dehradun cover levels A1 to C2 with
              certified trainers. Each level prepares you for the
              Goethe-Zertifikat, helping you earn a recognised certificate
              accepted by universities, employers, and embassies.
            </Lead>
            <div className="mt-6.5 flex flex-wrap gap-3">
              <EnquiryButton className="max-md:w-full">
                Enquire Now
              </EnquiryButton>
              <Link
                href={GERMAN_COURSE_URL}
                className={cn(
                  buttonVariants({ variant: "outline-ink", size: "pill" }),
                  "max-md:w-full",
                )}
              >
                View all levels
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-brand-red" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 flex-[1_1_480px]">
            <p className="mb-4 font-disp text-xl text-navy">
              Guten Tag! Your path from A1 to C2
            </p>
            <ol
              aria-label="German levels from A1 to C2"
              className="flex items-end gap-1.5 md:min-h-[330px] md:gap-2"
            >
              {GERMAN_LEVELS.map((l, i) => (
                <li
                  key={l.slug}
                  className="h-(--h-sm) min-w-0 flex-1 md:h-(--h)"
                  style={
                    {
                      "--h-sm": `${LADDER[i][0]}px`,
                      "--h": `${LADDER[i][1]}px`,
                    } as React.CSSProperties
                  }
                >
                  <Link
                    href={levelUrl(l.slug)}
                    className="flex h-full flex-col justify-end overflow-hidden rounded-t-[14px] rounded-b-[4px] px-1.5 py-2 leading-tight transition-transform hover:-translate-y-1 md:px-2.5 md:py-3"
                    style={{ background: l.bg, color: l.fg }}
                  >
                    <b className="font-disp text-xl md:text-2xl">{l.code}</b>
                    <span className="mt-1 hidden text-xs font-medium hyphens-auto md:block">
                      {l.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Band>
        <SectionHead
          eyebrow="Courses"
          title="Choose your German level"
          lead="Explore German language classes in Dehradun with six courses designed for every stage of your learning journey, from A1 to C2. Open a level to discover its syllabus, exam details, and who it is best suited for."
        />
        <CardGrid min="360px">
          {GERMAN_LEVELS.map((l) => (
            <LevelCard key={l.slug} level={l} />
          ))}
        </CardGrid>
      </Band>

      <Band tone="ink">
        <SectionHead
          dark
          eyebrow="Why Language Zone"
          title="Quality German teaching, priced for students"
        />
        <CardGrid as="ul" min="240px">
          {home.why.map((w) => (
            <li key={w.title} className="rounded-[20px] bg-ink-soft p-5 md:p-7">
              <h3 className="text-[19px] leading-snug font-semibold text-gold">
                {w.title}
              </h3>
              <p className="mt-2 text-on-ink-soft">{w.text}</p>
            </li>
          ))}
        </CardGrid>
      </Band>

      <Band>
        <SectionHead
          eyebrow="How it works"
          title="From first class to certificate in four steps"
        />
        <CardGrid as="ol" min="230px">
          {home.steps.map((s, i) => (
            <li key={s.title}>
              <Card className={cn(card, "h-full gap-0")}>
                <span className="mb-3 flex size-10 items-center justify-center rounded-full bg-gold font-semibold text-ink">
                  {i + 1}
                </span>
                <h3 className="text-[19px] font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-mute">{s.text}</p>
              </Card>
            </li>
          ))}
        </CardGrid>
      </Band>

      <Band tone="paper">
        <SectionHead
          eyebrow="Who learns German"
          title="German for study, work and family"
        />
        <CardGrid as="ul">
          {home.audiences.map((a) => (
            <li key={a.title}>
              <Card className={cn(card, "h-full gap-0")}>
                <h3 className="text-[19px] font-semibold">{a.title}</h3>
                <p className="mt-1.5 text-mute">{a.text}</p>
              </Card>
            </li>
          ))}
        </CardGrid>
      </Band>

      <Band>
        <SectionHead
          eyebrow="Certifications"
          title="German levels and Goethe exams at a glance"
        />
        <ExamTable />
      </Band>

      <Band
        tone="paper"
        id="about"
        className="flex flex-wrap items-center gap-7 md:gap-14"
      >
        <div className="min-w-0 flex-[1_1_440px]">
          <SectionHead
            eyebrow="About"
            title="German Language Institute in Dehradun Built Around Your Goals"
          />
          <p className="text-[17px] text-mute">
            Language Zone is a trusted German Language Institute in Dehradun,
            run by Brillica Services. We provide professional German Language
            Training in Dehradun for students, job seekers, and working
            professionals. Our certified trainers prepare learners for the
            Goethe-Zertifikat exams at every level, using a practical,
            communicative approach that helps you start speaking German from
            your very first class.
          </p>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "ink", size: "pill" }),
              "mt-6.5 max-md:w-full",
            )}
          >
            About Language Zone
          </Link>
        </div>
        <ul className="grid min-w-0 flex-[1_1_440px] grid-cols-2 gap-3.5 md:gap-6">
          {home.facts.map((f, i) => (
            <li key={f.small}>
              <Card className={cn(card, "h-full gap-1")}>
                <b
                  className={cn(
                    "font-disp text-[26px] leading-tight text-navy md:text-[34px]",
                    i === 0 && "text-brand-red",
                    i === 3 && "text-indigo",
                  )}
                >
                  {f.big}
                </b>
                <span className="text-mute">{f.small}</span>
              </Card>
            </li>
          ))}
        </ul>
      </Band>

      {posts.length > 0 && (
        <Band>
          <SectionHead
            eyebrow="Guides"
            title="Learning guides from our trainers"
          />
          <CardGrid min="320px">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </CardGrid>
          <p className="mt-7 text-center">
            <Link href="/blogs" className="font-semibold text-indigo">
              All articles →
            </Link>
          </p>
        </Band>
      )}

      <FaqSection title="Frequently asked questions" items={home.faq} />

      <CallbackBand />
    </main>
  );
}
