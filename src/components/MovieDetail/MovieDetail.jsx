import React, { useContext } from "react";
import "./MovieDetail.scss";
import {
  RiAddLine,
  RiCloseLine,
  RiPlayFill,
  RiThumbUpLine,
} from "@remixicon/react";
import { MovieContext } from "../../Context/MovieDetail.context";
import { genres } from "../../utils/data/genre";

const MovieDetail = () => {
  const { setMovieDetail, hoveredMovie, targetedMovie, hoveredShow } =
    useContext(MovieContext);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "unknown";
  };

  return (
    <div
      className="movieDetails_container"
      onClick={() => setMovieDetail(false)}
    >
      <RiCloseLine
        color="white"
        className="close_icon"
        onClick={() => setMovieDetail(false)}
      />
      <div className="movie_popup">
        <div
          className="poster"
          style={{
            backgroundImage: `url(${base_url}${targetedMovie.backdrop_path})`,
          }}
        >
          <div className="icons">
            <div className="play_icon">
              <RiPlayFill color="black" />
              <h2>Play</h2>
            </div>
            <div className="icon">
              <RiAddLine color="white" />
            </div>
            <div className="icon">
              <RiThumbUpLine color="white" />
            </div>
          </div>
          <div className="banner--fadeBottom " />
        </div>
        <div className="movie_details">
          <h1>
            {`${targetedMovie.name || targetedMovie.title}`}{" "}
            <span>
              {targetedMovie.release_date
                ? new Date(targetedMovie.release_date).getFullYear()
                : targetedMovie.first_air_date
                ? new Date(targetedMovie.first_air_date).getFullYear()
                : "Unknown"}
            </span>
            <span className="quality">HD</span>
          </h1>
          <span>Rating: {targetedMovie.vote_average.toFixed(1)}</span>
          <h3 className="genre_list">
            Genres :{" "}
            {targetedMovie.genre_ids.map((genreId) => (
              <h3 key={genreId}> {getGenreName(genreId)} </h3>
            ))}
          </h3>

          <p>{targetedMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
