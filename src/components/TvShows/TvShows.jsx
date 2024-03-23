import React, { useContext, useEffect } from "react";
import Nav from "../Nav/Nav.jsx";
import TvShowRow from "../TvShowRow/TvShowRow.jsx";
import requestsTvShows from "../../utils/Request_TvShows.js";
import "./TvShows.scss";
import Banner from "../Banner/Banner";
import MovieDetail from "../MovieDetail/MovieDetail.jsx";
import { MovieContext } from "../../Context/MovieDetail.context.jsx";
import Footer from "../Footer/Footer.jsx";

const TvShows = () => {
  const { movieDetail } = useContext(MovieContext);
  useEffect(() => {
    if (movieDetail) {
      document.documentElement.classList.add("freeze-background-home-screen");
    } else {
      document.documentElement.classList.remove(
        "freeze-background-home-screen"
      );
    }
  }, [movieDetail]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="TvShows_container">
      <Banner isMovieBanner={false} />
      <TvShowRow title="Trending" fetchUrl={requestsTvShows.fetchTrendingTV} />
      <TvShowRow
        title="Animation"
        fetchUrl={requestsTvShows.fetchAnimationTV}
      />
      <TvShowRow title="Comedy" fetchUrl={requestsTvShows.fetchComedyTV} />
      <TvShowRow title="Drama" fetchUrl={requestsTvShows.fetchDramaTV} />
      <TvShowRow title="Top Rated" fetchUrl={requestsTvShows.fetchTopRatedTV} />
      <TvShowRow title="Mystery" fetchUrl={requestsTvShows.fetchMysteryTV} />
      <TvShowRow title="Talk Shows" fetchUrl={requestsTvShows.fetchTalkTV} />
      <TvShowRow
        title="Documentary Shows"
        fetchUrl={requestsTvShows.fetchDocumentaryTV}
      />
      <TvShowRow title="Kids Shows" fetchUrl={requestsTvShows.fetchKidsTV} />
      <TvShowRow
        title="Sci-Fi"
        fetchUrl={requestsTvShows.fetchSciFiFantasyTV}
      />
      <TvShowRow
        title="War Politics"
        fetchUrl={requestsTvShows.fetchWarPoliticsTV}
      />
      <TvShowRow
        title="Family Shows"
        fetchUrl={requestsTvShows.fetchFamilyTV}
      />
      <TvShowRow
        title="Popular TV Shows"
        fetchUrl={requestsTvShows.fetchPopularTV}
      />
      {movieDetail && <MovieDetail />}
      <Footer />
    </div>
  );
};

export default TvShows;
