import React from "react";
import "./Player.scss";

import video from "../../assets/video.mov";
import { useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";

const Player = () => {
  const navigate = useNavigate();
  return (
    <div className="player__container">
      <div className="player">
        <div className="back__icon">
          <RiArrowLeftLine
            onClick={() => navigate(-1)}
            size="2rem"
            color="gray"
          />
        </div>
        <video src={video} autoPlay loop controls />
      </div>
    </div>
  );
};

export default Player;
