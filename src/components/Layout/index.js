import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import colors from '../../config/colors';

import Header from '../Header';

import GlobalStyles from '../../styles/global';

import { Container, Content } from './styles';

const LayoutComponent = ({ children }) => (
  <ThemeProvider theme={colors}>
    <Container>
      <Header />

      <Content>{children}</Content>

      <GlobalStyles />
    </Container>
  </ThemeProvider>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
