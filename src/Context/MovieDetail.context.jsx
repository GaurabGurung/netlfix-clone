import { createContext, useState } from "react";

export const MovieContext = createContext({
  movieDetail: false,
  setMovieDetail: () => {},
  showTrailer: false,
  setShowTrailer: () => {},
  hoveredMovie: false,
  setHoveredMovie: () => {},
});

export const MovieProvider = ({ children }) => {
  const [movieDetail, setMovieDetail] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const value = {
    movieDetail,
    setMovieDetail,
    showTrailer,
    setShowTrailer,
    setHoveredMovie,
    hoveredMovie,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
