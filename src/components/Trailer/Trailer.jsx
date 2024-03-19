import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Trailer.scss";
import TrailerControls from "../TrailerControls/TrailerControls";
import { RiVolumeMuteLine, RiVolumeUpLine } from "@remixicon/react";

const Trailer = ({ videoKey, title, date }) => {
  const [muted, setMuted] = useState(true);

  const handleToggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;

  return (
    <div className="trailer_container">
      <ReactPlayer
        url={youtubeUrl}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
        muted={muted}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1, // Hide YouTube logo
              controls: 0, // Hide native player controls
              showinfo: 0, // Hide video title and player actions
              title: 0, // Hide video title
            },
          },
        }}
      />
      <div className="mute_button" onClick={handleToggleMute}>
        {muted ? (
          <RiVolumeMuteLine color="white" />
        ) : (
          <RiVolumeUpLine color="white" />
        )}
      </div>
    </div>
  );
};

export default Trailer;
