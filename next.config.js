/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false,
  },
  reactStrictMode: true,
  compress: true, // Enable Brotli/Gzip compression
  images: {
    formats: ["image/avif", "image/webp"], // Modern image formats (50% smaller)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 90, 100],
    localPatterns: [
      {
        pathname: "/placeholder.svg",
        search: "**",
      },
    ],
  },
};

module.exports = nextConfig;
