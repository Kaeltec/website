import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    font: 1.6rem 'Righteous', cursive;
    color: #fff;
    transition: font-size 200ms ease-in-out;
    background-color: ${props => props.theme.dark};
  }

  body,
  .scroll {
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.grey};
    }

    &::-webkit-scrollbar {
      width: 8px;
      margin: 3px;
      padding: 10px;
      background-color: ${props => props.theme.grey_solid};
    }
  }

  a,
  button {
    color: #fff;
  }

  .padding {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 50%;
    }

    .padding {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
  
  @media (max-width: 612px) {
    html {
      font-size: 40%;
    }

    .padding {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media (max-width: 306px) {
    html {
      font-size: 30%;
    }

    .padding {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
