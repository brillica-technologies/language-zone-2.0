import type { CSSProperties } from "react";
import Link from "next/link";
import CallbackForm from "@/components/CallbackForm";
import type { BlogItem } from "@/lib/blog";
import { GERMAN_COURSE_URL, GERMAN_LEVELS, PHONE_PRIMARY } from "@/lib/site";

const WHY = [
  {
    title: "Certified German trainers",
    text: "Trainers who prepare learners for the Goethe-Zertifikat and stay with them through every level.",
  },
  {
    title: "Online and offline batches",
    text: "Attend at our Race Course centre in Dehradun or join online. Morning, evening and personalised sessions are available.",
  },
  {
    title: "Communicative approach",
    text: "You speak German from the first class, with real conversations and practical exercises.",
  },
  {
    title: "Affordable pricing",
    text: "Expert teaching and engaging material within a student's budget.",
  },
];

const STEPS = [
  {
    title: "Level check",
    text: "A short chat with a trainer decides whether you start at A1 or join a higher level.",
  },
  {
    title: "Live classes",
    text: "Small interactive sessions that train all four skills: reading, listening, writing and speaking.",
  },
  {
    title: "Mock tests",
    text: "Timed papers in the real Goethe exam format, with feedback on every part.",
  },
  {
    title: "Exam registration",
    text: "We guide you through booking the Goethe exam when you are ready.",
  },
];

const AUDIENCES = [
  {
    title: "Study in Germany",
    text: "Prepare for university or vocational training. Requirements differ by programme, so we help you plan the right level and timeline.",
  },
  {
    title: "Work with German",
    text: "Move into roles that use German, or work with German companies and teams, with the vocabulary of the workplace.",
  },
  {
    title: "Visa and family reunion",
    text: "Reach the level your application asks for, with exam practice that matches the Goethe format.",
  },
];

const FAQ = [
  {
    q: "Which German level should I start with?",
    a: "Complete beginners start at A1. If you already know some German, a short level check places you in A2 or higher.",
  },
  {
    q: "Do you prepare students for the Goethe-Zertifikat exams?",
    a: "Yes. Every level course follows the syllabus of its Goethe-Zertifikat, and we run mock tests in the real exam format.",
  },
  {
    q: "Are German classes online or offline?",
    a: "Both. You can attend at our Race Course centre in Dehradun or join online, in morning or evening batches, or book personalised sessions.",
  },
  {
    q: "How long does it take to reach B1 or B2?",
    a: "It depends on your starting point and the batch you join. A counsellor can give you a timeline for your goal.",
  },
  {
    q: "What are the fees and batch timings?",
    a: `Fees and timings depend on the level and batch. Call ${PHONE_PRIMARY.label} for the latest fees and batch dates.`,
  },
];

const FACTS = [
  { big: "A1–C2", small: "Every Goethe level" },
  { big: "2017", small: "Teaching in Dehradun since" },
  { big: "2 modes", small: "Online and offline batches" },
  { big: "4 skills", small: "Lesen, Hören, Schreiben, Sprechen" },
];

// ladder bar heights, desktop and mobile (from the design)
const LADDER_H = [84, 124, 164, 204, 244, 284];
const LADDER_H_SM = [66, 90, 114, 138, 162, 186];

