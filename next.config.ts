import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  outputFileTracingRoot: path.join(process.cwd()),
  experimental: {
    // Keep the app router modern + fast.
  },
};

export default nextConfig;

