import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family:'Roboto';
  }
  body {
    background: ${({ theme }) => theme.body};
    transition: background 1s;
  }
`