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
        tittle="RomCom Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row tittle="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row tittle="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row
        tittle="Sci-Fi Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row tittle="top Rated" fetchUrl={requests.fetchTopRatedMovies} />
    </div>
  );
};

export default HomeScreen;
