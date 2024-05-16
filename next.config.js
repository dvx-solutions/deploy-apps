/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: "**", protocol: "https" }],
  },
  output:"standalone",
};

module.exports = nextConfig;
