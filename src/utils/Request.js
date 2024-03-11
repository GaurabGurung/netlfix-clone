const tmdbAPI = `8c97e4147e037337c7e362100f2286f2`;

const requests = {
  fetchTopRatedMovies: `/movie/top_rated?api_key=${tmdbAPI}&language=en-US&page=1`,
  fetchTrendingMovies: `/movie//trending/movie/day?api_key=${tmdbAPI}&language=en-US&page=1`,
  fetchPopularMovies: `/movie/popular?api_key=${tmdbAPI}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=28`,
  fetchAdventureMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=12`,
  fetchAnimationMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=16`,
  fetchComedyMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=80`,
  fetchDocumentaryMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=99`,
  fetchDramaMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=18`,
  fetchFamilyMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=10751`,
  fetchFantasyMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=14`,
  fetchHistoryMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=36`,
  fetchHorrorMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=27`,
  fetchMusicMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=10402`,
  fetchMysteryMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=9648`,
  fetchRomanceMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=10749`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=878`,
  fetchThrillerMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=53`,
  fetchWarMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=10752`,
  fetchWesternMovies: `/discover/movie?api_key=${tmdbAPI}&with_genres=37`,
};

export default requests;
