/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/rdp-dx-website' : '',
  trailingSlash: true,
}

module.exports = nextConfig
