import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    // console.log(setMovies);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <DETAILS>
          <HEADLINE>{movie.title}</HEADLINE>
          <img src={movie.mainImg} alt={movie.title} />
        </DETAILS>
      )}
    </>
  );
}

const DETAILS = styled.div`
  color: red;
`;

const HEADLINE = styled.div`
  color: blue;
`;

export default MovieDetail;
