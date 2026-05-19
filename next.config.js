/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a minimal self-contained build for Docker / Railway
  output: "standalone",
};

module.exports = nextConfig;
