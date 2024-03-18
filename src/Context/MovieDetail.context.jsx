import { createContext, useState } from "react";

export const MovieDetailContext = createContext({
  movieDetail: false,
  setMovieDetail: () => {},
});

export const MovieDetailProvider = ({ children }) => {
  const [movieDetail, setMovieDetail] = useState(false);
  const value = { movieDetail, setMovieDetail };

  return (
    <MovieDetailContext.Provider value={value}>
      {children}
    </MovieDetailContext.Provider>
  );
};
