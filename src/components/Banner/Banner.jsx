import React, { useContext, useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../utils/axios";
import requests from "../../utils/Request";
import { RiInformationLine, RiPlayFill } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../Context/MovieDetail.context";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const { setTargetedMovie, setMovieDetail } = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchPopularMovies);
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        const randomMovie = request.data.results[randomIndex];
        setMovie(randomMovie);

        // Fetch trailer key for the random movie
        const apiKey = "8c97e4147e037337c7e362100f2286f2"; // Replace "YOUR_API_KEY" with your actual TMDB API key
        const trailerResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?language=en-US&api_key=${apiKey}`
        );
        const trailerKey = trailerResponse.data.results[0]?.key;
        randomMovie.videoKey = trailerKey; // Set the trailer key in the movie object

        return request;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handlePlayClick = () => {
    const trailerKey = movie?.videoKey;
    if (trailerKey) {
      window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank");
    }
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  if (!movie) return null; // Return null if movie is not fetched yet

  return (
    <header
      className="banner_container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner--fadetop " />
      <div className="banner__contents">
        <h1 className="banner__title"> {movie.original_title}</h1>
        <h1 className="banner__description">{truncate(movie.overview, 250)}</h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={handlePlayClick}>
            <RiPlayFill />
            Play
          </button>
          <button
            className="banner__button"
            onMouseEnter={() => setTargetedMovie(movie)}
            onMouseLeave={() => setTargetedMovie(false)}
            onClick={() => setMovieDetail(true)}
          >
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
