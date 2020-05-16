import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEOComponent = ({ title, description, image, meta }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              twitter {
                url
                creator
              }
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      title={title || siteMetadata.title}
      htmlAttributes={{ lang: 'pt-BR' }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'image',
          content: image,
        },
        // Open Graph
        {
          name: 'og:image:width',
          content: '1920',
        },
        {
          name: 'og:image:height',
          content: '1080',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:image:secure_url',
          content: image,
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.social.twitter.creator,
        },
        {
          name: 'twitter:site',
          content: siteMetadata.social.twitter.creator,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'twitter:image:src',
          content: image,
        },
      ].concat(meta)}
    />
  );
};

SEOComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

SEOComponent.defaultProps = {
  title: 'Kael | The best discord fun bot',
  description:
    'Kael a Brazilian bot designed for Discord server management. Get access to my commands divided by category by accessing my website.',
  image: '/img/meta-image.png',
  meta: [],
};

export default SEOComponent;
