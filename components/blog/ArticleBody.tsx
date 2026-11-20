import { Fragment } from "react";
import Link from "next/link";
import type { Block, PostBody } from "@/lib/blog";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders text with inline [label](/path) links; internal paths use next/link. */
function Inline({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, label, href] = m;
    parts.push(text.slice(last, m.index));
    const cls = "font-medium text-indigo underline underline-offset-2";
    parts.push(
      href.startsWith("/") ? (
        <Link key={m.index} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={m.index} href={href} className={cls} rel="noopener">
          {label}
        </a>
      ),
    );
    last = m.index + whole.length;
  }
  parts.push(text.slice(last));
  return parts.map((p, i) => <Fragment key={i}>{p}</Fragment>);
}

/**
 * The post body: HTML from the CMS editor, or the h2 / paragraph / bullet list
 * blocks of the older posts in data/blog/posts.json.
 */
export default function ArticleBody({ body }: { body: PostBody }) {
  if (body.kind === "html")
    return (
      <div
        className="article-html"
        // Written by our own team in the BSPL CMS, which cleans it on save
        dangerouslySetInnerHTML={{ __html: body.html }}
      />
    );
  return <BlockBody blocks={body.blocks} />;
}

function BlockBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="text-[17px] leading-relaxed text-mute md:text-lg">
      {blocks.map((b, i) => {
        if (b.type === "h2")
          return (
            <h2
              key={i}
              className="mt-10 mb-3 font-disp text-[24px] leading-tight text-ink md:text-[28px]"
            >
              {b.text}
            </h2>
          );
        if (b.type === "ul")
          return (
            <ul key={i} className="mt-4 space-y-2.5">
              {b.items.map((t) => (
                <li key={t} className="flex gap-3.5">
                  <span className="mt-[0.5em] size-3 shrink-0 rounded-[3px] bg-gold shadow-[inset_0_-3px_0_var(--color-brand-red)]" />
                  <span>
                    <Inline text={t} />
                  </span>
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i} className="mt-4.5 first:mt-0">
            <Inline text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
