import type { Metadata } from "next";
import Link from "next/link";
import { Band, Lead, PageTitle } from "@/components/course/Section";
import { buttonVariants } from "@/components/ui/button";
import { GERMAN_COURSE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Language Zone" },
  // overrides the layout's "index, follow"; Next also adds its own noindex tag
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <Band tone="tint" className="py-6 text-center md:py-10">
        <p className="font-disp text-6xl text-brand-red">404</p>
        <div className="mt-4">
          <PageTitle>This page could not be found</PageTitle>
        </div>
        <Lead className="mx-auto">
          The link may be old or mistyped. Find your German course or get in
          touch with us.
        </Lead>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href={GERMAN_COURSE_URL}
            className={cn(buttonVariants({ variant: "gold", size: "pill" }))}
          >
            View German courses
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline-ink", size: "pill" }),
            )}
          >
            Go to home page
          </Link>
        </div>
      </Band>
    </main>
  );
}
