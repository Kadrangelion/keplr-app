import axios from 'axios';

export function setup() {
  axios.defaults.baseURL = process.env.REACT_APP_TMDb_URL;

  axios.interceptors.request.use((config) => {
    config.params={...config.params, api_key: process.env.REACT_APP_TMDb_API_KEY, language: 'fr_FR'};
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
}
