"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useDialog } from "@/lib/dialogs";

/** shadcn Dialog opened by name (see `openDialog`), styled by the site's own CSS classes. */
export default function SiteDialog({
  name,
  className = "site-dialog-popup",
  overlayClassName = "site-dialog-backdrop",
  onClick,
  children,
}: {
  name: string;
  className?: string;
  overlayClassName?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useDialog(name);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        unstyled
        showCloseButton={false}
        className={className}
        overlayClassName={overlayClassName}
        onClick={onClick}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
