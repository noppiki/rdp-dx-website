# RDP DXソリューションウェブサイト

有限会社RDPのDX事業部サイトです。GitHub Pagesで公開されています。

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [TailwindCSS](https://tailwindcss.com/) - スタイリング
- 静的サイト生成（SSG）

## 開発方法

### 必要条件

- Node.js 18.x以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動し、[http://localhost:3000](http://localhost:3000)でアクセスできます。

### ビルド

```bash
npm run build
```

コマンド実行後、`out`ディレクトリに静的ファイルが生成されます。

## デプロイ

GitHub Pagesへのデプロイは以下のコマンドで行います。

```bash
./deploy.sh
```

このスクリプトは、ビルドを実行し、生成された静的ファイルをGitHub Pagesにデプロイします。

## プロジェクト構造

- `src/app` - ページコンポーネント
- `src/app/components` - 共通コンポーネント
- `public` - 静的ファイル（画像など）

## ライセンス

このプロジェクトは有限会社RDPの所有物です。