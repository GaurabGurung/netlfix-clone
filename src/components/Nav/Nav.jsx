import React from "react";
import "./Nav.scss";

import NetflixLogo from "../../assets/netlfix_logo.png";

const Nav = () => {
  return (
    <div className="nav__container nav_black">
      <div className="nav_content">
        <img className="nav_logo" src={NetflixLogo} alt="Netflix logo" />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
