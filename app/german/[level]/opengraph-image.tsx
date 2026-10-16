import { getLevel } from "@/lib/courses";
import { OG_SIZE, ogCard } from "@/lib/og";
import { GERMAN_LEVELS } from "@/lib/site";

export const alt = "German course in Dehradun at Language Zone";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return GERMAN_LEVELS.map((l) => ({ level: l.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const level = getLevel((await params).level);
  return ogCard({
    eyebrow: level ? level.exam : "Goethe-Zertifikat",
    title: level
      ? `German ${level.code} Course in Dehradun`
      : "German Course in Dehradun",
    subtitle: level?.tagline,
    badge: level ? { text: level.code, bg: level.bg, fg: level.fg } : undefined,
  });
}
