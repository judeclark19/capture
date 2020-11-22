import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//MAIN COMPONENT
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
        <DETAILS
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HEADLINE>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HEADLINE>
          <AWARDS>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </AWARDS>
          <SECONDARY_IMG>
            <img src={movie.secondaryImg} alt="secondary movie pic" />
          </SECONDARY_IMG>
        </DETAILS>
      )}
    </>
  );
}

//AWARD COMPONENT
const Award = ({ title, description }) => {
  return (
    <>
      <AWARD>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </AWARD>
    </>
  );
};

//STYLED COMPONENTS

const DETAILS = styled(motion.div)`
  color: white;
`;

const HEADLINE = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const AWARDS = styled.div`
  /* border: 1px dashed hotpink; */
  min-height: 80vh;
  display: flex;
  /* flex-direction: column; */
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AWARD = styled.div`
  /* border: 1px dashed white; */
  padding: 2rem;
  h3 {
    font-size: 2rem;
  }

  .line {
    width: 70%;
    background-color: #23d997;
    height: 0.5rem;
    margin-top: 1rem;
  }

  p {
    /* background-color: gray; */
    padding: 2rem 0rem;
  }
`;

const SECONDARY_IMG = styled.div`
  //nothing yet
  min-height: 50vh;
  img {
    width: 100%;
  }
`;

export default MovieDetail;
