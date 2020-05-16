import React, { useState } from 'react';
import { Link } from 'gatsby';

import Image from '../Image';

import {
  Container,
  BrandsContainer,
  ResponsiveButton,
  Navigation,
} from './styles';

const HeaderComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Container>
      <BrandsContainer>
        <Link to="/">
          <Image source="images/logo.png" alt="Logo" />
          <span>Kael</span>
        </Link>

        <ResponsiveButton
          open={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span />
          <span />
          <span />
        </ResponsiveButton>
      </BrandsContainer>

      <Navigation open={navbarOpen}>
        <Link to="/commands">Commands</Link>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Me Traduza
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Support
        </a>
      </Navigation>
    </Container>
  );
};

export default HeaderComponent;
