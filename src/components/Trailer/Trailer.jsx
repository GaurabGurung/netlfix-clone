import React from "react";
import "./Trailer.scss";
import TrailerControls from "../TrailerControls/TrailerControls";

const Trailer = ({ videoKey, title, date }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&showinfo=0`;

  return (
    <div className="trailer_container">
      <iframe
        title="YouTube Video Player"
        width="100%"
        height="100%"
        src={youtubeUrl}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
