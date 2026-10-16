"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  EMAIL,
  GERMAN_COURSE_URL,
  GERMAN_LEVELS,
  PAY_URL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  levelUrl,
} from "@/lib/site";

const NAV = [
  { href: "/#about", label: "About us", match: () => false },
  {
    href: "/blogs",
    label: "Blog",
    match: (p: string) => p.startsWith("/blogs"),
  },
  {
    href: "/contact-us",
    label: "Contact us",
    match: (p: string) => p.startsWith("/contact-us"),
  },
];

// desktop nav link: gold underline on the current page
const navLink =
  "border-b-[3px] border-transparent py-2 font-medium text-navy aria-[current=page]:border-gold aria-[current=page]:text-indigo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = (active: boolean) =>
    active ? { "aria-current": "page" as const } : {};
  const coursesActive = pathname.startsWith(GERMAN_COURSE_URL);

  return (
    <>
      <div className="tri-stripe" />
      <div className="hidden bg-ink text-sm text-white lg:block">
        <div className="page-wrap flex justify-between gap-4 py-2">
          <span>Race Course, Dehradun, Uttarakhand 248001</span>
          <span className="flex gap-6">
            <a href={`tel:${PHONE_PRIMARY.tel}`}>{PHONE_PRIMARY.label}</a>
            <a href={`tel:${PHONE_SECONDARY.tel}`}>{PHONE_SECONDARY.label}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a
              className="font-medium text-gold"
              href={PAY_URL}
              target="_blank"
              rel="noopener"
            >
              Pay online
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <div className="page-wrap flex items-center justify-between gap-6 py-2.5 lg:py-3.5">
          <Link href="/" aria-label="Language Zone, home" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Language Zone"
              className="h-[38px] w-auto lg:h-[46px]"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            <Link href="/" className={navLink} {...current(pathname === "/")}>
              Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-auto rounded-none bg-transparent px-0 text-base hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent",
                      navLink,
                      coursesActive && "border-gold text-indigo",
                    )}
                  >
                    German course
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-72 p-2">
                    <NavigationMenuLink
                      render={<Link href={GERMAN_COURSE_URL} />}
                      className="font-semibold text-navy"
                    >
                      All levels, A1 to C2
                    </NavigationMenuLink>
                    {GERMAN_LEVELS.map((l) => (
                      <NavigationMenuLink
                        key={l.slug}
                        render={<Link href={levelUrl(l.slug)} />}
                        className="text-base text-navy"
                      >
                        <b className="min-w-8 text-brand-red">{l.code}</b>
                        {l.name}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={navLink}
                {...current(n.match(pathname))}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact-us"
            className={cn(
              buttonVariants({ variant: "gold", size: "pill" }),
              "hidden lg:inline-flex",
            )}
          >
            Check your level
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="flex size-12 items-center justify-center rounded-xl bg-paper text-navy lg:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] gap-0 p-0">
              <SheetTitle className="border-b border-line px-5 py-5 font-disp text-xl text-navy">
                Menu
              </SheetTitle>
              <nav
                aria-label="Main"
                className="flex flex-col overflow-y-auto px-5 pb-6"
                // close the drawer after any link inside it is followed
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest("a")) setOpen(false);
                }}
              >
                <DrawerLink href="/" active={pathname === "/"}>
                  Home
                </DrawerLink>
                <DrawerLink href={GERMAN_COURSE_URL} active={coursesActive}>
                  German course
                </DrawerLink>
                <div className="grid grid-cols-2 gap-2 py-3">
                  {GERMAN_LEVELS.map((l) => (
                    <Link
                      key={l.slug}
                      href={levelUrl(l.slug)}
                      className="flex min-h-12 items-center gap-2.5 rounded-xl bg-paper px-3 text-sm text-navy aria-[current=page]:ring-2 aria-[current=page]:ring-indigo"
                      {...current(pathname === levelUrl(l.slug))}
                    >
                      <b className="font-disp text-lg text-brand-red">
                        {l.code}
                      </b>
                      <span>{l.name}</span>
                    </Link>
                  ))}
                </div>
                {NAV.map((n) => (
                  <DrawerLink
                    key={n.href}
                    href={n.href}
                    active={n.match(pathname)}
                  >
                    {n.label}
                  </DrawerLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

function DrawerLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="flex min-h-12 items-center border-b border-line font-medium text-navy aria-[current=page]:font-semibold aria-[current=page]:text-indigo"
    >
      {children}
    </Link>
  );
}
