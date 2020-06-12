import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const KaelContainer = styled.section.attrs({ className: 'padding' })`
  display: flex;
  z-index: 3;
  max-width: 1024px;
  margin: 0 auto;

  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20rem !important;
    height: 20rem !important;
  }

  h1 {
    margin: 15px 0;
    font-size: 2.8rem;
  }

  h2 {
    font-size: 1.7rem;
    color: ${props => props.theme.grey};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;

  margin: 0 auto;
  margin-top: 20px;

  align-items: center;
  justify-content: center;

  a {
    width: 50%;
    padding: 2.5rem 0;
    margin: 10px;

    text-align: center;
    font-size: 2.5rem;

    border-radius: 6px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.2);
    transition: filter 200ms;
    background-color: ${props => props.theme.grey_solid};

    &:nth-child(2) {
      background-color: ${props => props.theme.favcolor};
    }

    &:hover {
      filter: brightness(90%);
    }
  }

  @media (max-width: 612px) {
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`;

export const PartnersContainer = styled.section.attrs({ id: 'partners' })`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #111218;

  h1 {
    margin: 20px 0;
    font-size: 4.2rem;
    text-align: center;
  }
`;

export const PartnersContent = styled.div.attrs({ className: 'padding' })`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const PartnerItem = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  height: 360px;
  max-width: 300px;
  margin: 20px;
  flex-direction: column;

  h3 {
    margin-bottom: 8px;
    font-size: 2.5rem;
    text-align: center;
  }

  & > div {
    position: relative;
    display: flex;
    flex-grow: 1;
    border: 1px solid rgba(255, 255, 255, 0.6);
    padding: 30px;
    flex-direction: column;

    a {
      position: absolute;
      right: 8px;
      bottom: 8px;
      padding: 8px 10px;
      font-size: 1.8rem;
      background-color: ${props => props.theme.favcolor};
    }

    section {
      &:nth-child(1) {
        display: flex;
        align-items: center;
        flex-direction: column;

        span {
          margin-top: 10px;
          font-size: 1.6rem;
        }

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }

      &:nth-child(2) {
        margin-top: 10px;
        padding-top: 10px;
        text-align: center;
        border-top: 1px solid rgba(255, 255, 255, 0.3);

        p {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export const WaveContainer = styled.svg`
  position: relative;
  z-index: 0;
  top: -40px;
  left: 0%;
`;
