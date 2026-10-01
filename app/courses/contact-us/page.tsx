import type { Metadata } from "next";
import "@/styles/contact-us.css";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us || Language Zone",
};

export default function Page() {
  return <ContactContent />;
}
