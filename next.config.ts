import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 390, 430, 640, 750, 828, 1080, 1200, 1920],
  },
  poweredByHeader: false,
};

export default nextConfig;