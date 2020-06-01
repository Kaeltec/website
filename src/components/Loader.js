import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderComponent = props => (
  <Container {...props}>
    <img src="/img/loader.png" alt="Loader" />
  </Container>
);

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  img {
    width: 100px;
    height: 100px;
    animation: ${spinner} 800ms linear infinite;
  }
`;

export default LoaderComponent;
