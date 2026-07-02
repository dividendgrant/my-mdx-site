import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: every route is prerendered to plain HTML at build time.
  // No server/edge runtime at deploy, so Cloudflare Pages just serves static
  // files (fixes the fs/eval runtime errors and loads fastest).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
