/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "tripguide-buckets.s3.ap-southeast-1.amazonaws.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
