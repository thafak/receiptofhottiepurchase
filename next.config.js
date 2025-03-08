/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Allows dynamic routing on Vercel
  images: {
    unoptimized: true, // Avoids next/image optimization issues
  },
};

module.exports = nextConfig;