"use client";

/* eslint-disable @next/next/no-img-element */
import SiteDialog from "@/components/SiteDialog";
import { closeDialog } from "@/lib/dialogs";

export default function CertificateDialog() {
  return (
    <SiteDialog
      name="certificate"
      className="popup-certificate-dialog"
      overlayClassName="popup-certificate-backdrop"
      onClick={() => closeDialog("certificate")}
    >
      <div className="popup-certificate-div">
        <img src="/images/certificate.jpg" alt="certificate" />
      </div>
    </SiteDialog>
  );
}
