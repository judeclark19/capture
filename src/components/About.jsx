import React from "react";
import { motion } from "framer-motion";
import { titleAnimation, photoAnimation, fade } from "../animation";

import { SectionDiv, DescriptionDiv, ImageDiv, HideDiv } from "../styles";
import home1 from "../img/home1.png";
import Wave from "./Wave";

function AboutUs() {
  //Motion "variants"

  return (
    <SectionDiv>
      <DescriptionDiv>
        <motion.div className="title">
          <HideDiv>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </HideDiv>
          <HideDiv>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </HideDiv>
          <HideDiv>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </HideDiv>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for your service needs. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nisi vel veritatis a necessitatibus
          architecto!
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </DescriptionDiv>
      <ImageDiv>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={home1}
          alt="a cameraman filming"
        />
      </ImageDiv>
      <Wave />
    </SectionDiv>
  );
}

export default AboutUs;
