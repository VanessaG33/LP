import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "aceternity.com",
      "cdn.sanity.io",
      "avatar.vercel.sh",
      "randomuser.me",
    ],
  },
};

export default nextConfig;
