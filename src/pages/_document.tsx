import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href='/manifest.json' sizes="any" />
        <link rel="icon" href="/icon-512x512.png" />
        <title>Legitem</title>
        <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" strategy="lazyOnload" />
      </Head>
      <body className="bg-stone-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
