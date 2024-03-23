import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./Trailer.scss";
import { RiVolumeMuteLine, RiVolumeUpLine } from "@remixicon/react";
import { MovieContext } from "../../Context/MovieDetail.context";

const Trailer = ({ videoKey, title, date }) => {
  const [muted, setMuted] = useState(true);
  const { setVideoLink, targetedMovie } = useContext(MovieContext);

  const handleToggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;
  const youtubeLink = `https://www.youtube.com/watch?v=${videoKey}`;
  useEffect(() => {
    setVideoLink(youtubeLink);
  }, [youtubeLink, targetedMovie]);
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
