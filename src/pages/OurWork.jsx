import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//Images
import athlete from "../img/athlete.png";
import theracer from "../img/theracer.png";
import goodtimes from "../img/goodtimes.png";

function OurWork() {
  return (
    <WORK
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <MOVIE>
        <h2>Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="Athlete" />
        </Link>
      </MOVIE>
      <MOVIE>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="The Racer" />
        </Link>
      </MOVIE>
      <MOVIE>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </MOVIE>
    </WORK>
  );
}

const WORK = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const MOVIE = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
