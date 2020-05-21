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
        <Link to="/commands">Comandos</Link>
        <Link to="/support">Suporte</Link>
        <a
          href="https://translate.kaeltec.fun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Me Traduza
        </a>
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MX8CFVD9Z5SCN&source=url"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doar
        </a>
      </Navigation>
    </Container>
  );
};

export default HeaderComponent;
