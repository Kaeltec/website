import { createGlobalStyle } from 'styled-components';

import platonicaFont from '../assets/fonts/platonica.otf';

import '../assets/css/normalize.css';
import '../assets/css/styles.css';

export default createGlobalStyle`
  @font-face {
    font-family: 'Platonica';
    src: url(${platonicaFont});
  }

  html {
    background-color: #313339;
  }

  body {
    font: 1.6rem 'Righteous', cursive;
    color: #fff;

    transition: font-size 200ms ease-in-out;
    background-color: ${props => props.theme.dark};
  }

  body,
  &.scroll {
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.grey};
      border-radius: 6px;
    }

    &::-webkit-scrollbar {
      width: 8px;
      margin: 3px;
      padding: 10px;
    }
  }

  a,
  button {
    color: #fff;
  }
`;
