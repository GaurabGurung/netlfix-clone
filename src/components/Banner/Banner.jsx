// Inside your Banner component
import React, { useContext, useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../utils/axios";
import movieRequests from "../../utils/Request_Movies";
import tvShowsRequest from "../../utils/Request_TvShows";
import { RiInformationLine, RiPlayFill } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../Context/MovieDetail.context";

const Banner = ({ isMovieBanner }) => {
  // Accept a prop to determine whether it's a movie or TV show banner
  const [media, setMedia] = useState(null); // Rename state variable to "media"
  const { setTargetedMovie, setMovieDetail } = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data based on whether it's a movie or TV show banner
        const request = await axios.get(
          isMovieBanner
            ? movieRequests.fetchPopularMovies
            : tvShowsRequest.fetchPopularTV
        );
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        const randomMedia = request.data.results[randomIndex];
        setMedia(randomMedia);

        // Fetch trailer key for the random media
        const apiKey = "8c97e4147e037337c7e362100f2286f2";
        const trailerResponse = await axios.get(
          `https://api.themoviedb.org/3/${isMovieBanner ? "movie" : "tv"}/${
            randomMedia.id
          }/videos?language=en-US&api_key=${apiKey}`
        );
        const trailerKey = trailerResponse.data.results[0]?.key;
        randomMedia.videoKey = trailerKey;

        return request;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [isMovieBanner]); // Trigger useEffect when isMovieBanner changes

  const handlePlayClick = () => {
    const trailerKey = media?.videoKey;
    if (trailerKey) {
      window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank");
    }
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  if (!media) return null; // Return null if media is not fetched yet

  return (
    <header
      className="banner_container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${media.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner--fadetop " />
      <div className="banner__contents">
        <h1 className="banner__title">
          {" "}
          {isMovieBanner ? media.original_title : media.original_name}
        </h1>
        <h1 className="banner__description">{truncate(media.overview, 250)}</h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={handlePlayClick}>
            <RiPlayFill />
            Play
          </button>
          <button
            className="banner__button"
            onMouseEnter={() => setTargetedMovie(media)}
            onMouseLeave={() => setTargetedMovie(false)}
            onClick={() => setMovieDetail(true)}
          >
            <RiInformationLine />
            More Info
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom " />
    </header>
  );
};

export default Banner;
