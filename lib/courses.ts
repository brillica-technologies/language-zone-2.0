// German course content lives in data/german/*.json; this module types it and joins the
// per-level detail files with the level summaries. Pages read it at build time only.

import { GERMAN_LEVELS, type LevelSummary } from "@/lib/site";
import course from "@/data/german/course.json";
import a1 from "@/data/german/levels/a1.json";
import a2 from "@/data/german/levels/a2.json";
import b1 from "@/data/german/levels/b1.json";
import b2 from "@/data/german/levels/b2.json";
import c1 from "@/data/german/levels/c1.json";
import c2 from "@/data/german/levels/c2.json";

export type Faq = { q: string; a: string };
export type Skill = "reading" | "listening" | "writing" | "speaking";

/** Full level page content (data/german/levels/<slug>.json). */
export type LevelDetail = {
  seo: { title: string; description: string; keywords: string };
  tagline: string;
  outcomes: string[];
  suits: string[];
  syllabus: string[];
  skills: Record<Skill, string>;
  faq: Faq[];
};

export type Level = LevelSummary & LevelDetail;

export const GERMAN_COURSE = course;

const DETAILS: Record<string, LevelDetail> = { a1, a2, b1, b2, c1, c2 };

export function getLevel(slug: string): Level | null {
  const summary = GERMAN_LEVELS.find((l) => l.slug === slug);
  const detail = DETAILS[slug];
  return summary && detail ? { ...summary, ...detail } : null;
}

/** The levels either side of `slug`, for the previous / next links. */
export function getNeighbours(slug: string) {
  const i = GERMAN_LEVELS.findIndex((l) => l.slug === slug);
  return {
    prev: i > 0 ? GERMAN_LEVELS[i - 1] : null,
    next: i >= 0 && i < GERMAN_LEVELS.length - 1 ? GERMAN_LEVELS[i + 1] : null,
  };
}
