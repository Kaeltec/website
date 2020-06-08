import React from 'react';
import styled from 'styled-components';

const LoaderComponent = props => (
  <Container {...props}>
    <img src="/img/loader.png" alt="Loader" />
  </Container>
);

const Container = styled.div`
  img {
    width: 100px;
    height: 100px;
    animation: spinner 800ms linear infinite;

    @keyframes spinner {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export default LoaderComponent;
