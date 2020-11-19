import React from "react";
import outdoorDinner from "../img/outdoorDinner.jpg";

function AboutUs() {
  return (
    <div>
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
          <img src={outdoorDinner} alt="my first image" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
