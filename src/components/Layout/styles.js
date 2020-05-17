import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'app',
})`
  display: flex;
  min-height: 100vh;

  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.dark};
`;

export const Content = styled.main`
  flex-grow: 1;
  padding-top: 120px;
`;
