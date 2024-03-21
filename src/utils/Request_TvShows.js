const tmdbAPI = "8c97e4147e037337c7e362100f2286f2";

const requestsTvShows = {
  fetchTopRatedTV: `/tv/top_rated?api_key=${tmdbAPI}&language=en-US&page=1`,
  fetchTrendingTV: `/trending/tv/day?api_key=${tmdbAPI}`,
  fetchPopularTV: `/tv/popular?api_key=${tmdbAPI}&language=en-US&page=1`,
  fetchActionTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10759`,
  fetchAdventureTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10759`,
  fetchAnimationTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=16`,
  fetchComedyTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=35`,
  fetchCrimeTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=80`,
  fetchDocumentaryTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=99`,
  fetchDramaTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=18`,
  fetchFamilyTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10751`,
  fetchKidsTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10762`,
  fetchMysteryTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=9648`,
  fetchNewsTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10763`,
  fetchRealityTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10764`,
  fetchSciFiFantasyTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10765`,
  fetchSoapTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10766`,
  fetchTalkTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10767`,
  fetchWarPoliticsTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=10768`,
  fetchWesternTV: `/discover/tv?api_key=${tmdbAPI}&with_genres=37`,
};

export default requestsTvShows;
