/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.themealdb.com'],
  },
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error'],
  //   },
  // },
};

module.exports = nextConfig;
