/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/gas",
        destination: "/api/gas",
      },
    ];
  },
};

module.exports = nextConfig;
