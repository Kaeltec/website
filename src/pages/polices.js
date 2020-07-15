import { useRouter } from 'next/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '@app/components/Layout';
import SEO from '@app/components/SEO';

import polices from '@app/config/polices';

import {
  Container,
  Content,
  Navigation,
  Button,
  MarkdownContainer,
} from '@app/styles/pages/polices';

const PolicesPage = () => {
  const router = useRouter();
  const activePolice = (router.query.p || 'privacy').toLowerCase();
  const police = polices[activePolice];

  if (!police) router.push('/polices');

  return (
    <>
      <SEO title="Kael Polices | The best discord fun bot">
        {!!Object.values(router.query).length && (
          <meta name="robots" content="noindex" />
        )}
      </SEO>

      <Layout>
        <Container>
          <h1>POLÍTICA DE PRIVACIDADE & TERMOS DE USO</h1>
          <hr />

          <Content>
            <Navigation>
              {Object.values(polices).map(p => (
                <Button
                  key={p.name}
                  active={p.name === activePolice}
                  href={`/polices?p=${p.name}`}
                >
                  {p.title}
                </Button>
              ))}
            </Navigation>

            <MarkdownContainer>
              <ReactMarkdown source={police.markdown} />
            </MarkdownContainer>
          </Content>
        </Container>
      </Layout>
    </>
  );
};

export default PolicesPage;
