import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The on-disk Turbopack dev cache grows to >1 GB; keep dev light on small drives.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
