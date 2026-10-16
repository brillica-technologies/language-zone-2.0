/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import CallbackBand from "@/components/course/CallbackBand";
import {
  Band,
  CardGrid,
  Lead,
  PageHero,
  PageTitle,
  SectionHead,
} from "@/components/course/Section";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import about from "@/data/about.json";
import { MAP_EMBED } from "@/lib/location";
import { ADDRESS, MAP_LINK, PHONE_PRIMARY, PHONE_SECONDARY } from "@/lib/site";
import { cn } from "@/lib/utils";

/** A trainer card; add entries to data/about.json → team.trainers to show the section. */
type Trainer = { name: string; role: string; bio: string; photo?: string };

const { seo, hero, story, principles, team, visit } = about;
const trainers: Trainer[] = team.trainers;
const URL = "https://languagezone.in/about-us";
const card = "rounded-[20px] p-5 text-base ring-line md:p-7";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: URL,
  name: seo.title,
  description: seo.description,
  about: {
    "@type": "EducationalOrganization",
    name: "Language Zone",
    url: "https://languagezone.in/",
    parentOrganization: { "@type": "Organization", name: "Brillica Services" },
  },
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero crumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}>
        <PageTitle>{hero.title}</PageTitle>
        <Lead>{hero.lead}</Lead>
      </PageHero>

      <Band className="flex flex-wrap items-center gap-7 md:gap-14">
        <div className="min-w-0 flex-[1_1_480px]">
          <SectionHead eyebrow={story.eyebrow} title={story.title} />
          {story.paragraphs.map((p) => (
            <p key={p} className="mt-3.5 text-[17px] text-mute first:mt-0">
              {p}
            </p>
          ))}
        </div>
        {/* stands in for the design's centre photo until real photos are added */}
        <div className="min-w-0 flex-[1_1_480px] overflow-hidden rounded-[22px] bg-ink text-white">
          <div className="tri-stripe" />
          <ul className="grid grid-cols-2 gap-px bg-ink-soft">
            {story.facts.map((f, i) => (
              <li key={f.small} className="bg-ink p-5 md:p-7">
                <b
                  className={cn(
                    "block font-disp text-[26px] leading-tight md:text-[34px]",
                    i % 3 === 0 ? "text-gold" : "text-white",
                  )}
                >
                  {f.big}
                </b>
                <span className="mt-1 block text-on-ink">{f.small}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band tone="paper">
        <SectionHead eyebrow={principles.eyebrow} title={principles.title} />
        <CardGrid as="ul">
          {principles.items.map((p) => (
            <li key={p.title}>
              <Card className={cn(card, "h-full gap-0")}>
                <h3 className="text-[19px] font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-mute">{p.text}</p>
              </Card>
            </li>
          ))}
        </CardGrid>
      </Band>

      {trainers.length > 0 && (
        <Band>
          <SectionHead eyebrow={team.eyebrow} title={team.title} />
          <CardGrid as="ul">
            {trainers.map((t) => (
              <li key={t.name}>
                <Card className={cn(card, "h-full gap-0")}>
                  {t.photo && (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="mb-4 aspect-square w-24 rounded-2xl object-cover"
                    />
                  )}
                  <h3 className="text-[19px] font-semibold">{t.name}</h3>
                  <p className="text-sm font-medium text-indigo">{t.role}</p>
                  <p className="mt-1.5 text-mute">{t.bio}</p>
                </Card>
              </li>
            ))}
          </CardGrid>
        </Band>
      )}

      <Band
        tone={trainers.length > 0 ? "paper" : "white"}
        className="flex flex-wrap items-center gap-7 md:gap-14"
      >
        <div className="min-w-0 flex-[1_1_480px]">
          <SectionHead eyebrow={visit.eyebrow} title={visit.title} />
          <address className="text-mute not-italic">{ADDRESS}</address>
          <p className="mt-3.5 text-[17px] font-semibold">
            <a href={`tel:${PHONE_PRIMARY.tel}`}>{PHONE_PRIMARY.label}</a>
            {" · "}
            <a href={`tel:${PHONE_SECONDARY.tel}`}>{PHONE_SECONDARY.label}</a>
          </p>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener"
            className={cn(
              buttonVariants({ variant: "ink", size: "pill" }),
              "mt-6.5 max-md:w-full",
            )}
          >
            Get directions
          </a>
        </div>
        <iframe
          className="block h-55 min-w-0 flex-[1_1_480px] rounded-[22px] border-0 bg-tint md:h-[300px]"
          title="Language Zone centre on Google Maps"
          src={MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Band>

      <CallbackBand />
    </main>
  );
}
