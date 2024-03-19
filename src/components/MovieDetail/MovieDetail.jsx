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
  const { setMovieDetail, hoveredMovie, targetedMovie } =
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
          <h1>{targetedMovie.title}</h1>
          <span>Rating: {targetedMovie.vote_average.toFixed(1)}</span>
          <h5>Release Date: {targetedMovie.release_date}</h5>
          <ul className="genre_list">
            {targetedMovie.genre_ids.map((genreId) => (
              <li key={genreId}>{getGenreName(genreId)} </li>
            ))}
          </ul>

          <p>{targetedMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
