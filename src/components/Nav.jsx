import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

  return (
    <NAV>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <LINE
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <LINE
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <LINE
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </NAV>
  );
}

const NAV = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  h1 {
    /* font-size: 1.5rem; */
    font-family: "Lobster Two", cursive;
    font-weight: lighter;
  }

  #logo {
    font-size: 2rem;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    /* padding: 2rem 0rem; */
    padding: 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }

    li {
      padding: 0;
    }

    #logo {
      display: inline-block;
      margin: 1rem;
    }
  }
`;

const LINE = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;

  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
