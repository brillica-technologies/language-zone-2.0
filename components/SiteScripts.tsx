"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  initFooterTabs,
  scheduleOfferPopup,
  show_classes_section_for_phone,
} from "@/lib/legacy";

/** Runs the one-time DOM wiring that the original footer.js / tabnav.js did on page load. */
export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanupTabs = initFooterTabs();
    const cleanupPopup = scheduleOfferPopup();
    return () => {
      cleanupTabs();
      cleanupPopup();
    };
  }, []);

  useEffect(() => {
    show_classes_section_for_phone();
  }, [pathname]);

  return null;
}
