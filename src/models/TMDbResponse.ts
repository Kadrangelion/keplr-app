import Film from './Film';

export interface ITMDbFilmsResponse {
  page: number;
  total_page: number;
  total_results: number;
  results: Film[];
}

export interface ITMDbFilmDetailResponse {
  adult: boolean;
  backdrop_path: string;
  belong_to_collection: object;
  budget: number;
  genre_ids: object[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: object[];
  production_countries: object[];
  release_date: string;
  revenu: number;
  runtime: number;
  spoken_languages: object[];
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
} 