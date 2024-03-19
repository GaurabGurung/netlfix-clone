import React, { useContext, useState } from "react";
import "./TrailerControls.scss";
import {
  RiAddLine,
  RiInfoI,
  RiPlayFill,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import MovieDetail from "../MovieDetail/MovieDetail";
import { MovieContext } from "../../Context/MovieDetail.context";

const TrailerControls = ({ title, date, videoKey, movie }) => {
  const { movieDetail, setMovieDetail, setShowTrailer, setHoveredMovie } =
    useContext(MovieContext);

  const handlePlayClick = () => {
    // setShowTrailer(false);
    if (videoKey) {
      window.open(`https://www.youtube.com/watch?v=${videoKey}`, "_blank");
    }
  };

  const toggleDetailPopUp = () => {
    setMovieDetail(true);
    setShowTrailer(false);
    setHoveredMovie(null);
  };

  const handleWindowBlur = () => {
    window.removeEventListener("blur", handleWindowBlur);
    // Simulate mouse leave event to hide trailer and reset state
    const event = new Event("mouseleave");
    document.dispatchEvent(event);
  };

  return (
    <>
      <div className="trailer_controls">
        <div className="icons">
          <RiPlayFill
            className="trailer_play_icon"
            color="black"
            onClick={handlePlayClick}
          />
          <RiAddLine className="trailer_icon" color="white" />
          <RiThumbUpLine className="trailer_icon" color="white" />

          <RiThumbDownLine
            className="trailer_icon"
            color="white"
            onClick={toggleDetailPopUp}
          />
          <RiInfoI
            className="trailer_icon left"
            color="white"
            onClick={toggleDetailPopUp}
          />
        </div>
        <div className="info">
          <h5>{title} </h5>
          <h6>Release Date: {date}</h6>
        </div>
      </div>
    </>
  );
};

export default TrailerControls;
