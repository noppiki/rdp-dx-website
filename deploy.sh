#!/bin/bash

# 静的ファイルを出力
npm run build

# 出力先ディレクトリに移動
cd out

# .nojekyllファイルを追加（GitHub Pagesの処理をバイパス）
touch .nojekyll

# 現在のブランチを取得
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# GitHub Pagesにデプロイ
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/noppiki/rdp-dx-website.git
git push -f origin gh-pages

# 元のディレクトリに戻る
cd ..

echo "デプロイが完了しました！"