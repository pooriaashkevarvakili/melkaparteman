import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="fa">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />


        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
