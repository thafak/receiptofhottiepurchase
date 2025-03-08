/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Fixes issues with next/image
  },
};

export default nextConfig;
