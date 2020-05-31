import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    background-color: #222429;
  }

  body {
    font: 1.6rem 'Righteous', cursive;
    color: #fff;
    transition: font-size 200ms ease-in-out;
    background-color: ${props => props.theme.dark_solid};
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
