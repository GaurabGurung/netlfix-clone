import React, { useContext, useEffect, useState } from "react";
import "./TrailerControls.scss";
import {
  RiAddLine,
  RiCheckLine,
  RiInfoI,
  RiPlayFill,
  RiThumbDownLine,
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

const TrailerControls = ({ media }) => {
  const [mediaIsSelected, setMediaIsSelected] = useState(false);
  const {
    setMovieDetail,
    setShowTrailer,
    setHoveredMovie,
    targetedMovie,
    videoLink,
  } = useContext(MovieContext);

  const dispatch = useDispatch();
  const myListArray = useSelector(selectMyList);

  useEffect(() => {
    const isMediaInList = myListArray.find(
      (selectedMedia) => selectedMedia.id === media.id
    );
    setMediaIsSelected(!!isMediaInList);
  }, [myListArray]);

  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : "unknown";
  };

  const handleAddToMyList = () => {
    setMediaIsSelected(true);
    dispatch(addToMyList(media));
  };

  const handleRemoveFromMyList = () => {
    setMediaIsSelected(false);
    dispatch(removeFromMyList(media));
  };

  const handlePlayClick = () => {
    if (videoLink) {
      window.open(videoLink, "_blank");
    }
  };

  const toggleDetailPopUp = () => {
    setMovieDetail(true);
    setShowTrailer(false);
    setHoveredMovie(null);
  };

  const handleWindowBlur = () => {
    window.removeEventListener("blur", handleWindowBlur);
    const event = new Event("mouseleave");
    document.dispatchEvent(event);
  };

  return (
    <div className="trailer_controls">
      <div className="icons">
        <RiPlayFill
          className="trailer_play_icon"
          color="black"
          onClick={handlePlayClick}
        />

        {mediaIsSelected ? (
          <RiCheckLine
            color="black"
            className="trailer_icon added_icon "
            onClick={handleRemoveFromMyList}
          />
        ) : (
          <RiAddLine
            className="trailer_icon "
            color="white"
            onClick={handleAddToMyList}
          />
        )}
        <RiThumbUpLine className="trailer_icon" color="white" />
        <RiThumbDownLine className="trailer_icon" color="white" />
        <RiInfoI
          className="trailer_icon left"
          color="white"
          onClick={toggleDetailPopUp}
        />
      </div>
      <div className="info">
        <h5>{targetedMovie.title || targetedMovie.name}</h5>
        <h5 className="genre_list">
          {targetedMovie.genre_ids.map((genreId) => (
            <p key={genreId}> {getGenreName(genreId)} </p>
          ))}
        </h5>
      </div>
    </div>
  );
};

export default TrailerControls;
