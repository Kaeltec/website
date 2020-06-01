import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  height: 100%;
  padding: 40px 0;
`;

export const WaveContainer = styled.div`
  svg {
    position: absolute;
    z-index: 0;
    bottom: 0;
    fill: ${props => props.theme.dark_solid};
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

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
  }
`;
