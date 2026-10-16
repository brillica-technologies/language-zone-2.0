"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  EMAIL,
  GERMAN_COURSE_URL,
  GERMAN_LEVELS,
  OTHER_COURSES,
  PAY_URL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
} from "@/lib/site";

const NAV = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  { href: "/#about", label: "About us", match: () => false },
  {
    href: "/courses/blog",
    label: "Blog",
    match: (p: string) => p.startsWith("/courses/blog"),
  },
  {
    href: "/courses/contact-us",
    label: "Contact us",
    match: (p: string) => p.startsWith("/courses/contact-us"),
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = (active: boolean) =>
    active ? { "aria-current": "page" as const } : {};
  const coursesActive =
    pathname.startsWith("/courses/") &&
    !NAV.some((n) => n.href !== "/" && n.match(pathname));

  return (
    <>
      <div className="lz-tri" />
      <div className="lz-topbar">
        <div className="lz-wrap lz-tb-in">
          <span>Race Course, Dehradun, Uttarakhand 248001</span>
          <span className="lz-tb-r">
            <a href={`tel:${PHONE_PRIMARY.tel}`}>{PHONE_PRIMARY.label}</a>
            <a href={`tel:${PHONE_SECONDARY.tel}`}>{PHONE_SECONDARY.label}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a
              className="lz-gold"
              href={PAY_URL}
              target="_blank"
              rel="noopener"
            >
              Pay online
            </a>
          </span>
        </div>
      </div>
      <header className="lz-hdr">
        <div className="lz-wrap lz-hdr-in">
          <Link className="lz-brand" href="/" aria-label="Language Zone, home">
            <img src="/images/logo.png" alt="Language Zone" />
          </Link>

          <nav className="lz-nav" aria-label="Main">
            <Link href="/" {...current(pathname === "/")}>
              Home
            </Link>
            <div className="lz-dd">
              <Link href={GERMAN_COURSE_URL} {...current(coursesActive)}>
                German course <span aria-hidden="true">▾</span>
              </Link>
              <div className="lz-dd-menu">
                {GERMAN_LEVELS.map((l) => (
                  <Link key={l.code} href={GERMAN_COURSE_URL}>
                    <b>{l.code}</b> {l.name}
                  </Link>
                ))}
                <p className="lz-dd-label">Other courses</p>
                {OTHER_COURSES.map((c) => (
                  <Link key={c.href} href={c.href}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
            {NAV.slice(1).map((n) => (
              <Link key={n.href} href={n.href} {...current(n.match(pathname))}>
                {n.label}
              </Link>
            ))}
          </nav>

          <Link
            className="lz-btn lz-btn-gold lz-hdr-cta"
            href="/courses/contact-us"
          >
            Check your level
          </Link>

          <button
            className="lz-menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="lz-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <nav
          className="lz-drawer"
          id="lz-drawer"
          aria-label="Main"
          hidden={!open}
          // close the drawer after any link inside it is followed
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <div className="lz-wrap">
            <Link href="/" {...current(pathname === "/")}>
              Home
            </Link>
            <Link href={GERMAN_COURSE_URL} {...current(coursesActive)}>
              German course
            </Link>
            <div className="lz-dl">
              {GERMAN_LEVELS.map((l) => (
                <Link key={l.code} href={GERMAN_COURSE_URL}>
                  <b>{l.code}</b>
                  <span>{l.name}</span>
                </Link>
              ))}
              {OTHER_COURSES.map((c) => (
                <Link key={c.href} href={c.href}>
                  <span>{c.label}</span>
                </Link>
              ))}
            </div>
            {NAV.slice(1).map((n) => (
              <Link key={n.href} href={n.href} {...current(n.match(pathname))}>
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
