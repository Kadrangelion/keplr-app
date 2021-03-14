import styled from 'styled-components';
import { medias } from '../../styles/medias';
import { Poster } from '../../styles/global';

export const FilmCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
	flex-wrap: wrap;
	margin-left: -5px;
`;

export const Tooltip = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;

  bottom: 3px;
  width: calc(100% - 20px);
  height: calc(100% - 13px);
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;

  font-weight: bold;
  z-index: 2;
  cursor: pointer;
  
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s;
`;

export const FilmCard = styled.div`
  position: relative;
  margin-left: 10px;
  margin-top: 10px;

  width: calc(20% - 10px);
  @media ${medias.tablet} {
    width: calc(25% - 10px);
  }
  @media ${medias.mobile} {
    width: calc(50% - 10px);
  }

  & ${Tooltip}:hover,
  & ${Poster}:hover + ${Tooltip} {
    visibility: visible;
    color: #000;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;