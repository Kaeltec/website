import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'app',
})`
  display: flex;
  min-height: 100vh;

  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-top: 120px;
`;
