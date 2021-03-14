import styled from 'styled-components';
import { medias } from '../../styles/medias';

export const MovieContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${medias.mobile} {
    flex-direction: column;
  }
`;

export const PosterContainer = styled.div`
  width: calc(20%);
  @media ${medias.mobile} {
    width: calc(100%);
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  & div:first-child{
    font-weight: bold;
  }
  & > div {
    padding: 0.5rem;
  }

  width: calc(80%);
  @media ${medias.mobile} {
    width: calc(100%);
  }
`;