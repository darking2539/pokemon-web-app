/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
}

module.exports = nextConfig
