/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import QuickBar from "@/components/QuickBar";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";
import {
  ADDRESS,
  EMAIL,
  GERMAN_COURSE_URL,
  GERMAN_LEVELS,
  MAP_LINK,
  PAY_URL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  levelUrl,
} from "@/lib/site";

const SOCIAL = [
  {
    href: "https://www.facebook.com/LanguagezoneTraining",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/languagezone0309/",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/company/72137283/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
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
                className="h-[56px] w-auto"
                src="/images/logo-white.png"
                alt="Language Zone"
              />
            </Link>
            <p className="mt-3.5 max-w-90 text-[15px] text-on-ink">
              German language courses in Dehradun, A1 to C2.
            </p>
            <address className="mt-3.5 max-w-90 text-[15px] text-on-ink not-italic">
              {ADDRESS}
            </address>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener"
              className="mt-2.5 inline-block font-semibold text-gold hover:text-white"
            >
              Get Directions →
            </a>
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
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
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
            <li className="flex gap-3 pt-2">
              {SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Language Zone on ${label}`}
                  title={label}
                  className="flex size-10 items-center justify-center rounded-full bg-ink-soft text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </li>
          </Column>
        </div>
        <div className="page-wrap border-t border-[#34346a] pt-4.5 pb-6.5 text-sm text-on-ink">
          <p>
            © {new Date().getFullYear()} Language Zone, a Brillica Services
            company. All rights reserved.
          </p>
        </div>
      </footer>

      <QuickBar />
    </>
  );
}
