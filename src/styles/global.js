import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    background-color: #222429;
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
`;
