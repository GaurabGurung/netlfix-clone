import React, { useContext } from "react";
import "./MovieDetail.scss";
import { RiCloseLine } from "@remixicon/react";
import { MovieContext } from "../../Context/MovieDetail.context";

const MovieDetail = () => {
  const { setMovieDetail } = useContext(MovieContext);

  return (
    <div className="movieDetails_container">
      <RiCloseLine
        color="white"
        className="close_icon"
        onClick={() => setMovieDetail(false)}
      />
      <div className="movie_popup">
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
      </div>
    </div>
  );
};

export default MovieDetail;
