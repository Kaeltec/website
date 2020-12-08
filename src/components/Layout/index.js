import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import { Container, Content } from './styles';

const LayoutComponent = ({ children }) => (
  <Container>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Container>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
