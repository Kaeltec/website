import React from 'react';

import Layout from '@app/components/Layout';
import Link from '@app/components/Link';
import SEO from '@app/components/SEO';

import {
  Container,
  WaveContainer,
  Content,
  ButtonsContainer,
} from '@app/styles/pages';

const HomePage = () => (
  <>
    <SEO />

    <Layout>
      <Container>
        <WaveContainer>
          <img src="/img/wave.svg" alt="Logo" />
        </WaveContainer>

        <Content>
          <img src="/img/logo.png" alt="Logo" />

          <h1>Kael um bot brasileiro para gestão de servidores Discord.</h1>
          <h2>
            Oi, eu sou o Kael! Um porquinho charmoso que alegra seus dias e faz
            com que membros do seu servidor sintam-se felizes.
          </h2>

          <ButtonsContainer>
            <a
              href="https://discord.com/oauth2/authorize?client_id=412593783696261121&scope=bot&permissions=2146958591"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adicionar
            </a>
            <Link href="/about">Sobre</Link>
          </ButtonsContainer>
        </Content>
      </Container>
    </Layout>
  </>
);

export default HomePage;
