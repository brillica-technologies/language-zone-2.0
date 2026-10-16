import Link from "next/link";
import { Card } from "@/components/ui/card";
import { LevelBadge, Ticks } from "@/components/course/Section";
import { levelUrl, type LevelSummary } from "@/lib/site";

/** Level card used on the home page, the German course page and level pages. */
export default function LevelCard({
  level,
  detailed = false,
}: {
  level: LevelSummary;
  /** show the longer description and highlights (German course page) */
  detailed?: boolean;
}) {
  return (
    <Link href={levelUrl(level.slug)} className="group block">
      <Card className="h-full flex-col gap-3 rounded-[20px] p-5 text-base ring-line transition-shadow group-hover:shadow-[0_12px_30px_rgba(20,20,58,0.10)] group-hover:ring-on-ink md:flex-row md:gap-4.5 md:p-7">
        <LevelBadge code={level.code} bg={level.bg} fg={level.fg} />
        <div>
          <h3 className="text-xl leading-snug font-semibold">
            German {level.code}: {level.name}
          </h3>
          <p className="mt-1.5 text-mute">
            {detailed ? level.description : level.summary}
          </p>
          {detailed && <Ticks items={level.highlights} />}
          <p className="mt-1.5 text-[13px] font-medium text-indigo">
            {level.exam}
          </p>
          <span className="mt-2.5 inline-block font-semibold text-indigo">
            View {level.code} course →
          </span>
        </div>
      </Card>
    </Link>
  );
}
