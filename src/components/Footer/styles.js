import styled from 'styled-components';

export const Container = styled.footer`
  font-family: 'Roboto';
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.15);
`;

export const Content = styled.div`
  padding: 40px 60px;
  background-color: ${props => props.theme.dark_solid};

  h3 {
    font-size: 2.3rem;
    font-weight: 600;

    &:not(:first-child) {
      margin-top: 15px;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.grey};
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

export const CopyRightContainer = styled.div`
  padding: 20px 60px;
  background-color: ${props => props.theme.favcolor};

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.dark};
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 20px 20px;
  }
`;
