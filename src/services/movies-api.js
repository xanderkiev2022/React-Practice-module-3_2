import axios from 'axios';

const API_KEY = '6f3a72a470b06bab99f8d69f54b4e2d3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchMovies = page => {
  return axios('trending/all/day', {
    params: { api_key: API_KEY, page },
  });
};
