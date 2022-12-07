const { default: next } = require('next')

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    allowMiddlewareResponseBody: true,
  },
  images: {
    unoptimized: true,

  },
  }
  module.exports = nextConfig