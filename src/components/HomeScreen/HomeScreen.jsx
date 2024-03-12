import React from "react";
import "./HomeScreen.scss";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../../utils/Request";

const HomeScreen = () => {
  // const isLargeRow = true;
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        tittle="Romantic Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row tittle="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row tittle="top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row
        tittle="Sci-Fi Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row tittle="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
      <Row tittle="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row tittle="War Movies" fetchUrl={requests.fetchWarMovies} />
      <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="Music Movies" fetchUrl={requests.fetchMusicMovies} />
      <Row tittle=" Documentaries" fetchUrl={requests.fetchDocumentaryMovies} />
      <Row tittle="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row tittle="Drama" fetchUrl={requests.fetchDramaMovies} />
    </div>
  );
};

export default HomeScreen;
