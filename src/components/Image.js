import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const ImageComponent = ({ source, alt }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query {
          assets: allFile {
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
        const image = data.assets.edges.find(({ node }) => {
          return node.relativePath.includes(source);
        });

        if (!image) return null;

        return (
          <Container
            loaded={!loading}
            src={image.node.childImageSharp.fluid}
            alt={alt}
          >
            <Image fluid={image.node.childImageSharp.fluid} alt={alt} />
          </Container>
        );
      }}
    />
  );
};

const Container = styled.div`
  transform: scale(${props => (props.loaded ? '1' : '0.8')});
  transition: transform 200ms;

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
