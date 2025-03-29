import type { NextConfig } from "next";

// 本番環境とリポジトリ名
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/rdp-dx-website';

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pagesでのベースパス
  basePath: isProd ? repoName : '',
  // 静的アセットのプレフィックス
  assetPrefix: isProd ? repoName : '',
  // 画像最適化を無効化（必須）
  images: {
    unoptimized: true,
    // 静的ビルド用のパスプレフィックス
    path: `${isProd ? repoName : ''}/_next/image`,
    // Next.js 13以上での推奨設定
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // GitHub Pagesで必要なtrailingSlash
  trailingSlash: true,
  // App Routerを使用しているのでexportPathMapは不要
};

export default nextConfig;
