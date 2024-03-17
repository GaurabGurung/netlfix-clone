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
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row
        title="Sci-Fi Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
      <Row title=" Documentaries" fetchUrl={requests.fetchDocumentaryMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Drama" fetchUrl={requests.fetchDramaMovies} />
    </div>
  );
};

export default HomeScreen;
