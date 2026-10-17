import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import ThankYouActions from "@/components/ThankYouActions";
import { Band, CardGrid, Lead, SectionHead } from "@/components/course/Section";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GERMAN_COURSE_URL, PHONE_PRIMARY, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

// Every enquiry form redirects here (full page load) so analytics can count a
// conversion as a page view of /thank-you, plus the "lz_lead" dataLayer event.
export const metadata: Metadata = {
  title: { absolute: "Thank You | Language Zone" },
  description: "Thank you for contacting Language Zone, Dehradun.",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    title: "We call you",
    text: "A trainer calls your WhatsApp number, usually within a few working hours.",
  },
  {
    title: "Level check",
    text: "A short chat to understand your goal and find the right German level.",
  },
  {
    title: "Pick your batch",
    text: "Choose online or offline, morning or evening, and start learning.",
  },
];

export default async function ThankYouPage({
  searchParams,
}: PageProps<"/thank-you">) {
  const params = await searchParams;
  const syllabus = params.for === "syllabus";
  const token = typeof params.token === "string" ? params.token : undefined;
  const downloadUrl =
    syllabus && token
      ? `/api/syllabus?token=${encodeURIComponent(token)}`
      : undefined;

  return (
    <main>
      <Band tone="tint" className="text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold text-ink">
          <CheckIcon className="size-8" strokeWidth={3} aria-hidden="true" />
        </span>
        <h1 className="mt-5 font-disp text-4xl leading-[1.06] md:text-[52px]">
          Thank you!
        </h1>
        <Lead className="mx-auto">
          {syllabus
            ? downloadUrl
              ? "Your German course syllabus is downloading. A trainer will also call you shortly to help you choose the right level."
              : "We have your request and will share the German course syllabus with you on WhatsApp. A trainer will also call you shortly."
            : "We have received your enquiry. A trainer will call you on your WhatsApp number shortly to help you choose the right German level and batch."}
        </Lead>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <ThankYouActions
            formType={syllabus ? "syllabus" : "enquiry"}
            downloadUrl={downloadUrl}
          />
          <Link
            href={GERMAN_COURSE_URL}
            className={cn(
              buttonVariants({ variant: "gold", size: "pill" }),
              "max-md:w-full",
            )}
          >
            Explore German courses
          </Link>
          <Link
            href="/blogs"
            className={cn(
              buttonVariants({ variant: "outline-ink", size: "pill" }),
              "max-md:w-full",
            )}
          >
            Read our guides
          </Link>
        </div>
        <p className="mt-6 text-mute">
          Need to talk now? Call{" "}
          <a
            className="font-semibold text-indigo"
            href={`tel:${PHONE_PRIMARY.tel}`}
          >
            {PHONE_PRIMARY.label}
          </a>{" "}
          or{" "}
          <a
            className="font-semibold text-indigo"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
          >
            chat on WhatsApp
          </a>
          .
        </p>
      </Band>

      <Band>
        <SectionHead
          eyebrow="What happens next"
          title="From enquiry to your first class"
        />
        <CardGrid as="ol" min="260px">
          {NEXT_STEPS.map((s, i) => (
            <li key={s.title}>
              <Card className="h-full gap-0 rounded-[20px] p-5 text-base ring-line md:p-7">
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
    </main>
  );
}
