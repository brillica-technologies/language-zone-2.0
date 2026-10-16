import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site now teaches German only; send old Spanish / IELTS links to the home page.
  async redirects() {
    return ["/courses/spanish", "/courses/ielts"].flatMap((source) => [
      { source, destination: "/", permanent: true },
      { source: `${source}/:path*`, destination: "/", permanent: true },
    ]);
  },
  experimental: {
    // The on-disk Turbopack dev cache grows to >1 GB; keep dev light on small drives.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
