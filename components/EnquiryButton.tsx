"use client";

import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { openEnquiry, type EnquiryVariant } from "@/lib/enquiryDialog";

/** A button that opens the shared enquiry dialog (usable from server components). */
export default function EnquiryButton({
  dialog = "query",
  course,
  variant = "gold",
  size = "pill",
  className,
  children,
}: {
  dialog?: EnquiryVariant;
  /** preselects this course in the form, e.g. "German B1: Intermediate" */
  course?: string;
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof buttonVariants>) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      aria-haspopup="dialog"
      onClick={() => openEnquiry(dialog, course)}
    >
      {children}
    </Button>
  );
}
