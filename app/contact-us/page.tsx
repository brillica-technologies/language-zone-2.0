import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Language Zone | German Classes in Dehradun",
  description:
    "Contact Language Zone in Dehradun for German classes from A1 to C2. Call, WhatsApp or send an enquiry to find your level and batch.",
};

export default function Page() {
  return <ContactContent />;
}
