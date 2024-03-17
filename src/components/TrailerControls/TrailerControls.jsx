import React from "react";
import "./TrailerControls.scss";
import {
  RiAddLine,
  RiPlayFill,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";

const TrailerControls = ({ title, date }) => {
  return (
    <div className="trailer_controls">
      <RiPlayFill className="trailer_play_icon" color="black" />
      <RiAddLine className="trailer_icon" color="white" />
      <RiThumbUpLine className="trailer_icon" color="white" />
      <RiThumbDownLine className="trailer_icon" color="white" />
      <h5>{title} </h5>
      <h6>Release Date: {date}</h6>
    </div>
  );
};

export default TrailerControls;
