import React, { useState } from 'react';

import Link from '../Link';

import {
  Container,
  BrandsContainer,
  ResponsiveButton,
  Navigation,
  DashBoardContainer,
} from './styles';

const HeaderComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Container>
      <BrandsContainer>
        <Link href="/">
          <img src="/img/logo.png" alt="Logo" />
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
        <Link href="/commands">Comandos</Link>
        <Link href="/support">Suporte</Link>
        <a href="https://crowdin.com/project/KaelBot" rel="nofollow">
          Me Traduza
        </a>
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MX8CFVD9Z5SCN&source=url"
          rel="nofollow"
        >
          Doar
        </a>

        <DashBoardContainer>
          <a href="https://dash.kaelbot.com" rel="nofollow">
            Dashboard
          </a>
        </DashBoardContainer>
      </Navigation>
    </Container>
  );
};

export default HeaderComponent;
