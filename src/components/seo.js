import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEOComponent = ({ title, description, meta }) => {
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
              }
              github {
                url
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
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      htmlAttributes={{ lang: 'pt-BR' }}
      meta={[
        // Open Graph
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

SEOComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

SEOComponent.defaultProps = {
  title: '',
  description: '',
  meta: [],
};

export default SEOComponent;
