import React from "react";
import styled from "styled-components";
import ScrollToTop from "../components/ScrollToTop";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

function ContactUs() {
  return (
    <CONTACT
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <ScrollToTop />
      <TITLE>
        <HIDE>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </HIDE>
      </TITLE>
      <div>
        <HIDE>
          <SOCIAL variants={titleAnimation}>
            <CIRCLE />
            <h2>Send us a message</h2>
          </SOCIAL>
        </HIDE>
        <HIDE>
          <SOCIAL variants={titleAnimation}>
            <CIRCLE />
            <h2>Something Else</h2>
          </SOCIAL>
        </HIDE>
        <HIDE>
          <SOCIAL variants={titleAnimation}>
            <CIRCLE />
            <h2>Lorem, ipsum dolor.</h2>
          </SOCIAL>
        </HIDE>
      </div>
    </CONTACT>
  );
}

const CONTACT = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1300px) {
    padding: 5rem;
  }
`;

const TITLE = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const HIDE = styled.div`
  overflow: hidden;
`;

const SOCIAL = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 30pt;
  }
`;

const CIRCLE = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;

  @media (max-width: 1300px) {
    width: 2rem;
    height: 2rem;
  }
`;

export default ContactUs;
