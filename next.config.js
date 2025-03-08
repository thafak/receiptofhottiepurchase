/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Ensures proper static HTML export
  images: {
    unoptimized: true, // Fixes issues with next/image
  },
};

export default nextConfig;
