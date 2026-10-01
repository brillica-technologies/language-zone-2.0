"use client";

import { useCallback, useSyncExternalStore } from "react";

// Tiny shared open/close store so any button (page content, header, ...) can open a dialog by name.
const open = new Set<string>();
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
};

export function openDialog(name: string) {
  open.add(name);
  emit();
}

export function closeDialog(name: string) {
  open.delete(name);
  emit();
}

export function useDialog(name: string) {
  const isOpen = useSyncExternalStore(
    subscribe,
    () => open.has(name),
    () => false,
  );
  const setOpen = useCallback(
    (next: boolean) => (next ? openDialog(name) : closeDialog(name)),
    [name],
  );
  return [isOpen, setOpen] as const;
}
