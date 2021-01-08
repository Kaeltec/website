import NextHead from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import urlJoin from 'url-join';

const BASE_URL = base => {
  return !/^(https|http):\/\/+/.test(base)
    ? urlJoin('https://kaelbot.com', base)
    : base;
};

const HeadComponent = ({ title, description, image, url, children }) => {
  const router = useRouter();

  const metaImage = BASE_URL(image);
  const canonical = BASE_URL(url || router.pathname);

  return (
    <NextHead>
      <title>{title}</title>

      <link itemProp="url" href="https://kaelbot.com/" />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      <meta name="image" content={metaImage} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />

      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />

      <meta name="twitter:site" content="@BotKael" />
      <meta name="twitter:creator" content="@BotKael" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:src" content={metaImage} />

      <link rel="icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="canonical" href={canonical} />

      {children}
    </NextHead>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
};

HeadComponent.defaultProps = {
  title: 'Kael | The best discord fun bot',
  description:
    'Kael a Brazilian bot designed for Discord server management. Get access to my commands divided by category by accessing my website.',
  image: '/img/meta-image.png',
  url: '',
  children: null,
};

export default HeadComponent;
