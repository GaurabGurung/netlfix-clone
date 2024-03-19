import React, { useEffect, useState, useRef, useContext } from "react";
import "./Row.scss";
import axios from "../../utils/axios";
import Trailer from "../Trailer/Trailer";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import TrailerControls from "../TrailerControls/TrailerControls";
import { MovieContext } from "../../Context/MovieDetail.context";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const { showTrailer, setShowTrailer, hoveredMovie, setHoveredMovie } =
    useContext(MovieContext);

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showDirection, setShowDirection] = useState(false);

  const listRef = useRef();
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
    const updatedMovie = { ...movie, date: movie.release_date };
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

  useEffect(() => {
    const handleWindowBlur = () => {
      handleMouseLeave();
    };
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  const handleDirection = (direction) => {
    const distance = listRef.current.offsetWidth;
    const moviesPerSlide = 6;
    const totalSlides = Math.ceil(movies.length / moviesPerSlide);
    let newPosition;

    if (direction === "left") {
      newPosition = sliderPosition - 1;
      if (newPosition < 0) {
        newPosition = totalSlides - 1;
      }
    } else {
      newPosition = sliderPosition + 1;
      if (newPosition >= totalSlides) {
        newPosition = 0;
      }
    }

    listRef.current.style.transition = "transform 0.5s ease-in-out";
    listRef.current.style.transform = `translateX(${
      -distance * newPosition
    }px)`;
    setSliderPosition(newPosition);
  };

  return (
    <div
      className="row_container"
      onMouseEnter={() => setShowDirection(true)}
      onMouseLeave={() => setShowDirection(false)}
    >
      <h2>{title}</h2>
      <div className="wrapper">
        {showDirection && (
          <>
            <button
              className={`left_btn `}
              onClick={() => handleDirection("left")}
            >
              <RiArrowLeftLine />
            </button>
            <button
              className="right_btn"
              onClick={() => handleDirection("right")}
            >
              <RiArrowRightLine />
            </button>
          </>
        )}
        <div className="row__posters" ref={listRef}>
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
                  <div className="movie_content">
                    <img
                      className={`row__poster ${
                        isLargeRow && "row__posterLarge"
                      }`}
                      src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt={movie.name}
                    />
                    {hoveredMovie && hoveredMovie.id === movie.id && (
                      <div className="hover">
                        {showTrailer ? (
                          <Trailer
                            videoKey={trailerUrl}
                            title={hoveredMovie.title}
                            date={hoveredMovie.release_date}
                          />
                        ) : (
                          <div className="image_video_container">
                            <img
                              className={`hovered_poster ${
                                isLargeRow && "row__posterLarge"
                              }`}
                              src={`${base_url}${
                                isLargeRow
                                  ? movie.poster_path
                                  : movie.backdrop_path
                              }`}
                              alt={movie.name}
                            />
                          </div>
                        )}
                        <TrailerControls
                          title={hoveredMovie.title}
                          videoKey={trailerUrl}
                          movie={movie}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Row;
