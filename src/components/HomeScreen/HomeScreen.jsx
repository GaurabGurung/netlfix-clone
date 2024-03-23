import React, { useContext, useEffect, useRef } from "react";
import "./HomeScreen.scss";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requestsMovies from "../../utils/Request_Movies";
import MovieDetail from "../MovieDetail/MovieDetail";
import { MovieContext } from "../../Context/MovieDetail.context";
import "./HomeScreen.scss";
import TvShowRow from "../TvShowRow/TvShowRow";
import requestsTvShows from "../../utils/Request_TvShows";
import Footer from "../Footer/Footer";

const HomeScreen = () => {
  // const isLargeRow = true;

  const { movieDetail } = useContext(MovieContext);
  const modalRef = useRef();

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
    <div ref={modalRef} className="homeScreen">
      <Banner isMovieBanner={true} />
      <div className="rows_container modalIsOpen">
        <Row title="Drama Movies" fetchUrl={requestsMovies.fetchDramaMovies} />

        <TvShowRow
          title="Trending TV Shows"
          fetchUrl={requestsTvShows.fetchTrendingTV}
        />

        <Row
          title="top Rated Movies"
          fetchUrl={requestsMovies.fetchTopRatedMovies}
        />
        <Row
          title="Thriller Movies"
          fetchUrl={requestsMovies.fetchThrillerMovies}
        />
        <TvShowRow title="TV Drama" fetchUrl={requestsTvShows.fetchDramaTV} />
        <Row
          title="Comedy Movies"
          fetchUrl={requestsMovies.fetchComedyMovies}
        />
        <Row
          title="Romantic Movies"
          fetchUrl={requestsMovies.fetchRomanceMovies}
        />
        <TvShowRow title="Kids Shows" fetchUrl={requestsTvShows.fetchKidsTV} />
        <Row
          title="Animation Movies"
          fetchUrl={requestsMovies.fetchAnimationMovies}
        />
        <TvShowRow
          title="Animation TV Shows"
          fetchUrl={requestsTvShows.fetchAnimationTV}
        />
        <Row title="War Movies" fetchUrl={requestsMovies.fetchWarMovies} />
        <Row
          title="Horror Movies"
          fetchUrl={requestsMovies.fetchHorrorMovies}
        />
        <Row title="Music Movies" fetchUrl={requestsMovies.fetchMusicMovies} />
        <Row
          title=" Documentaries"
          fetchUrl={requestsMovies.fetchDocumentaryMovies}
        />
        <TvShowRow
          title="Mystery Shows"
          fetchUrl={requestsTvShows.fetchMysteryTV}
        />

        <Row title="Crime Movies" fetchUrl={requestsMovies.fetchCrimeMovies} />
      </div>
      <Footer />
      {movieDetail && <MovieDetail />}
    </div>
  );
};

export default HomeScreen;
