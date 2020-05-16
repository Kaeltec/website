import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({
  body,
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
}) => (
  <html {...htmlAttributes} lang="pt-BR">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="keywords"
        content="discord, discord-bot, bot, github, javascript, node, nodejs, kael, kaeltec, kaelbot, kael-bot, kael bot"
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

      {headComponents}
    </head>

    <body {...bodyAttributes}>
      {preBodyComponents}

      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />

      {postBodyComponents}
    </body>
  </html>
);

export default HTML;

HTML.propTypes = {
  body: PropTypes.string.isRequired,
  htmlAttributes: PropTypes.instanceOf(Object).isRequired,
  headComponents: PropTypes.instanceOf(Array).isRequired,
  bodyAttributes: PropTypes.instanceOf(Object).isRequired,
  preBodyComponents: PropTypes.instanceOf(Array).isRequired,
  postBodyComponents: PropTypes.instanceOf(Array).isRequired,
};
