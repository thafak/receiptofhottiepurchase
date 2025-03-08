/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Allows dynamic routing on Vercel
  images: {
    unoptimized: true, // Avoids image optimization issues
  },
};

module.exports = nextConfig;