import React, { useEffect, useState } from "react";
import "./Row.scss";
import axios from "../../utils/axios";
import Trailer from "../Trailer/Trailer";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const fetchTrailer = async (movieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yzk3ZTQxNDdlMDM3MzM3YzdlMzYyMTAwZjIyODZmMiIsInN1YiI6IjY1ZWU3N2QzNjZhZTRkMDE2MjMxYzdkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rrmhy7B0ey_kzFtuJ6PVUfXpoI-g69qEshnt1pEl7qU",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    return response.json();
  };

  const handleMouseEnter = async (movie) => {
    setHoveredMovie(movie);
    if (movie && movie.id) {
      try {
        const response = await fetchTrailer(movie.id);
        if (response && response.results && response.results.length > 0) {
          const trailerKey = response.results[0].key;
          setTrailerUrl(trailerKey);
          setTimeout(() => {
            setShowTrailer(true);
          }, 1200);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    }
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
    setTrailerUrl("");
    setShowTrailer(false);
  };

  return (
    <div className="row_container">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div
                key={movie.id}
                className="row__poster_wrapper"
                onMouseEnter={() => handleMouseEnter(movie)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                {hoveredMovie &&
                  hoveredMovie.id === movie.id &&
                  showTrailer && (
                    <Trailer
                      videoKey={trailerUrl}
                      title={movie.title}
                      date={movie.release_date}
                    />
                  )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Row;
