import React, { useContext, useEffect, useRef } from "react";
import "./Movies.scss";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requestsMovies from "../../utils/Request_Movies";
import MovieDetail from "../MovieDetail/MovieDetail";
import { MovieContext } from "../../Context/MovieDetail.context";
import Footer from "../Footer/Footer";

const Movies = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
      <Banner isMovieBanner={true} />
      <div className="rows_container modalIsOpen">
        <Row
          title="Adventure Movies "
          fetchUrl={requestsMovies.fetchAdventureMovies}
        />
        {/* <Row
          title="Sci-Fi Movies"
          fetchUrl={requestsMovies.fetchScienceFictionMovies}
        /> */}
        <Row title="top Rated" fetchUrl={requestsMovies.fetchTopRatedMovies} />
        <Row
          title="Thriller Movies"
          fetchUrl={requestsMovies.fetchThrillerMovies}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requestsMovies.fetchComedyMovies}
        />
        <Row
          title="Romantic Movies"
          fetchUrl={requestsMovies.fetchRomanceMovies}
        />
        <Row
          title="Animation Movies"
          fetchUrl={requestsMovies.fetchAnimationMovies}
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
        <Row title="Crime Movies" fetchUrl={requestsMovies.fetchCrimeMovies} />
        <Row title="Drama" fetchUrl={requestsMovies.fetchDramaMovies} />
      </div>
      {movieDetail && <MovieDetail />}
      <Footer />
    </div>
  );
};

export default Movies;