export default function HomeContent({ posts }: { posts: BlogItem[] }) {
  return (
    <main className="lz-page">
      <section className="lz-hero">
        <div className="lz-wrap lz-hero-in">
          <div className="lz-hero-text">
            <p className="lz-eyebrow">German language institute · Dehradun</p>
            <h1 className="lz-disp">German Language Course in Dehradun</h1>
            <p className="lz-lead lz-mute">
              Learn German from A1 to C2 with certified trainers. Every level
              follows its Goethe-Zertifikat, so your classes end with a
              certificate that universities, employers and embassies recognise.
            </p>
            <div className="lz-btns">
              <Link className="lz-btn lz-btn-gold" href="/courses/contact-us">
                Check your level
              </Link>
              <Link className="lz-btn lz-btn-line" href={GERMAN_COURSE_URL}>
                View all levels
              </Link>
            </div>
            <ul className="lz-trust">
              <li>Goethe-Zertifikat preparation</li>
              <li>Online and offline batches</li>
              <li>Race Course, Dehradun</li>
            </ul>
          </div>
          <div className="lz-hero-vis">
            <p className="lz-vis-label">Guten Tag! Your path from A1 to C2</p>
            <ol className="lz-ladder" aria-label="German levels from A1 to C2">
              {GERMAN_LEVELS.map((l, i) => (
                <li
                  key={l.code}
                  style={
                    {
                      "--h": `${LADDER_H[i]}px`,
                      "--h-sm": `${LADDER_H_SM[i]}px`,
                    } as CSSProperties
                  }
                >
                  <Link
                    href={GERMAN_COURSE_URL}
                    style={{ background: l.bg, color: l.fg }}
                  >
                    <b>{l.code}</b>
                    <span>{l.name}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="lz-band">
        <div className="lz-wrap">
          <div className="lz-sec-head">
            <p className="lz-eyebrow">Courses</p>
            <h2 className="lz-disp">Choose your German level</h2>
            <p className="lz-lead lz-mute">
              Six courses, one for every stage of your German. Open a level to
              see the syllabus, the exam and who it suits.
            </p>
          </div>
          <div className="lz-cols lz-levels">
            {GERMAN_LEVELS.map((l) => (
              <Link
                key={l.code}
                className="lz-card lz-levelcard"
                href={GERMAN_COURSE_URL}
              >
                <span
                  className="lz-badge"
                  style={{ background: l.bg, color: l.fg }}
                >
                  {l.code}
                </span>
                <div>
                  <h3>
                    German {l.code}: {l.name}
                  </h3>
                  <p className="lz-mute">{l.summary}</p>
                  <p className="lz-exam-name">{l.exam}</p>
                  <span className="lz-more">View {l.code} course →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lz-band lz-dark">
        <div className="lz-wrap">
          <div className="lz-sec-head">
            <p className="lz-eyebrow">Why Language Zone</p>
            <h2 className="lz-disp">
              Quality German teaching, priced for students
            </h2>
          </div>
          <ul className="lz-cols lz-why">
            {WHY.map((w) => (
              <li key={w.title} className="lz-card-d">
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lz-band">
        <div className="lz-wrap">
          <div className="lz-sec-head">
            <p className="lz-eyebrow">How it works</p>
            <h2 className="lz-disp">
              From first class to certificate in four steps
            </h2>
          </div>
          <ol className="lz-cols lz-steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="lz-card">
                <span className="lz-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p className="lz-mute">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lz-band lz-tinted">
        <div className="lz-wrap">
          <div className="lz-sec-head">
            <p className="lz-eyebrow">Who learns German</p>
            <h2 className="lz-disp">German for study, work and family</h2>
          </div>
          <ul className="lz-cols">
            {AUDIENCES.map((a) => (
              <li key={a.title} className="lz-card">
                <h3>{a.title}</h3>
                <p className="lz-mute">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lz-band">
        <div className="lz-wrap">
          <div className="lz-sec-head">
            <p className="lz-eyebrow">Certifications</p>
            <h2 className="lz-disp">
              German levels and Goethe exams at a glance
            </h2>
          </div>
          <div className="lz-tablewrap">
            <table className="lz-exam">
              <caption className="lz-sr">
                German levels and their Goethe exams
              </caption>
              <thead>
                <tr>
                  <th scope="col">Level</th>
                  <th scope="col">Goethe exam</th>
                  <th scope="col">What it shows</th>
                </tr>
              </thead>
              <tbody>
                {GERMAN_LEVELS.map((l) => (
                  <tr key={l.code}>
                    <th scope="row">
                      <Link href={GERMAN_COURSE_URL}>
                        {l.code} {l.name}
                      </Link>
                    </th>
                    <td>{l.exam}</td>
                    <td>{l.shows}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="lz-band lz-tinted" id="about">
        <div className="lz-wrap lz-about-snip">
          <div>
            <div className="lz-sec-head">
              <p className="lz-eyebrow">About us</p>
              <h2 className="lz-disp">
                A German language institute built around your goal
              </h2>
            </div>
            <p className="lz-mute lz-body-p">
              Language Zone is a foreign language institute in Dehradun, run by
              Brillica Services. Our certified trainers prepare students, job
              seekers and working professionals for the Goethe-Zertifikat at
              every level, with a communicative approach that gets you speaking
              from the first class.
            </p>
            <div className="lz-btns">
              <Link className="lz-btn lz-btn-ink" href="/courses/contact-us">
                Visit or call us
              </Link>
            </div>
          </div>
          <ul className="lz-facts">
            {FACTS.map((f) => (
              <li key={f.small} className="lz-card">
                <b className="lz-disp">{f.big}</b>
                <span className="lz-mute">{f.small}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="lz-band">
          <div className="lz-wrap">
            <div className="lz-sec-head">
              <p className="lz-eyebrow">Guides</p>
              <h2 className="lz-disp">Learning guides from our trainers</h2>
            </div>
            <div className="lz-cols lz-posts">
              {posts.map((p) => (
                <Link
                  key={p.path}
                  className="lz-card lz-postcard"
                  href={`/courses/blog/${p.path}`}
                >
                  <p className="lz-cat">{p.createdAt}</p>
                  <h3 className="lz-disp">{p.blog_title}</h3>
                  <span className="lz-more">Read the guide →</span>
                </Link>
              ))}
            </div>
            <p className="lz-center">
              <Link className="lz-more" href="/courses/blog">
                All articles →
              </Link>
            </p>
          </div>
        </section>
      )}

      <section className="lz-band lz-tinted">
        <div className="lz-wrap lz-narrow">
          <div className="lz-sec-head">
            <p className="lz-eyebrow">FAQ</p>
            <h2 className="lz-disp">Frequently asked questions</h2>
          </div>
          <div className="lz-faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <span className="lz-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="lz-band lz-dark">
        <div className="lz-wrap lz-cta-in">
          <div className="lz-cta-text">
            <h2 className="lz-disp">Not sure which German level to join?</h2>
            <p>
              Leave your name and mobile number and a trainer will call you back
              with a level check and batch dates.
            </p>
          </div>
          <CallbackForm query="Home page: German level check call back" />
        </div>
      </section>
    </main>
  );
}
