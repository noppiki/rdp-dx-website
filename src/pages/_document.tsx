import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* プリロードされるフォント */}
        <link
          rel="preload"
          href={`${process.env.NODE_ENV === 'production' ? '/rdp-dx-website' : ''}/fonts/geist-sans.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${process.env.NODE_ENV === 'production' ? '/rdp-dx-website' : ''}/fonts/geist-mono.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}