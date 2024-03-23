import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useCallback,
} from "react";
import "./TvShowRow.scss";
import axios from "../../utils/axios.js";
import Trailer from "../Trailer/Trailer.jsx";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import TrailerControls from "../TrailerControls/TrailerControls";
import { MovieContext } from "../../Context/MovieDetail.context";

const TvShowRow = ({ title, fetchUrl, isLargeRow = false }) => {
  const {
    showTrailer,
    setShowTrailer,
    hoveredShow,
    setHoveredShow,
    setTargetedMovie,
    targetedMovie,
  } = useContext(MovieContext);

  const [shows, setShows] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showDirection, setShowDirection] = useState(false);

  const listRef = useRef();
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setShows(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const fetchTrailer = async (showId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yzk3ZTQxNDdlMDM3MzM3YzdlMzYyMTAwZjIyODZmMiIsInN1YiI6IjY1ZWU3N2QzNjZhZTRkMDE2MjMxYzdkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rrmhy7B0ey_kzFtuJ6PVUfXpoI-g69qEshnt1pEl7qU",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${showId}/videos?language=en-US`,
      options
    );
    return response.json();
  };

  const handleMouseEnter = useCallback(
    async (show) => {
      const updatedShow = { ...show, date: show.first_air_date };
      setHoveredShow(show);
      setTargetedMovie(show);

      if (show && show.id) {
        try {
          const response = await fetchTrailer(show.id);
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
    },
    [setHoveredShow, setTargetedMovie, setShowTrailer]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredShow(null);
    setTrailerUrl("");
    setShowTrailer(false);
  }, [setHoveredShow, setShowTrailer]);

  useEffect(() => {
    const handleWindowBlur = () => {
      handleMouseLeave();
    };
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [handleMouseLeave]);

  const handleDirection = (direction) => {
    const distance = listRef.current.offsetWidth;
    const showsPerSlide = 6;
    const totalSlides = Math.ceil(shows.length / showsPerSlide);
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
      className="tv_show_row_container"
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
          {shows.map(
            (show) =>
              ((isLargeRow && show.poster_path) ||
                (!isLargeRow && show.backdrop_path)) && (
                <div
                  key={show.id}
                  className="row__poster_wrapper"
                  onMouseEnter={() => handleMouseEnter(show)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="show_content">
                    <img
                      className={`row__poster ${
                        isLargeRow && "row__posterLarge"
                      }`}
                      src={`${base_url}${
                        isLargeRow ? show.poster_path : show.backdrop_path
                      }`}
                      alt={show.name}
                    />
                    {hoveredShow && hoveredShow.id === show.id && (
                      <div className="hover">
                        {showTrailer ? (
                          <Trailer
                            videoKey={trailerUrl}
                            title={hoveredShow.title}
                            date={hoveredShow.first_air_date}
                          />
                        ) : (
                          <div className="image_video_container">
                            <img
                              className={`hovered_poster ${
                                isLargeRow && "row__posterLarge"
                              }`}
                              src={`${base_url}${
                                isLargeRow
                                  ? show.poster_path
                                  : show.backdrop_path
                              }`}
                              alt={show.name}
                            />
                          </div>
                        )}
                        <TrailerControls
                          title={hoveredShow.name}
                          videoKey={trailerUrl}
                          date={show.first_air_date}
                          media={show}
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

export default TvShowRow;
