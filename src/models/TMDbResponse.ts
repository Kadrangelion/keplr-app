import Film from './Film';

export default interface ITMDbFilmsResponse {
  page: number;
  total_page: number;
  total_results: number;
  results: Film[];
} 