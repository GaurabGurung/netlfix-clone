import React, { useContext, useEffect, useState } from "react";
import "./Mylist.scss";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { selectMyList } from "../../redux/myList/myList.reducer";
import { MovieContext } from "../../Context/MovieDetail.context";
import TrailerControls from "../TrailerControls/TrailerControls";
import Trailer from "../Trailer/Trailer";
import MovieDetail from "../MovieDetail/MovieDetail";
const Mylist = () => {
  const mylist = useSelector(selectMyList);
  const isLargeRow = false;
  console.log(mylist);

  const { movieDetail } = useContext(MovieContext);

  const {
    showTrailer,
    setShowTrailer,
    hoveredMovie,
    setHoveredMovie,
    setTargetedMovie,
    targetedMovie,
    setHoveredShow,
    hoveredShow,
  } = useContext(MovieContext);

  const [trailerUrl, setTrailerUrl] = useState("");
  const [base_url, setBase_Url] = useState("");

  useEffect(() => {
    if (targetedMovie && targetedMovie.media_type === "tv") {
      setBase_Url("https://image.tmdb.org/t/p/original/");
    } else {
      setBase_Url("https://image.tmdb.org/t/p/original/");
    }
  }, [targetedMovie]);

  const fetchTrailer = async (mediaId) => {
    let url;
    if (targetedMovie.media_type === "tv") {
      url = `https://api.themoviedb.org/3/tv/${mediaId}/videos?language=en-US`;
    } else if (!targetedMovie.media_type) {
      url = `https://api.themoviedb.org/3/movie/${mediaId}/videos?language=en-US`;
    } else {
      throw new Error("Invalid media type");
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yzk3ZTQxNDdlMDM3MzM3YzdlMzYyMTAwZjIyODZmMiIsInN1YiI6IjY1ZWU3N2QzNjZhZTRkMDE2MjMxYzdkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rrmhy7B0ey_kzFtuJ6PVUfXpoI-g69qEshnt1pEl7qU",
      },
    };

    const response = await fetch(url, options);
    return response.json();
  };

  const handleMouseEnter = async (movie) => {
    const updatedMovie = { ...movie, date: movie.release_date };
    setHoveredMovie(movie);
    setTargetedMovie(movie);

    if (targetedMovie && targetedMovie.id) {
      try {
        const response = await fetchTrailer(targetedMovie.id);
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
    setTargetedMovie(null);
  };

  return (
    <div className="mylist_container">
      <h1>My List</h1>
      {mylist.length === 0 ? (
        <div className="empty_text">
          <h2>You haven't added any titles to your list yet</h2>
        </div>
      ) : (
        <div className="row__posters">
          {mylist.map(
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
                      alt={movie.title}
                    />
                    {hoveredMovie && hoveredMovie.id === movie.id && (
                      <div className="hover">
                        {showTrailer ? (
                          <Trailer
                            videoKey={trailerUrl}
                            title={hoveredMovie.title}
                            date={
                              targetedMovie.release_date ||
                              targetedMovie.first_air_date
                            }
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
                          media={movie}
                          date={`${
                            hoveredMovie.first_air_date ||
                            hoveredMovie.release_date
                          }`}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      )}
      {movieDetail && <MovieDetail />}
      <Footer />
    </div>
  );
};

export default Mylist;
