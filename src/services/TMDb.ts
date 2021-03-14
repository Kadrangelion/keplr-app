import axios from 'axios';
import { ITMDbFilmsResponse, ITMDbFilmDetailResponse } from '../models';

export const getPopularFilms = () => {
  return axios.get<ITMDbFilmsResponse>('/movie/popular');
}

export const getSearchFilms = (query: string) => {
  return axios.get<ITMDbFilmsResponse>('/search/movie', { params: {query}});
}

export const getFilm = (id: string) => {
  return axios.get<ITMDbFilmDetailResponse>(`/movie/${id}`);
}