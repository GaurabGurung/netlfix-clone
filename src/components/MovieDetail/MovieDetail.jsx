import React, { useContext, useEffect, useState } from "react";
import "./MovieDetail.scss";
import {
  RiAddLine,
  RiCheckLine,
  RiCloseLine,
  RiPlayFill,
  RiThumbUpLine,
} from "@remixicon/react";
import { MovieContext } from "../../Context/MovieDetail.context";
import { genres } from "../../utils/data/genre";
import { useDispatch, useSelector } from "react-redux";
import {
  addToMyList,
  removeFromMyList,
  selectMyList,
} from "../../redux/myList/myList.reducer";

const MovieDetail = () => {
  const [mediaIsSelected, setMediaIsSelected] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const { setMovieDetail, targetedMovie, videoLink } = useContext(MovieContext);

  const myListArray = useSelector(selectMyList);
  const dispatch = useDispatch();

  useEffect(() => {
    const isMediaInList = myListArray.find(
      (selectedMedia) => selectedMedia.id === targetedMovie.id
    );
    setMediaIsSelected(!!isMediaInList);
  }, [myListArray]);

  const handleAddToMyList = () => {
    setMediaIsSelected(true);
    dispatch(addToMyList(targetedMovie));
  };

  const handleRemoveFromMyList = () => {
    setMediaIsSelected(false);
    dispatch(removeFromMyList(targetedMovie));
  };

  const handlePlayClick = () => {
    if (videoLink) {
      window.open(videoLink, "_blank");
    }
  };

  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "unknown";
  };

  return (
    <div className="movieDetails_container">
      <div className="overlay" onClick={() => setMovieDetail(false)} />
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
            <div className="play_icon" onClick={handlePlayClick}>
              <RiPlayFill color="black" />
              <h2>Play</h2>
            </div>
            {mediaIsSelected ? (
              <RiCheckLine
                color="white"
                className="icon  "
                onClick={handleRemoveFromMyList}
              />
            ) : (
              <RiAddLine
                className="icon "
                color="white"
                onClick={handleAddToMyList}
              />
            )}
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
          <div className="genre_list">
            Genres :{" "}
            {targetedMovie.genre_ids.map((genreId) => (
              <h3 key={genreId}> {getGenreName(genreId)} </h3>
            ))}
          </div>

          <p>{targetedMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
