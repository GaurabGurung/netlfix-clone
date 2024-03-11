import React, { useEffect, useState } from "react";
import "./Nav.scss";
import MaxflixLogo from "../../assets/maxflix.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav__container ${show && "nav_black"}`}>
      <div className="nav_content">
        <img className="nav_logo" src={MaxflixLogo} alt="Netflix logo" />
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
