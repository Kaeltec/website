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
          <section>
            <img src="/img/logo.png" alt="Logo" />

            <h1>Kael um bot brasileiro para gestão de servidores Discord.</h1>

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
          </section>

          <WaveContainer
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#222429"
              fillOpacity="1"
              d="M0,256L24,224C48,192,96,128,144,101.3C192,75,240,85,288,122.7C336,160,384,224,432,224C480,224,528,160,576,138.7C624,117,672,139,720,144C768,149,816,139,864,112C912,85,960,43,1008,64C1056,85,1104,171,1152,181.3C1200,192,1248,128,1296,128C1344,128,1392,192,1416,224L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            />
          </WaveContainer>
        </KaelContainer>

        <PartnersContainer>
          <h1>Parceiros</h1>

          <PartnersContent>
            {partners.map(partner => (
              <PartnerItem key={partner.url}>
                <h3>{partner.name}</h3>

                <div>
                  <section>
                    <img src={partner.icon} alt="Icon" />
                    <span>
                      <span style={{ color: '#32d15c' }}>
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
