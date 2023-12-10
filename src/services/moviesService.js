import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '3146fac2a7dcce2e95e0f76d4221aa50',
  include_adult: false,
};
const nullImage =
  'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendingMovies = async () => {
  return axios
    .get(`/trending/all/day`)
    .then(r =>
      r.data.results.map(({ id, title, poster_path }) => ({
        id,
        title,
        poster: `${IMAGE_URL}${poster_path}`,
      }))
    )
    .catch(error => {
      Notify.failure(error.message);
    });
};

export const getMoviesByName = async query => {
  return axios
    .get(`/search/movie?query=${query}`)
    .then(r =>
      r.data.results.map(({ id, title, poster_path }) => ({
        id,
        title,
        poster: poster_path ? `${IMAGE_URL}${poster_path}` : nullImage,
      }))
    )
    .catch(error => {
      Notify.failure(error.message);
    });
};

export const getMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?`)
    .then(
      ({
        data: {
          id,
          poster_path: poster,
          title,
          release_date: releaseYear,
          vote_average: userScore,
          overview,
          genres,
        },
      }) => ({
        id,
        poster: poster ? `${IMAGE_URL}${poster}` : nullImage,
        title,
        releaseYear: new Date(releaseYear).getFullYear(),
        userScore: Math.round(userScore * 10),
        overview,
        genres,
      })
    )
    .catch(error => {
      Notify.failure(error.message);
    });
};

export const getMovieCredits = movieId => {
  return axios
    .get(`/movie/${movieId}/credits`)
    .then(({ data: { cast } }) =>
      cast.map(({ id, name, character, profile_path: photo }) => ({
        id,
        name,
        character,
        photo: photo ? `${IMAGE_URL}${photo}` : nullImage,
      }))
    )
    .catch(error => {
      Notify.failure(error.message);
    });
};

export const getMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews`)
    .then(({ data: { results } }) =>
      results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }))
    )
    .catch(error => {
      Notify.failure(error.message);
    });
};
