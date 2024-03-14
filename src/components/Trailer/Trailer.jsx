import React from "react";
import "./Trailer.scss";
import {
  RiAddLine,
  RiPlayFill,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";

const Trailer = ({ videoKey, title, date }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&showinfo=0`;

  return (
    <div className="trailer_container">
      <div className="trailer">
        <iframe
          title="YouTube Video Player"
          width="100%"
          height="100%"
          src={youtubeUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div className="trailer_controls">
          {/* Add controls here */}
          <RiPlayFill className="trailer_play_icon" color="black" />
          <RiAddLine className="trailer_icon" color="white" />
          <RiThumbUpLine className="trailer_icon" color="white" />
          <RiThumbDownLine className="trailer_icon" color="white" />
          <h5>{title} </h5>
          <h6>Release Date: {date}</h6>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
