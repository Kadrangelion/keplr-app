import axios from 'axios';
import { ITMDbFilmsResponse } from '../models';

export const getPopularFilms = () => {
  return axios.get<ITMDbFilmsResponse>('/movie/popular');
}

export const getSearchFilms = (query: string) => {
  return axios.get<ITMDbFilmsResponse>('/search/movie', { params: {query}});
}

export const getFilm = (id: number) => {
  return axios.get(`/movie/${id}`);
}