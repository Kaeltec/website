import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Layout from '@app/components/Layout';
import Loader from '@app/components/Loader';
import SEO from '@app/components/SEO';

import api from '@app/services/api';

import {
  Container,
  Hero,
  Content,
  Navigation,
  Button,
  CommandsContainer,
} from '@app/styles/pages/commands';

const CommandsPage = () => {
  const router = useRouter();
  const [data, setCommands] = useState({});

  useEffect(() => {
    async function getCommands() {
      const { commands, categories } = await api
        .get('commands')
        .then(r => r.data);

      setCommands({ commands, categories });
    }

    getCommands();
  }, []);

  const { commands, categories } = data;
  const activeCategory = (router.query.category || 'bot').toLowerCase();

  if (commands && !categories.some(c => c === activeCategory)) {
    router.push('/commands');
  }

  return (
    <>
      <SEO title="Kael Commands | The best discord fun bot">
        {!!Object.values(router.query).length && (
          <meta name="robots" content="noindex" />
        )}
      </SEO>

      <Layout>
        <Container>
          <h1>COMANDOS</h1>
          <hr />

          <Hero>
            <p>
              <span style={{ color: '#6bf085' }}>Parâmetros opcionais:</span>{' '}
              <span style={{ marginLeft: '5px' }}>[aparecem assim]</span>
            </p>
            <p>
              <span style={{ color: '#e96969' }}>Parâmetros obrigatórios:</span>{' '}
              <span style={{ marginLeft: '5px' }}> {'<aparecem assim>'}</span>
            </p>
          </Hero>

          {!commands || !commands[activeCategory] ? (
            <Loader style={{ marginTop: '40px', textAlign: 'center' }} />
          ) : (
            <Content>
              <Navigation>
                {categories.map(category => (
                  <Button
                    key={category}
                    active={category === activeCategory}
                    href={`/commands?category=${category}`}
                  >
                    {category.toUpperCase()}
                  </Button>
                ))}
              </Navigation>

              <CommandsContainer>
                {commands[activeCategory].map(command => (
                  <div key={command.name}>
                    <span>
                      <strong>{command.name}</strong>
                      {command.usage && <span>{command.usage}</span>}
                    </span>

                    <p>{command.description || 'Descrição não informada'}</p>
                  </div>
                ))}
              </CommandsContainer>
            </Content>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default CommandsPage;
