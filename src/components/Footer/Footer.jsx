import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tvshows" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
    { name: "Profile", link: "/profile" },
  ];

  return (
    <div className="footer_container">
      <div className="links_container">
        {links.map((link) => (
          <Link to={link.link} className="links" key={link.name}>
            <h2>{link.name}</h2>
          </Link>
        ))}
      </div>
      <h6>© Welcome To Maxflix</h6>
    </div>
  );
};

export default Footer;
