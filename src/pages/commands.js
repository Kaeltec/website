import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';
import { getUrlParams } from '../utils';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import SEO from '../components/SEO';

import {
  Container,
  Hero,
  Content,
  Navigation,
  Button,
  CommandsContainer,
} from '../styles/pages/commands';

const CommandsPage = ({ navigate, location: { search } }) => {
  const [data, setCommands] = useState({});

  useEffect(() => {
    async function getCommands() {
      const { commands, categories } = await api
        .get('client/commands')
        .then(r => r.data);

      setCommands({ commands, categories });
    }

    getCommands();
  }, []);

  const { commands, categories } = data;
  const activeCategory = (getUrlParams(search).category || 'bot').toLowerCase();

  if (commands && !categories.some(c => c === activeCategory)) {
    navigate(`/commands/?category=${categories[0]}`);
  }

  return (
    <Layout>
      <SEO title="Kael - Commands | The best discord fun bot" />

      <Container>
        <h1>COMANDOS</h1>
        <hr />

        <Hero>
          <p>
            <span style={{ color: '#6bf085' }}>Parâmetros opcionais:</span>{' '}
            <span style={{ marginLeft: '5px' }}>[aparecem assim]</span>
          </p>
          <p>
            <span style={{ color: '#e96969' }}> Parâmetros obrigatórios:</span>{' '}
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
                  to={`/commands/?category=${category}`}
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
                    <span>{command.usage}</span>
                  </span>

                  <p>{command.description || 'Descrição não informada'}</p>
                </div>
              ))}
            </CommandsContainer>
          </Content>
        )}
      </Container>
    </Layout>
  );
};

CommandsPage.propTypes = {
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default CommandsPage;
