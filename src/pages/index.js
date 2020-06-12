import React from 'react';

import partners from '@app/data/partners';

import Layout from '@app/components/Layout';
import Link from '@app/components/Link';
import SEO from '@app/components/SEO';

import {
  Container,
  KaelContainer,
  ButtonsContainer,
  PartnersContainer,
  PartnersContent,
  PartnerItem,
  WaveContainer,
} from '@app/styles/pages';

const HomePage = () => (
  <>
    <SEO />

    <Layout>
      <Container>
        <KaelContainer>
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
            <Link href="#partners">Parceiros</Link>
          </ButtonsContainer>
        </KaelContainer>

        <PartnersContainer>
          <WaveContainer
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#313339"
              fillOpacity="1"
              d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,186.7C672,181,768,235,864,224C960,213,1056,139,1152,144C1248,149,1344,235,1392,277.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </WaveContainer>

          <h1>Parceiros</h1>

          <PartnersContent>
            {partners.map(partner => (
              <PartnerItem key={partner.url}>
                <h3>{partner.name}</h3>

                <div>
                  <section>
                    <img src={partner.icon} alt="Icon" />
                    <span>
                      <span style={{ color: '#31bd56' }}>
                        {partner.members}
                      </span>{' '}
                      Membros
                    </span>
                  </section>

                  <section>
                    <p>{partner.description}</p>
                  </section>

                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entre
                  </a>
                </div>
              </PartnerItem>
            ))}
          </PartnersContent>
        </PartnersContainer>
      </Container>
    </Layout>
  </>
);

export default HomePage;
