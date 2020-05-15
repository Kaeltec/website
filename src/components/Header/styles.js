import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: absolute;
  display: flex;
  align-items: center;

  z-index: 999;
  width: 100%;
  padding: 20px 40px;

  top: 0;
  left: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const BrandsContainer = styled.div`
  display: flex;
  padding-right: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  & > div:first-child {
    display: flex;
    align-items: center;

    img {
      width: 5rem !important;
      height: 5rem !important;
    }

    & > span {
      font-family: 'Platonica';
      font-size: 4rem;
      margin-left: 20px;
      color: ${props => props.theme.favcolor};
    }
  }

  @media (max-width: 1024px) {
    z-index: 10;
    width: 100%;
    padding: 0;
    height: 60px;

    border: none;
    justify-content: space-between;

    & > div:first-child span {
      display: none;
    }
  }
`;

export const ResponsiveButton = styled.button`
  @media (max-width: 1024px) {
    span {
      position: relative;
      display: flex;
      width: 20px;
      height: 3px;

      border-radius: 40px;
      background-color: #fff;
      transition: transform 200ms ease-out, opacity 400ms;

      & + span {
        margin-top: 3px;
      }

      ${props => {
        return (
          props.open &&
          css`
            margin: 0 !important;

            &:nth-child(1) {
              transform: rotate(45deg);
              top: 6px;
            }

            &:nth-child(2) {
              opacity: 0;
            }

            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          `
        );
      }}
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  margin-left: 20px;
  align-items: center;

  a {
    font-size: 2rem;
    transition: opacity 200ms;

    & + a {
      margin-left: 20px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 5;
    width: 100%;

    top: -200%;
    opacity: 0;

    margin: 0;
    padding-top: 60px;

    flex-direction: column;
    transition: top 200ms, opacity 200ms, background-color 200ms;

    a {
      width: 100%;
      margin: 0 !important;

      text-align: center;
      padding: 15px 0;
      border-top: 1px solid rgba(79, 84, 92, 0.4);
    }

    ${props => {
      return (
        props.open &&
        css`
          top: 0;
          opacity: 1;
          background-color: #000;
        `
      );
    }}
  }
`;
