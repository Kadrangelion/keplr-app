import axios from 'axios';

export function setup() {
  axios.defaults.baseURL = process.env.REACT_APP_TMDb_URL;

  axios.interceptors.request.use((config) => {
    // we add our api_key an language options on all our request to TMDb
    config.params={...config.params, api_key: process.env.REACT_APP_TMDb_API_KEY, language: 'fr-FR'};
    return config;
  }, (error) => {
    // Here we can define some global error message like some toast for 401 and all error types
    return Promise.reject(error);
  });
}
