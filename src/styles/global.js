import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family:'Roboto';
    background: ${({ theme }) => theme.body};
    transition: background 1s;
  }
`