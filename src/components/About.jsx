import React from "react";
import styled from "styled-components";
import home1 from "../img/home1.png";

function AboutUs() {
  return (
    <AboutUsDiv>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
        </div>
        <p>
          Contact us for your service needs. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nisi vel veritatis a necessitatibus
          architecto!
        </p>
        <button>Contact Us</button>
        <div className="image">
          <img src={home1} alt="a cameraman filming" />
        </div>
      </div>
    </AboutUsDiv>
  );
}

//Styled Component
const AboutUsDiv = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 5rem 10rem;
`;

export default AboutUs;
