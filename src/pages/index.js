import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

import Wave from '../assets/images/wave.svg';

import {
  Container,
  WaveContainer,
  Content,
  ButtonsContainer,
} from '../styles/pages';

const HomePage = () => (
  <Layout>
    <SEO />

    <Container>
      <WaveContainer>
        <Wave />
      </WaveContainer>

      <Content>
        <Image source="images/logo.png" alt="Logo" />

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
          <Link to="/about">Sobre</Link>
        </ButtonsContainer>
      </Content>
    </Container>
  </Layout>
);

export default HomePage;
