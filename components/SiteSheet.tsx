"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useDialog } from "@/lib/dialogs";

/** shadcn Sheet opened by name (see `openDialog`), styled by the site's own CSS classes. */
export default function SiteSheet({
  name,
  side = "right",
  className,
  modal = true,
  overlay = false,
  onOpenChange,
  children,
}: {
  name: string;
  side?: "top" | "right" | "bottom" | "left";
  className: string;
  /** false = the page stays interactive behind the sheet and outside clicks don't close it. */
  modal?: boolean;
  overlay?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useDialog(name);

  return (
    <Sheet
      open={open}
      modal={modal}
      disablePointerDismissal={!modal}
      onOpenChange={(next) => {
        setOpen(next);
        onOpenChange?.(next);
      }}
    >
      <SheetContent
        unstyled
        side={side}
        overlay={overlay}
        className={className}
        showCloseButton={false}
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
