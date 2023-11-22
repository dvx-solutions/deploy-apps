/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: "**", protocol: "https" }],
  },
};

module.exports = nextConfig;
