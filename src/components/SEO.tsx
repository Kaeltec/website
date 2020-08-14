import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import urlJoin from 'url-join';

const BASE_URL = (base: string) => {
  return !/^(https|http):\/\/+/.test(base)
    ? urlJoin('https://kaelbot.xyz', base)
    : base;
};

interface Props {
  url?: string;
  title?: string;
  image?: string;
  description?: string;
}

const SEOComponent: React.FC<Props> = ({
  url = '',
  title = 'Kael | The best discord fun bot',
  image = '/img/meta-image.png',
  description = 'Kael a Brazilian bot designed for Discord server management.',
  children,
}) => {
  const router = useRouter();

  const metaImage = BASE_URL(image);
  const canonical = BASE_URL(url || router.pathname);

  return (
    <NextHead>
      <title>{title}</title>

      <link rel="canonical" href={canonical} />

      <link itemProp="url" href="https://kaelbot.xyz" />
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

      <meta name="twitter:site" content="@hitechline_" />
      <meta name="twitter:creator" content="@hitechline_" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:src" content={metaImage} />

      <link rel="icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />

      {children}
    </NextHead>
  );
};

export default SEOComponent;
