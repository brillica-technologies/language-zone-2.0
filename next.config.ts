import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Pages moved out of /courses (e.g. /courses/german/a1 → /german/a1).
      ...[
        ["/courses/blog", "/blogs"],
        ["/courses/contact-us", "/contact-us"],
        ["/courses/german", "/german"],
      ].flatMap(([from, to]) => [
        { source: from, destination: to, permanent: true },
        {
          source: `${from}/:path*`,
          destination: `${to}/:path*`,
          permanent: true,
        },
      ]),
      // About page renamed: /about-us → /about
      { source: "/about-us", destination: "/about", permanent: true },
      // The site now teaches German only; old Spanish / IELTS links go home.
      ...["/courses/spanish", "/courses/ielts"].flatMap((source) => [
        { source, destination: "/", permanent: true },
        { source: `${source}/:path*`, destination: "/", permanent: true },
      ]),
      // Nothing else lives under /courses any more.
      { source: "/courses", destination: "/german", permanent: true },
    ];
  },
  experimental: {
    // The on-disk Turbopack dev cache grows to >1 GB; keep dev light on small drives.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
