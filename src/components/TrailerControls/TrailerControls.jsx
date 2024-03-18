import React, { useContext, useState } from "react";
import "./TrailerControls.scss";
import {
  RiAddLine,
  RiPlayFill,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import MovieDetail from "../MovieDetail/MovieDetail";
import { MovieDetailContext } from "../../Context/MovieDetail.context";

const TrailerControls = ({ title, date, videoKey }) => {
  const { movieDetail, setMovieDetail } = useContext(MovieDetailContext);

  const handlePlayClick = () => {
    if (videoKey) {
      window.open(`https://www.youtube.com/watch?v=${videoKey}`, "_blank");
    }
  };

  const toggleDetailPopUp = () => setMovieDetail(true);

  const handleWindowBlur = () => {
    window.removeEventListener("blur", handleWindowBlur);
    // Simulate mouse leave event to hide trailer and reset state
    const event = new Event("mouseleave");
    document.dispatchEvent(event);
  };

  return (
    <>
      <div className="trailer_controls">
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
        <h5>{title} </h5>
        <h6>Release Date: {date}</h6>
      </div>
      {movieDetail && <MovieDetail />}
    </>
  );
};

export default TrailerControls;
