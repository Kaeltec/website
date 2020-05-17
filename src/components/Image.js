import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const ImageComponent = ({ source, alt }) => {
  const refImage = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { current: image } = refImage;

    image.addEventListener('load', () => setLoading(false));
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
            ref={refImage}
            loaded={!loading}
            src={image.node.childImageSharp.fluid.src}
            alt={alt}
          />
        );
      }}
    />
  );
};

const Container = styled.img`
  opacity: 0;
  transform: scale(0.2);
  transition: opacity 200ms, transform 300ms;

  ${props =>
    props.loaded &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

ImageComponent.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ImageComponent.defaultProps = {
  alt: 'Image',
};

export default ImageComponent;
