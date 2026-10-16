/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import QuickBar from "@/components/QuickBar";
import {
  ADDRESS,
  EMAIL,
  GERMAN_COURSE_URL,
  GERMAN_LEVELS,
  PAY_URL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  levelUrl,
} from "@/lib/site";

const SOCIAL = [
  { href: "https://www.facebook.com/LanguagezoneTraining", label: "Facebook" },
  { href: "https://www.instagram.com/languagezone0309/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/72137283/", label: "LinkedIn" },
];

function Column({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 flex-[1_1_180px]">
      <h3 className="mb-3 text-base font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-[15px] text-on-ink [&_a:hover]:text-white">
        {children}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-ink pb-[calc(68px+env(safe-area-inset-bottom,0px))] text-white md:pb-0">
        <div className="tri-stripe" />
        <div className="page-wrap flex flex-wrap gap-7 pt-14 pb-7 md:gap-14">
          <div className="min-w-0 flex-[2_1_280px]">
            <Link href="/" aria-label="Language Zone, home">
              <img
                className="h-[46px] w-auto"
                src="/images/language zone white logo .png"
                alt="Language Zone"
              />
            </Link>
            <p className="mt-3.5 max-w-90 text-[15px] text-on-ink">
              German language courses in Dehradun, A1 to C2.
            </p>
            <address className="mt-3.5 max-w-90 text-[15px] text-on-ink not-italic">
              {ADDRESS}
            </address>
          </div>
          <Column title="German levels">
            <li>
              <Link href={GERMAN_COURSE_URL}>All levels, A1 to C2</Link>
            </li>
            {GERMAN_LEVELS.map((l) => (
              <li key={l.slug}>
                <Link href={levelUrl(l.slug)}>
                  <b className="text-white">{l.code}</b> {l.name}
                </Link>
              </li>
            ))}
          </Column>
          <Column title="Company">
            <li>
              <Link href="/#about">About us</Link>
            </li>
            <li>
              <Link href="/courses/blog">Blog</Link>
            </li>
            <li>
              <Link href="/courses/contact-us">Contact us</Link>
            </li>
            <li>
              <a href="/static/privacy-policy">Privacy policy</a>
            </li>
            <li>
              <a href="/static/terms-and-conditions">Terms and conditions</a>
            </li>
            <li>
              <a href={PAY_URL} target="_blank" rel="noopener">
                Pay online
              </a>
            </li>
          </Column>
          <Column title="Contact">
            <li>
              <a href={`tel:${PHONE_PRIMARY.tel}`}>{PHONE_PRIMARY.label}</a>
            </li>
            <li>
              <a href={`tel:${PHONE_SECONDARY.tel}`}>{PHONE_SECONDARY.label}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li className="flex flex-wrap gap-4 pt-1.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="text-gold"
                >
                  {s.label}
                </a>
              ))}
            </li>
          </Column>
        </div>
        <div className="page-wrap border-t border-[#34346a] pt-4.5 pb-6.5 text-sm text-on-ink">
          <p>
            © 2017–{new Date().getFullYear()} Language Zone, a Brillica Services
            company. All rights reserved.
          </p>
        </div>
      </footer>

      <QuickBar />
    </>
  );
}
