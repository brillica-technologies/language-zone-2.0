"use client";

import { useSyncExternalStore } from "react";
import { openDialog } from "@/lib/dialogs";

// Every enquiry entry point (Contact us tab, call-back buttons, Enroll Now, Download Curriculum)
// opens the one dialog in Popup.tsx; the variant only changes the copy around the form.
export type EnquiryVariant = "query" | "enroll" | "curriculum";

type State = { variant: EnquiryVariant; course?: string };

let state: State = { variant: "query" };
const SERVER_STATE: State = { variant: "query" };
const listeners = new Set<() => void>();

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
};

/** Opens the shared enquiry dialog, optionally with a course preselected. */
export function openEnquiry(
  variant: EnquiryVariant = "query",
  course?: string,
) {
  state = { variant, course };
  listeners.forEach((l) => l());
  openDialog("enquiry");
}

export function useEnquiryState() {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => SERVER_STATE,
  );
}
