// Shared 1200×630 social card (Open Graph / Twitter) rendered with next/og.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const INK = "#14143a";
const GOLD = "#ffd010";
const RED = "#d02020";

async function logo() {
  const file = await readFile(
    join(process.cwd(), "public/images/logo-white.png"),
  );
  return `data:image/png;base64,${file.toString("base64")}`;
}

export async function ogCard({
  eyebrow,
  title,
  subtitle,
  badge,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** optional level badge, e.g. { text: "B1", bg: "#D02020", fg: "#fff" } */
  badge?: { text: string; bg: string; fg: string };
}) {
  const src = await logo();
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: INK,
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", height: 14 }}>
        <div style={{ flex: 1, background: INK }} />
        <div style={{ flex: 1, background: RED }} />
        <div style={{ flex: 1, background: GOLD }} />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px 60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {badge && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 120,
                borderRadius: 28,
                background: badge.bg,
                color: badge.fg,
                fontSize: 56,
                fontWeight: 700,
              }}
            >
              {badge.text}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: GOLD,
            }}
          >
            {eyebrow}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 48 ? 58 : 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", fontSize: 30, color: "#c9ccee" }}>
              {subtitle}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={src} height={76} />
          <div style={{ display: "flex", fontSize: 26, color: "#c9ccee" }}>
            languagezone.in · Near Dwarka Store, EC Road, Race Course, Dehradun
          </div>
        </div>
      </div>
    </div>,
    OG_SIZE,
  );
}
