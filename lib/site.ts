// Shared content for the redesigned site chrome and home page.

export const PHONE_PRIMARY = { tel: "8882140688", label: "+91 88821 40688" };
export const PHONE_SECONDARY = { tel: "7351676494", label: "+91 73516 76494" };
export const EMAIL = "info@brillicaservices.com";
export const PAY_URL = "https://rzp.io/l/PgzYK7Q";
export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=918882140688";
export { ADDRESS, MAP_LINK } from "@/lib/location";

// Level pages do not exist yet (later phase), so every level links to the German course page.
export const GERMAN_COURSE_URL = "/courses/german";

export type GermanLevel = {
  code: string;
  name: string;
  bg: string;
  fg: string;
  summary: string;
  exam: string;
  shows: string;
};

export const GERMAN_LEVELS: GermanLevel[] = [
  {
    code: "A1",
    name: "Beginner",
    bg: "#FFD010",
    fg: "#14143A",
    summary: "Introduce yourself and handle everyday phrases.",
    exam: "Goethe-Zertifikat A1: Start Deutsch 1",
    shows: "Basic everyday phrases",
  },
  {
    code: "A2",
    name: "Elementary",
    bg: "#F59E0B",
    fg: "#14143A",
    summary: "Describe your routine, the past and simple plans.",
    exam: "Goethe-Zertifikat A2",
    shows: "Simple routine communication",
  },
  {
    code: "B1",
    name: "Intermediate",
    bg: "#D02020",
    fg: "#FFFFFF",
    summary: "Give opinions, write emails, manage most situations.",
    exam: "Goethe-Zertifikat B1",
    shows: "Independent use in most situations",
  },
  {
    code: "B2",
    name: "Upper intermediate",
    bg: "#9E1A1A",
    fg: "#FFFFFF",
    summary: "Join discussions and write formal, detailed texts.",
    exam: "Goethe-Zertifikat B2",
    shows: "Fluent, detailed interaction",
  },
  {
    code: "C1",
    name: "Advanced",
    bg: "#2E2E8F",
    fg: "#FFFFFF",
    summary: "Fluent, flexible German for study and career.",
    exam: "Goethe-Zertifikat C1",
    shows: "Effective, flexible use for study and work",
  },
  {
    code: "C2",
    name: "Proficient",
    bg: "#14143A",
    fg: "#FFFFFF",
    summary: "Nuance, precision and the highest Goethe certificate.",
    exam: "Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom",
    shows: "Near-native mastery",
  },
];

export const OTHER_COURSES = [
  { href: "/courses/spanish", label: "Spanish" },
  { href: "/courses/ielts", label: "IELTS" },
];
