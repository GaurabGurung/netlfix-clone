import React, { useContext, useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../utils/axios";
import movieRequests from "../../utils/Request_Movies";
import tvShowsRequest from "../../utils/Request_TvShows";
import { RiInformationLine, RiPlayFill } from "@remixicon/react";
import { MovieContext } from "../../Context/MovieDetail.context";

const Banner = ({ isMovieBanner }) => {
  // Accept a prop to determine whether it's a movie or TV show banner
  const [media, setMedia] = useState(null); // Rename state variable to "media"
  const {
    setTargetedMovie,
    setMovieDetail,
    setShowTrailer,
    setHoveredMovie,
    setVideoLink,
    videoLink,
  } = useContext(MovieContext);

  const [video, setVideo] = useState("");

  const toggleDetailPopUp = () => {
    setMovieDetail(true);
    setShowTrailer(false);
    setHoveredMovie(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let randomMedia;
        let trailerKey = "";

        // Fetch data based on whether it's a movie or TV show banner
        const request = await axios.get(
          isMovieBanner
            ? movieRequests.fetchPopularMovies
            : tvShowsRequest.fetchPopularTV
        );

        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        randomMedia = request.data.results[randomIndex];

        // Fetch trailer key for the random media
        const apiKey = "8c97e4147e037337c7e362100f2286f2";
        const trailerResponse = await axios.get(
          `${isMovieBanner ? "movie" : "tv"}/${
            randomMedia.id
          }/videos?language=en-US&api_key=${apiKey}`
        );

        trailerKey = trailerResponse.data.results[0]?.key;

        // Check if trailer key exists
        while (!trailerKey) {
          // Refetch random media and trailer key
          const newIndex = Math.floor(
            Math.random() * request.data.results.length
          );
          randomMedia = request.data.results[newIndex];

          const newTrailerResponse = await axios.get(
            `${isMovieBanner ? "movie" : "tv"}/${
              randomMedia.id
            }/videos?language=en-US&api_key=${apiKey}`
          );

          trailerKey = newTrailerResponse.data.results[0]?.key;
        }

        setVideo(`https://www.youtube.com/watch?v=${trailerKey}`);
        setMedia(randomMedia);

        return request;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isMovieBanner]);

  const handlePlayClick = () => {
    if (video) {
      window.open(video, "_blank");
    }
  };

  const handleInfoClick = () => {
    setMovieDetail(true);
    setTargetedMovie(media);
    setVideoLink(video);
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  if (!media) return null;

  return (
    <header
      className="banner_container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${media?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner--fadetop " />
      <div className="banner__contents">
        <h1 className="banner__title">
          {isMovieBanner ? media.original_title : media.original_name}
        </h1>
        <h1 className="banner__description">{truncate(media.overview, 250)}</h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={handlePlayClick}>
            <RiPlayFill />
            Play
          </button>
          <div
            className="banner__button"
            onMouseEnter={() => setTargetedMovie(media)}
            onClick={() => handleInfoClick()}
          >
            <RiInformationLine />
            More Info
          </div>
        </div>
      </div>
      <div className="banner--fadeBottom " />
    </header>
  );
};

export default Banner;
