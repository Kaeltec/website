import React from 'react';
import styled, { keyframes } from 'styled-components';

import loaderImage from '../assets/images/loader.png';

const LoaderComponent = props => (
  <Container {...props}>
    <img src={loaderImage} alt="Loader" />
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
    width: 60px;
    height: 60px;
    animation: ${spinner} 800ms linear infinite;
  }
`;

export default LoaderComponent;
