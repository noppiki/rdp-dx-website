import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/rdp-dx-website';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
  images: {
    unoptimized: true,
  },
  // GitHub Pagesで必要なtrailingSlash
  trailingSlash: true,
};

export default nextConfig;
