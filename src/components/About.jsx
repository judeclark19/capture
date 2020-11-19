import React from "react";
import { AboutUsDiv, DescriptionDiv, ImageDiv, HideDiv } from "../styles";
import home1 from "../img/home1.png";

function AboutUs() {
  return (
    <AboutUsDiv>
      <DescriptionDiv>
        <div className="title">
          <HideDiv>
            <h2>We work to make</h2>
          </HideDiv>
          <HideDiv>
            <h2>
              your <span>dreams</span>
            </h2>
          </HideDiv>
          <HideDiv>
            <h2>come true.</h2>
          </HideDiv>
        </div>
        <p>
          Contact us for your service needs. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nisi vel veritatis a necessitatibus
          architecto!
        </p>
        <button>Contact Us</button>
      </DescriptionDiv>
      <ImageDiv>
        <img src={home1} alt="a cameraman filming" />
      </ImageDiv>
    </AboutUsDiv>
  );
}

export default AboutUs;
