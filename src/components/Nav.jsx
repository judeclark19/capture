import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NAV>
      <h1>
        <a href="#" id="logo">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
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
`;

export default Nav;
