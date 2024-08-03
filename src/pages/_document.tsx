import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href='/manifest.json' sizes="any" />
        <link rel="icon" href="/icon-512x512.png" />
        <title>Legitem</title>
      </Head>
      <body className="bg-stone-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
