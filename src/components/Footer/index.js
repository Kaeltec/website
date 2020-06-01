import React from 'react';

import { Container, Content, CopyRightContainer } from './styles';

const FooterComponent = () => (
  <Container>
    <Content>
      <h3>Kael Bot Discord</h3>
      <p>Um bot brasileiro para Discord.</p>

      <h3>Contato</h3>
      <p>
        Para assuntos tais sobre pagamento, denúncias, ou comercial, contate{' '}
        <span>
          <a href="mailto:kaeltecoficial@hotmail.com">
            kaeltecoficial@hotmail.com
          </a>
        </span>
      </p>
    </Content>

    <CopyRightContainer>
      <p>
        Copyright © 2019-{new Date().getFullYear()} Kaeltec - Todos os direitos
        reservados.
      </p>
    </CopyRightContainer>
  </Container>
);

export default FooterComponent;
