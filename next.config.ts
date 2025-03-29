// @ts-nocheck
import type { NextConfig } from "next";

// 本番環境とリポジトリ名
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/rdp-dx-website';

// 簡素化したNext.js設定
const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pagesでのベースパス設定
  basePath: isProd ? repoName : '',
  // GitHub Pages用のアセットプレフィックス
  assetPrefix: isProd ? repoName : '',
  // 画像処理の設定
  images: {
    unoptimized: true,
  },
  // GitHub Pagesの要件に合わせる
  trailingSlash: true,
  // 高度な静的最適化を無効化（GitHub Pages対応を優先）
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  staticPageGenerationTimeout: 180,
  compiler: {
    removeConsole: isProd,
  },
};

export default nextConfig;
