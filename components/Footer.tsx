/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ADDRESS,
  EMAIL,
  GERMAN_COURSE_URL,
  GERMAN_LEVELS,
  OTHER_COURSES,
  PAY_URL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  WHATSAPP_URL,
} from "@/lib/site";

export default function Footer() {
  return (
    <>
      <footer className="lz-foot">
        <div className="lz-tri" />
        <div className="lz-wrap lz-foot-in">
          <div className="lz-fcol lz-f-brand">
            <Link href="/" aria-label="Language Zone, home">
              <img
                className="lz-f-logo"
                src="/images/language zone white logo .png"
                alt="Language Zone"
              />
            </Link>
            <p>German language courses in Dehradun, A1 to C2.</p>
            <address>{ADDRESS}</address>
          </div>
          <div className="lz-fcol">
            <h3>German levels</h3>
            <ul>
              {GERMAN_LEVELS.map((l) => (
                <li key={l.code}>
                  <Link href={GERMAN_COURSE_URL}>
                    <b>{l.code}</b> {l.name}
                  </Link>
                </li>
              ))}
              {OTHER_COURSES.map((c) => (
                <li key={c.href}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lz-fcol">
            <h3>Company</h3>
            <ul>
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
            </ul>
          </div>
          <div className="lz-fcol">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`tel:${PHONE_PRIMARY.tel}`}>{PHONE_PRIMARY.label}</a>
              </li>
              <li>
                <a href={`tel:${PHONE_SECONDARY.tel}`}>
                  {PHONE_SECONDARY.label}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li className="lz-soc">
                <a
                  href="https://www.facebook.com/LanguagezoneTraining"
                  target="_blank"
                  rel="noopener"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/languagezone0309/"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/72137283/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lz-wrap lz-legal">
          <p>
            © 2017–{new Date().getFullYear()} Language Zone, a Brillica Services
            company. All rights reserved.
          </p>
        </div>
      </footer>

      {/* mobile-only quick contact bar (replaces the old bottom tab nav) */}
      <nav className="lz-bar" aria-label="Quick contact">
        <a className="lz-b-call" href={`tel:${PHONE_PRIMARY.tel}`}>
          Call
        </a>
        <a
          className="lz-b-wa"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </a>
        <Link className="lz-b-enq" href="/courses/contact-us">
          Enquire
        </Link>
      </nav>
    </>
  );
}
