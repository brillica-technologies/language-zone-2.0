import EnquiryButton from "@/components/EnquiryButton";
import { Band } from "@/components/course/Section";

/** Dark closing band with a button that opens the enquiry dialog. */
export default function CallbackBand({
  title = "Not sure which German level to join?",
  text = "Leave your details and a trainer will call you back with a level check and batch dates.",
  course,
}: {
  title?: string;
  text?: string;
  /** preselects this course in the enquiry form */
  course?: string;
}) {
  return (
    <Band
      tone="ink"
      className="flex flex-wrap items-center justify-between gap-7 md:gap-14"
    >
      <div className="min-w-0 flex-[1_1_480px]">
        <h2 className="font-disp text-[28px] leading-[1.14] md:text-[40px]">
          {title}
        </h2>
        <p className="mt-2.5 text-lg text-on-ink-soft">{text}</p>
      </div>
      <EnquiryButton size="pill-lg" course={course} className="max-md:w-full">
        Request a call back
      </EnquiryButton>
    </Band>
  );
}
