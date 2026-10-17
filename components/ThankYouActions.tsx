"use client";

import { useEffect, useRef } from "react";
import { DownloadIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dataLayer?: object[];
  }
}

/**
 * Runs once on /thank-you: pushes the conversion event for Google Tag Manager and,
 * for syllabus requests, starts the PDF download from the signed link.
 */
export default function ThankYouActions({
  formType,
  downloadUrl,
}: {
  formType: "enquiry" | "syllabus";
  downloadUrl?: string;
}) {
  // fire exactly once per page load (effects can run twice in development)
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "lz_lead", form_type: formType });

    if (downloadUrl) {
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }, [formType, downloadUrl]);

  if (!downloadUrl) return null;
  return (
    <a
      href={downloadUrl}
      download
      className={cn(
        buttonVariants({ variant: "ink", size: "pill" }),
        "max-md:w-full",
      )}
    >
      <DownloadIcon className="size-4" aria-hidden="true" />
      Download again
    </a>
  );
}
