import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Band, SectionHead } from "@/components/course/Section";
import type { Faq } from "@/lib/courses";

/** FAQ band (shadcn Accordion) with FAQPage structured data. */
export default function FaqSection({
  title,
  items,
  tinted = true,
}: {
  title: string;
  items: Faq[];
  /** alternate the band background with its neighbours */
  tinted?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Band tone={tinted ? "paper" : "white"} narrow>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionHead eyebrow="FAQ" title={title} />
      <Accordion className="border-t border-line">
        {items.map((f) => (
          <AccordionItem
            key={f.q}
            value={f.q}
            className="border-b border-line not-last:border-b"
          >
            <AccordionTrigger className="items-center py-5 text-[17px] font-medium text-navy hover:no-underline md:text-[19px] **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-indigo">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base text-mute">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Band>
  );
}
