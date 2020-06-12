import styled, { css } from 'styled-components';

export const Container = styled.header.attrs({ className: 'padding' })`
  position: absolute;
  display: flex;
  align-items: center;

  z-index: 999;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  top: 0;
  left: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const BrandsContainer = styled.div`
  display: flex;
  padding-right: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  & > a {
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

    & > a > span {
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
  width: 100%;
  margin-left: 20px;
  align-items: center;

  a {
    font-size: 2rem;
    opacity: 0.8;
    transition: opacity 200ms;

    & + a {
      margin-left: 20px;
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 5;
    width: 100%;

    top: -100vh;
    opacity: 0;

    margin: 0;
    padding-top: 60px;

    flex-direction: column;
    transition: top 200ms, opacity 200ms, background-color 200ms;

    & > a {
      width: 100%;
      margin: 0 !important;

      text-align: center;
      padding: 15px 0;
      border-bottom: 1px solid rgba(79, 84, 92, 0.4);

      &:nth-child(1) {
        border-top: 1px solid rgba(79, 84, 92, 0.4);
      }
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

export const DashBoardContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  a {
    padding: 10px 30px;
    opacity: 0.8;
    font-size: 2rem;

    border-radius: 50px;
    border: 2px solid hsla(0, 0%, 100%, 0.8);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4);
    transition: opacity 200ms;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    padding: 15px 0;
  }
`;
