"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import { MessageSquareIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useDialog } from "@/lib/dialogs";
import {
  openEnquiry,
  useEnquiryState,
  type EnquiryVariant,
} from "@/lib/enquiryDialog";
import {
  GERMAN_LEVELS,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  levelLabel,
} from "@/lib/site";

const VARIANTS: Record<
  EnquiryVariant,
  {
    eyebrow: string;
    title: string;
    text: string;
    formTitle: string;
    submit: string;
    context?: string;
  }
> = {
  query: {
    eyebrow: "Contact us",
    title: "Talk to a trainer",
    text: "Tell us your goal and we will suggest the right level and batch.",
    formTitle: "Request a call back",
    submit: "Request a call back",
  },
  enroll: {
    eyebrow: "Enrol now",
    title: "Reserve your seat",
    text: "Share your details and our counsellor will confirm the next batch and fees.",
    formTitle: "Apply to enrol",
    submit: "Apply now",
    context: "Enrol request",
  },
  curriculum: {
    eyebrow: "Course syllabus",
    title: "Download the German syllabus",
    text: "Verify your WhatsApp number and the syllabus PDF downloads straight away.",
    formTitle: "Download the syllabus",
    submit: "Download syllabus",
    context: "Syllabus download",
  },
};

const DIALOG_POINTS = [
  "Goethe-Zertifikat preparation, A1 to C2",
  "Online and offline batches",
  "Certified trainers in Dehradun",
];

// preselect the level on a level page, e.g. /german/b1
function courseFor(pathname: string) {
  const slug = pathname.match(/^\/german\/([a-c][12])\b/)?.[1];
  const level = GERMAN_LEVELS.find((l) => l.slug === slug);
  return level ? levelLabel(level) : "";
}

export default function Popup() {
  const pathname = usePathname();
  const [open, setOpen] = useDialog("enquiry");
  const { variant: current, course } = useEnquiryState();
  const formRef = useRef<HTMLDivElement>(null);
  const v = VARIANTS[current];

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => openEnquiry("query")}
          aria-haspopup="dialog"
          className="group fixed top-1/2 right-0 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-l-2xl bg-ink px-2.5 pt-4.5 pb-3.5 text-white shadow-[-6px_8px_24px_rgba(20,20,58,0.22)] transition-all hover:bg-indigo hover:pr-3.5 md:flex"
        >
          {/* red / gold edge, echoing the flag stripe */}
          <span className="absolute inset-y-3.5 left-0 w-[3px] rounded-r bg-[linear-gradient(var(--color-brand-red)_0_50%,var(--color-gold)_50%_100%)]" />
          <span className="text-[13px] font-semibold tracking-[0.14em] uppercase [writing-mode:vertical-rl]">
            Contact us
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-gold text-ink">
            <MessageSquareIcon className="size-4" aria-hidden="true" />
          </span>
        </button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          // start on the first form field, not the phone links in the side panel
          initialFocus={() =>
            formRef.current?.querySelector<HTMLElement>("input") ?? true
          }
          className="flex max-h-[calc(100dvh-2rem)] gap-0 overflow-hidden rounded-3xl p-0 ring-0 shadow-[0_30px_80px_rgba(20,20,58,0.35)] sm:max-w-[880px] max-md:top-auto max-md:bottom-0 max-md:max-h-[92dvh] max-md:max-w-full max-md:translate-y-0 max-md:rounded-b-none"
        >
          <aside className="hidden basis-[42%] flex-col bg-ink px-8 py-9 text-white md:flex">
            <div className="tri-stripe" />
            <p className="mt-5.5 text-[13px] font-semibold tracking-widest text-gold uppercase">
              {v.eyebrow}
            </p>
            <h2 className="mt-2.5 font-disp text-3xl leading-tight">
              {v.title}
            </h2>
            <p className="mt-3 text-on-ink">{v.text}</p>
            <ul className="mt-5.5 space-y-2.5">
              {DIALOG_POINTS.map((t) => (
                <li key={t} className="flex gap-3 text-on-ink-soft">
                  <span className="mt-2 size-[11px] shrink-0 rounded-[3px] bg-gold shadow-[inset_0_-3px_0_var(--color-brand-red)]" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-5.5 text-sm text-on-ink">
              Prefer to talk now?
              {[PHONE_PRIMARY, PHONE_SECONDARY].map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="mt-0.5 block text-lg font-semibold text-gold"
                >
                  {p.label}
                </a>
              ))}
            </p>
          </aside>
          <div
            ref={formRef}
            className="min-w-0 flex-1 overflow-y-auto px-5 pt-6.5 pb-[calc(24px+env(safe-area-inset-bottom,0px))] md:p-8"
          >
            <DialogTitle className="sr-only">{v.formTitle}</DialogTitle>
            <EnquiryForm
              key={`${current}-${course ?? ""}`}
              title={v.formTitle}
              subtitle="We usually call back within a few working hours."
              defaultCourse={course ?? courseFor(pathname)}
              showMessage={current === "query"}
              context={v.context}
              submitLabel={v.submit}
              downloadSyllabus={current === "curriculum"}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
