"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { openEnquiry } from "@/lib/enquiryDialog";
import { PHONE_PRIMARY, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const item = "h-12 flex-1 rounded-xl text-base";

/** Mobile-only quick contact bar, fixed to the bottom of the screen. */
export default function QuickBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom,0px))] md:hidden"
    >
      <a
        href={`tel:${PHONE_PRIMARY.tel}`}
        className={cn(buttonVariants({ variant: "ink" }), item)}
      >
        Call
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        className={cn(buttonVariants({ variant: "whatsapp" }), item)}
      >
        WhatsApp
      </a>
      <Button
        variant="gold"
        className={item}
        onClick={() => openEnquiry("query")}
      >
        Enquire
      </Button>
    </nav>
  );
}
