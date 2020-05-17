import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

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
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920.000000 581.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,581.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path d="M5319 5455 c-272 -44 -553 -167 -782 -342 -110 -84 -285 -263 -507 -518 -234 -270 -395 -432 -518 -523 -306 -227 -670 -343 -1201 -383 -242 -18 -753 -6 -1141 26 -525 44 -841 39 -1082 -17 l-88 -20 0 -1839 0 -1839 9600 0 9600 0 0 1119 0 1118 -77 36 c-251 114 -597 198 -816 197 -172 -1 -220 -16 -702 -225 -148 -64 -324 -138 -390 -165 -577 -229 -871 -237 -975 -26 -31 62 -32 70 -46 288 -22 349 -56 586 -125 866 -217 884 -675 1520 -1231 1706 -144 49 -213 59 -383 59 -236 1 -392 -37 -635 -154 -320 -154 -499 -312 -890 -789 -83 -102 -197 -235 -252 -297 -363 -405 -747 -592 -1378 -670 -117 -14 -221 -18 -545 -18 -349 0 -442 4 -730 28 -348 29 -429 37 -590 63 -147 23 -345 15 -445 -19 -167 -56 -349 -126 -409 -156 -87 -44 -429 -180 -580 -231 -192 -64 -313 -91 -437 -97 -190 -10 -279 28 -334 141 -29 58 -32 74 -40 222 -13 220 -27 355 -56 524 -176 1031 -704 1770 -1374 1921 -115 26 -328 33 -441 14z" />
          </g>
        </svg>
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
