import styled, { createGlobalStyle } from 'styled-components';
import { medias } from './medias';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family:'Roboto';
    font-size: 14px;
    @media ${medias.tablet} {
      font-size: 12px;
    }
    @media ${medias.mobile} {
      font-size: 12px;
    }
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    transition: background 1s, color 1s;
  }
`

export const PageContainer = styled.div`
  padding:2%;
  margin-left:auto;
  margin-right:auto;
  width:60%;
  @media ${medias.tablet} {
    width: 70%;
  }
  @media ${medias.mobile} {
    width: 80%;
  }
`;

export const Poster = styled.img`
  height: auto;
  width: 100%;
`;