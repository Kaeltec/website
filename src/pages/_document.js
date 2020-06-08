import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    return {
      styleElements: sheet.getStyleElement(),
      ...renderPage(Component => props => {
        return sheet.collectStyles(<Component {...props} />);
      }),
    };
  }

  render() {
    const { styleElements } = this.props;

    return (
      <html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta
            name="keywords"
            content="discord, discord-bot, bot, kael, kaeltec, kaelbot, kael-bot, kael bot, kaelwebsite, kael-website, kael website"
          />

          <meta name="author" content="Kaeltec Team" />

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

          <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/css/styles.css" />

          <link rel="icon" href="/favicon.png" />

          {styleElements}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
