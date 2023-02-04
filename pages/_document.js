import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*<!-- Primary Meta Tags -->*/}
        <meta name="title" content="HACO DEVELOPER" />
        <meta
          name="description"
          content="A student from Taiwan, Love coding bot and website."
        />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.haco.tw/" />
        <meta property="og:title" content="HACO DEVELOPER" />
        <meta
          property="og:description"
          content="A student from Taiwan, Love coding bot and website."
        />
        <meta property="og:image" content="/logo/banner.png" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.haco.tw/" />
        <meta property="twitter:title" content="HACO DEVELOPER" />
        <meta
          property="twitter:description"
          content="A student from Taiwan, Love coding bot and website."
        />
        <meta property="twitter:image" content="/logo/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
