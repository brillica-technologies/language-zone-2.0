"use client";

import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CardGrid } from "@/components/course/Section";
import { cn } from "@/lib/utils";

type Category = { name: string; slug: string; count: number };
type Item = { key: string; category: string; card: React.ReactNode };
type Props = { categories: Category[]; items: Item[] };

/**
 * Topic tabs above the post cards. The cards are rendered on the server and passed
 * in, so this only hides and shows them. The chosen topic is kept in ?category=
 * so a filtered list can be shared. Until the URL is read, every post shows.
 */
export default function BlogFilter(props: Props) {
  return (
    <Suspense fallback={<FilterView {...props} active="" />}>
      <FromUrl {...props} />
    </Suspense>
  );
}

function FromUrl(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const asked = useSearchParams().get("category") ?? "";
  const active = props.categories.some((c) => c.slug === asked) ? asked : "";

  const choose = (slug: string) =>
    router.replace(slug ? `${pathname}?category=${slug}` : pathname, {
      scroll: false,
    });

  return <FilterView {...props} active={active} onChoose={choose} />;
}

function FilterView({
  categories,
  items,
  active,
  onChoose,
}: Props & { active: string; onChoose?: (slug: string) => void }) {
  const tabs = [{ name: "All topics", slug: "", count: items.length }, ...categories];
  const shown = active ? items.filter((i) => i.category === active) : items;

  return (
    <>
      {categories.length > 1 && (
        <div
          role="group"
          aria-label="Filter guides by topic"
          // swipeable row on phones (scrollbar hidden), wrapping rows from md up
          className="-mx-4 mb-6 flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 md:mx-0 md:mb-8 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((tab) => {
            const on = tab.slug === active;
            return (
              <button
                key={tab.slug || "all"}
                type="button"
                aria-pressed={on}
                onClick={() => onChoose?.(tab.slug)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[15px] font-semibold whitespace-nowrap transition-colors",
                  on
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white text-navy hover:border-indigo hover:text-indigo",
                )}
              >
                {tab.name}
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs",
                    on ? "bg-white/15 text-white" : "bg-tint text-mute",
                  )}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <CardGrid min="320px">
        {shown.map((i) => (
          <div key={i.key} className="contents">
            {i.card}
          </div>
        ))}
      </CardGrid>
    </>
  );
}
