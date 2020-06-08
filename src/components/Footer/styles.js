import styled from 'styled-components';

export const Container = styled.footer`
  font-family: 'Roboto';
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.15);
`;

export const Content = styled.div.attrs({ className: 'padding' })`
  display: flex;
  padding: 40px 0;
  background-color: ${props => props.theme.dark_solid};

  align-items: center;
  justify-content: space-between;

  & > div {
    width: 100%;
    max-width: 50%;

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
  }

  nav {
    display: flex;
    flex-direction: column;

    a {
      font-weight: 600;
      transition: opacity 200ms;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 1024px) {
    align-items: flex-start;
    flex-direction: column;

    & > div {
      max-width: 100%;
    }

    nav {
      margin-top: 40px;

      a {
        margin: 3px 0;
        font-size: 2.3rem;
      }
    }
  }
`;

export const CopyRightContainer = styled.div.attrs({ className: 'padding' })`
  padding: 20px 0;
  background-color: ${props => props.theme.favcolor};

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.dark};
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
