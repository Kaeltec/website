import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const ImageComponent = ({ source, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(({ node }) => {
        return node.relativePath.includes(source);
      });

      if (!image) return null;

      return (
        <Container>
          <Image fluid={image.node.childImageSharp.fluid} alt={alt} />
        </Container>
      );
    }}
  />
);

const Container = styled.div`
  div.gatsby-image-wrapper {
    & > div:first-child {
      padding: 0 !important;
    }

    & > img {
      position: relative !important;
    }
  }
`;

ImageComponent.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ImageComponent.defaultProps = {
  alt: 'Image',
};

export default ImageComponent;
