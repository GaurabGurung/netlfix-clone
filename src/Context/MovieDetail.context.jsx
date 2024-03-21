import { createContext, useState } from "react";

export const MovieContext = createContext({
  movieDetail: false,
  setMovieDetail: () => {},
  showTrailer: false,
  setShowTrailer: () => {},
  hoveredMovie: null,
  setHoveredMovie: () => {},
  targetedMovie: {},
  setTargetedMovie: () => {},
  hoveredShow: null,
  setHoveredShow: () => {},
});

export const MovieProvider = ({ children }) => {
  const [movieDetail, setMovieDetail] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [targetedMovie, setTargetedMovie] = useState({});
  const [hoveredShow, setHoveredShow] = useState(null);

  const value = {
    movieDetail,
    setMovieDetail,
    showTrailer,
    setShowTrailer,
    setHoveredMovie,
    hoveredMovie,
    setTargetedMovie,
    targetedMovie,
    setHoveredShow,
    hoveredShow,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
