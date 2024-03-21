import React, { useEffect, useState } from "react";
import "./Nav.scss";
import MaxflixLogo from "../../assets/maxflix.png";
import { Link } from "react-router-dom";
import { RiSearchLine } from "@remixicon/react";
import profileLogo from "../../assets/profile.jpg";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tvshows" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav__container ${show && "nav_black"}`}>
      <div className="nav_content">
        <Link to="/">
          <img className="nav_logo" src={MaxflixLogo} alt="Netflix logo" />
        </Link>
        {/* <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix avatar"
        /> */}
        <ul className="links">
          {links.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link} className="link">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="search__container">
          <div className={`search ${showSearch ? "show_search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <RiSearchLine color="white" className="searchIcon" />
            </button>

            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
        </div>
        {/* <button className="logout__btn">Log Out</button> */}
        <Link to="/profile">
          <img src={profileLogo} alt="" className="profile_icon" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
