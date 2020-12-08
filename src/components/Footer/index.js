import React from 'react';

import Link from '../Link';

import { Container, Content, CopyRightContainer } from './styles';

const FooterComponent = () => (
  <Container>
    <Content>
      <div>
        <h3>Kael Bot Discord</h3>
        <p>Um bot brasileiro para Discord.</p>

        <h3>Contato</h3>
        <p>
          Para assuntos tais sobre pagamento, denúncias, ou comercial, contate{' '}
          <span>
            <a href="mailto:support@kaelbot.xyz">support@kaelbot.xyz</a>
          </span>
        </p>
      </div>

      <nav>
        <Link href="/polices?p=privacy">Política de Privacidade</Link>
        <Link href="/polices?p=terms">Termos de Uso</Link>
        <Link href="/polices?p=partners">Diretrizes Parceiros</Link>
      </nav>
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
