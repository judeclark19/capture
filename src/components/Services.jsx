import React from "react";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

import { SectionDiv, DescriptionDiv, ImageDiv, HideDiv } from "../styles";

import home2 from "../img/home2.png";

//Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

function Services() {
  const [element, controls] = useScroll();
  return (
    <ServicesDiv variants={fade} animate={controls} ref={element}>
      <DescriptionDiv>
        <h2>
          High <span>quality</span> services
        </h2>
        <CARDS>
          <CARD>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CARD>
          <CARD>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CARD>
          <CARD>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CARD>
          <CARD>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CARD>
        </CARDS>
      </DescriptionDiv>
      <ImageDiv>
        <img src={home2} alt="film camera" />
      </ImageDiv>
    </ServicesDiv>
  );
}

const ServicesDiv = styled(SectionDiv)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const CARDS = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CARD = styled.div`
  /* border: 1px dashed white; */
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default Services;
