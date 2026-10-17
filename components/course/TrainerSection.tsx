import Image from "next/image";
import { Band, SectionHead } from "@/components/course/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TRAINERS, type Trainer } from "@/lib/trainers";
import { cn } from "@/lib/utils";

/** "Meet your trainer" band; hidden when there are no trainers in data/trainers.json. */
export default function TrainerSection({
  eyebrow = "Your trainer",
  title = "Learn German with an experienced trainer",
  tone = "white",
}: {
  eyebrow?: string;
  title?: string;
  tone?: "white" | "paper";
}) {
  if (TRAINERS.length === 0) return null;
  const single = TRAINERS.length === 1;

  return (
    <Band tone={tone}>
      <SectionHead eyebrow={eyebrow} title={title} />
      <ul
        className={cn(
          "grid gap-3.5 md:gap-6",
          !single && "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {TRAINERS.map((t) => (
          <li key={t.id}>
            <TrainerCard trainer={t} wide={single} />
          </li>
        ))}
      </ul>
    </Band>
  );
}

export function TrainerCard({
  trainer,
  wide,
}: {
  trainer: Trainer;
  /** photo beside the text on larger screens (used when there is one trainer) */
  wide?: boolean;
}) {
  return (
    <Card
      className={cn(
        "h-full gap-0 overflow-hidden rounded-[20px] p-0 text-base ring-line",
        wide && "md:flex-row",
      )}
    >
      {trainer.photo && (
        <div
          className={cn(
            "relative aspect-[4/5] w-full shrink-0 bg-tint",
            wide && "md:w-[280px]",
          )}
        >
          <Image
            src={trainer.photo}
            alt={`${trainer.name}, ${trainer.role} at Language Zone, Dehradun`}
            fill
            placeholder="blur"
            sizes={
              wide
                ? "(min-width: 768px) 280px, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            }
            className="object-cover object-[50%_22%]"
          />
        </div>
      )}
      <div className="flex flex-col justify-center gap-3 p-5 md:p-8">
        <div>
          <h3 className="font-disp text-[26px] leading-tight text-navy md:text-3xl">
            {trainer.name}
          </h3>
          <p className="mt-1 font-medium text-brand-red">{trainer.role}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {[trainer.experience, trainer.levels].map((t) => (
            <li key={t}>
              <Badge
                variant="outline"
                className="h-auto rounded-full border-line bg-paper px-3.5 py-1.5 text-sm font-medium text-navy"
              >
                {t}
              </Badge>
            </li>
          ))}
        </ul>
        <p className="max-w-150 text-mute">{trainer.bio}</p>
      </div>
    </Card>
  );
}
