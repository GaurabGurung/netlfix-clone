import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../utils/axios";
import requests from "../../utils/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchPopularMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner_container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,

        backgroundPosition: "center center",
      }}
    >
      <div className="banner--fadetop " />
      <div className="banner__contents">
        <h1 className="banner__title"> {movie?.original_title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button"> My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 250)}
        </h1>
      </div>
      <div className="banner--fadeBottom " />
    </header>
  );
};

export default Banner;
