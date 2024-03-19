import React, { useContext, useEffect, useRef } from "react";
import "./HomeScreen.scss";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../../utils/Request";
import MovieDetail from "../MovieDetail/MovieDetail";
import { MovieContext } from "../../Context/MovieDetail.context";
import "./HomeScreen.scss";

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

  return (
    <div ref={modalRef} className="homeScreen">
      <Nav />
      <Banner />
      <div className="rows_container modalIsOpen">
        <Row
          title="Adventure Movies "
          fetchUrl={requests.fetchAdventureMovies}
        />
        {/* <Row
          title="Sci-Fi Movies"
          fetchUrl={requests.fetchScienceFictionMovies}
        /> */}
        <Row title="top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Thriller Mzovies" fetchUrl={requests.fetchThrillerMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row
          title="Animation Movies"
          fetchUrl={requests.fetchAnimationMovies}
        />
        <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
        <Row
          title=" Documentaries"
          fetchUrl={requests.fetchDocumentaryMovies}
        />
        <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
        <Row title="Drama" fetchUrl={requests.fetchDramaMovies} />
      </div>
      {movieDetail && <MovieDetail />}
    </div>
  );
};

export default HomeScreen;
