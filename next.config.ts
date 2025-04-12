/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],
  },
  // Enable optimization for Google Fonts/Typefaces
  optimizeFonts: true,
  // Configure redirects
  async redirects() {
    return [
      {
        source: "/app",
        destination: "https://apps.apple.com/app/starry",
        permanent: false,
      },
      {
        source: "/telegram",
        destination: "https://t.me/StarryAstrologyBot",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/astrologydao",
        permanent: false,
      },
    ];
  },
  // Configure headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
