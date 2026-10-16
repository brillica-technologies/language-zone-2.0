import Link from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

/** A full-width page band. `tone` sets the background; content sits in the page wrap. */
export function Band({
  tone = "white",
  narrow,
  className,
  id,
  children,
}: {
  tone?: "white" | "paper" | "ink" | "tint";
  narrow?: boolean;
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-11 md:py-22",
        tone === "paper" && "bg-paper",
        tone === "tint" && "bg-tint",
        tone === "ink" && "bg-ink text-white",
      )}
    >
      <div className={cn("page-wrap", narrow && "max-w-[860px]", className)}>
        {children}
      </div>
    </section>
  );
}

/** Eyebrow + heading (+ optional lead) at the top of a section. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  dark,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 max-w-190", className)}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className="mt-2 font-disp text-[28px] leading-[1.14] md:text-[40px]">
        {title}
      </h2>
      {lead && <Lead className={dark ? "text-on-ink" : ""}>{lead}</Lead>}
    </div>
  );
}

export function Eyebrow({
  dark,
  className,
  children,
}: {
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-[13px] font-semibold tracking-widest uppercase",
        dark ? "text-gold" : "text-brand-red",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Lead({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "mt-4 max-w-170 text-[17px] text-mute md:text-[19px]",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Responsive card grid: one column on phones, wrapping columns of at least `min` above. */
export function CardGrid({
  min = "300px",
  className,
  children,
  as: Tag = "div",
}: {
  min?: string;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "ul" | "ol";
}) {
  return (
    <Tag
      className={cn(
        "grid gap-3.5 md:gap-6 md:grid-cols-[repeat(auto-fill,minmax(var(--min),1fr))]",
        className,
      )}
      style={{ "--min": min } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Gold-and-red square bullets. */
export function Ticks({
  items,
  big,
  className,
}: {
  items: string[];
  big?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn(big ? "space-y-3" : "mt-2 space-y-2", className)}>
      {items.map((t) => (
        <li
          key={t}
          className={cn("flex gap-3.5 text-mute", big && "text-[17px]")}
        >
          <span className="mt-[0.45em] size-3 shrink-0 rounded-[3px] bg-gold shadow-[inset_0_-3px_0_var(--color-brand-red)]" />
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Coloured level badge (A1 … C2). */
export function LevelBadge({
  code,
  bg,
  fg,
  size = "md",
}: {
  code: string;
  bg: string;
  fg: string;
  size?: "md" | "xl";
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center font-disp font-semibold",
        size === "md"
          ? "size-13 rounded-2xl text-[21px] md:size-15 md:text-2xl"
          : "size-17 rounded-[22px] text-[30px] md:size-21 md:text-4xl",
      )}
      style={{ background: bg, color: fg }}
    >
      {code}
    </span>
  );
}

export type Crumb = { label: string; href?: string };

/** Tinted page header with a breadcrumb trail; the last crumb is the current page. */
export function PageHero({
  crumbs,
  className,
  children,
}: {
  crumbs: Crumb[];
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-tint py-8 md:py-16">
      <div className="page-wrap">
        <Breadcrumb className="mb-5.5">
          <BreadcrumbList className="text-sm text-mute">
            {crumbs.map((c, i) => (
              <Fragment key={c.label}>
                {i > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {c.href ? (
                    <BreadcrumbLink
                      render={<Link href={c.href} />}
                      className="text-indigo"
                    >
                      {c.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="text-mute">
                      {c.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div className={className}>{children}</div>
      </div>
    </section>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-disp text-4xl leading-[1.06] md:text-[58px]">
      {children}
    </h1>
  );
}
