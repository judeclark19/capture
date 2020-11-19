import React from "react";
import styled from "styled-components";
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

//Styled Component
const AboutUsDiv = styled.div`
  min-height: 90vh;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 5rem 10rem;
`;

const DescriptionDiv = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`;

const ImageDiv = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const HideDiv = styled.div`
  overflow: hidden;
`;

export default AboutUs;
