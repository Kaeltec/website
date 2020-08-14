import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="keywords"
            content="discord, discord-bot, bot, kael, kaeltec, kaelbot, kael bot discord, kael-bot, kael bot, kaelwebsite, kael-website, kael website"
          />

          <meta name="author" content="Kaeltec Team" />
          <meta name="theme-color" content="#f23859" />

          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="referrer" content="no-referrer-when-downgrade" />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Kael Bot" />

          <link
            href="https://fonts.googleapis.com/css?family=Righteous|Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" type="text/css" href="/css/styles.css" />
          <link rel="stylesheet" type="text/css" href="/css/normalize.css" />

          <link rel="icon" href="/favicon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />

          <link
            rel="apple-touch-icon"
            sizes="48x48"
            href="/icons/icon-48x48.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/icons/icon-96x96.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="/icons/icon-256x256.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="/icons/icon-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/icons/icon-512x512.png"
          />

          <script
            async
            data-ad-client="ca-pub-5563002632241077"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
