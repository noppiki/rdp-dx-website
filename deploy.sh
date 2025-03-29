#!/bin/bash

# GitHub Pages向けのデプロイスクリプト

# ビルド
echo "Building the static site..."
npm run build

# .nojekyllの確保
echo "Ensuring .nojekyll exists..."
touch out/.nojekyll

# CSSをコピー
echo "Copying custom CSS..."
cp public/custom.css out/

# デプロイ
echo "Deploying to GitHub Pages..."
npx gh-pages -d out -t true

echo "Deployment complete!"