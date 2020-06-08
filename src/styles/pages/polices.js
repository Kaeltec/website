import styled, { css } from 'styled-components';

import Link from '@app/components/Link';

export const Container = styled.div.attrs({ className: 'padding' })`
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: 4rem;
  }

  hr {
    margin: 5px 0;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
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
  min-width: 300px;

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

export const MarkdownContainer = styled.section.attrs({
  className: 'scroll',
})`
  overflow-y: auto;
  padding: 0 20px;

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10px 0;
  }

  p {
    margin: 10px 0;
    text-align: justify;
  }

  ul {
    margin: 20px 0;
    margin-left: 20px;

    li {
      position: relative;
      display: block;
      margin-top: 10px;

      &:before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        top: 5px;
        left: -15px;

        border-radius: 50%;
        background-color: #fff;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;
