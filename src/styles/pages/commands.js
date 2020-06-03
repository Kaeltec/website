import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  padding: 40px 60px;
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: 4rem;
  }

  hr {
    margin: 5px 0;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }
`;

export const Hero = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 15px;
  background-color: ${props => props.theme.dark_solid};

  p {
    & + p {
      margin-left: 30px;
    }

    span {
      font-weight: bold;
      color: ${props => props.theme.grey};
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    p + p {
      margin: 0;
      margin-top: 10px;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  height: 600px;
  margin-top: 40px;
  padding: 10px 20px;
  background-color: ${props => props.theme.dark_solid};

  @media (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const Navigation = styled.nav.attrs({ className: 'scroll' })`
  display: flex;
  overflow-y: auto;
  padding: 20px 40px;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.25);

  @media (max-width: 1024px) {
    padding: 20px 20px;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }
`;

export const Button = styled(Link)`
  position: relative;
  padding: 5px 10px;

  font-size: 3rem;
  font-weight: 500;

  border-radius: 4px;
  transition: background-color 300ms;

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    opacity: 0;

    top: 50%;
    left: -20px;

    border-radius: 50%;
    transition: opacity 600ms, transform 300ms;
    background-color: ${props => props.theme.favcolor};
  }

  &:hover {
    background-color: ${props => props.theme.dark};

    &:before {
      opacity: 1;
      transform: translateY(-50%);
    }
  }

  ${props =>
    props.active &&
    css`
      background-color: transparent !important;

      &:before {
        opacity: 1 !important;
        transform: translateY(-50%) !important;
      }
    `}
`;

export const CommandsContainer = styled.section.attrs({ className: 'scroll' })`
  display: flex;
  overflow-y: auto;
  padding: 20px 40px;
  flex-direction: column;

  div {
    & + div {
      margin-top: 20px;
    }

    span {
      display: flex;

      strong {
        text-transform: uppercase;
        font-size: 2.6rem;
      }

      span {
        margin-left: 20px;
        font-size: 2rem;
        font-weight: bolder;
        color: ${props => props.theme.grey};
      }

      @media (max-width: 500px) {
        flex-direction: column;

        span {
          margin: 0;
          margin-top: 4px;
        }
      }
    }

    p {
      margin-top: 10px;
      font-size: 2rem;
      font-weight: bolder;
      color: ${props => props.theme.grey};
    }
  }

  @media (max-width: 1024px) {
    padding: 20px 20px;
  }
`;
