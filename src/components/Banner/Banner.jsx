import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../utils/axios";
import requests from "../../utils/Request";
import { RiInformationLine, RiPlayFill } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchPopularMovies);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(movie);
      return request;
    };
    fetchData();
  }, []);

  const handlePlayClick = () => {
    // Extract the YouTube trailer key from the movie object
    const trailerKey = movie?.videoKey; // Update this with your actual data structure
    if (trailerKey) {
      // Navigate to the YouTube trailer link
      navigate(`https://www.youtube.com/watch?v=${trailerKey}`);
    }
  };

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
        <h1 className="banner__description">
          {truncate(movie?.overview, 250)}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={handlePlayClick}>
            <RiPlayFill />
            Play
          </button>
          <button className="banner__button">
            <RiInformationLine />
            More Info
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom " />
    </header>
  );
};

export default Banner;
