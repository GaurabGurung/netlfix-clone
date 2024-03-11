import React from "react";
import "./HomeScreen.scss";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
    </div>
  );
};

export default HomeScreen;
