import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../utils/axios";
import requests from "../../utils/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner_container"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url("https://playbackonline.ca/wp/wp-content/uploads/2020/05/Screen-Shot-2020-05-04-at-1.41.10-PM.png)`,
        backgroundColor: "black",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title"> Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button"> My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description This is a test description This is a test
          description This is a test descriptionThis is a test description This
          is a test descriptionThis is a test description This is a test This is
          a test description This is a test description descriptionThis is a
          test description This is a test descriptionThisThis is a test
          description This is a test description is a test description This is a
          test descriptionThis is a test description This is a test
          descriptionThis is a test description This is a test descriptionThis
          is a test description This is a test descriptionThis is a test
          description This is a test descriptionThis is a test description This
          is a test descriptionThis is a test description This is a test
          descriptionThis is a test description This is a test descriptionThis
          is a test description This is a test descriptionThis is a test
          description This is a test descriptionThis is a test description This
          is a test descriptionThis is a test description This is a test
          descriptionThis is a test description This is a test description`,
            350
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
