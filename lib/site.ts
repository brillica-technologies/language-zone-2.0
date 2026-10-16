// Shared content for the redesigned site chrome and home page.

import levelSummaries from "@/data/german/levels.json";

export const PHONE_PRIMARY = { tel: "8882140688", label: "+91 88821 40688" };
export const PHONE_SECONDARY = { tel: "8979544473", label: "+91 89795 44473" };
export const EMAIL = "info@brillicaservices.com";
export const PAY_URL = "https://rzp.io/l/PgzYK7Q";
export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=918979544473";
export { ADDRESS, MAP_LINK } from "@/lib/location";

// Level summaries for menus, cards and tables. Full level content is in lib/courses.ts,
// which only pages import, so client components (header, form) stay small.

export type LevelSummary = {
  slug: string;
  code: string;
  name: string;
  bg: string;
  fg: string;
  summary: string;
  description: string;
  highlights: string[];
  exam: string;
  shows: string;
};

export const GERMAN_LEVELS: LevelSummary[] = levelSummaries;
export const GERMAN_COURSE_URL = "/german";
export const levelUrl = (slug: string) => `${GERMAN_COURSE_URL}/${slug}`;

/** "German B1: Intermediate", the label used in menus and the enquiry form. */
export const levelLabel = (l: LevelSummary) => `German ${l.code}: ${l.name}`;
