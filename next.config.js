/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/physicsnotes',
  assetPrefix: '/physicsnotes/',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'i.ytimg.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 