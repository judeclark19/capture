import React from "react";
import home1 from "../img/home1.png";

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
          <img src={home1} alt="guy holding camera" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
