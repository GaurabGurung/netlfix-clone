require("dotenv").config();

// const tmdbAPI = process.env.REACT_APP_TMDB_API_KEY;

const tmdbAPI = "8c97e4147e037337c7e362100f2286f2";
const requests = {
  fetchTrending: `/trending/all/week?tmdbAPI=${tmdbAPI}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?tmdbAPI=${tmdbAPI}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?tmdbAPI=${tmdbAPI}&with_genres=28`,
  fetchActionMovies: `/discover/movie?tmdbAPI=${tmdbAPI}&with_genres=28`,
  fetchMovies: `/discover/movie?tmdbAPI=${tmdbAPI}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?tmdbAPI=${tmdbAPI}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?tmdbAPI=${tmdbAPI}&with_genres=10749`,
  fetchDocumentariesMovies: `/discover/movie?tmdbAPI=${tmdbAPI}&with_genres=99`,
};

export default requests;
