import React from "react";

import styled from "styled-components";
import { SectionDiv } from "../styles";
import Toggle from "./Toggle";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

import { AnimateSharedLayout } from "framer-motion";

function FAQ() {
  const [element, controls] = useScroll();

  return (
    <FaqDiv variants={fade} animate={controls} ref={element}>
      <h2>
        <span>Frequently Asked Questions</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium?
            </p>
          </div>
        </Toggle>

        <Toggle title="What is the process?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium?
            </p>
          </div>
        </Toggle>

        <Toggle title="How much does it cost?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium?
            </p>
          </div>
        </Toggle>

        <Toggle title="When will I get my finished film?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqDiv>
  );
}

const FaqDiv = styled(SectionDiv)`
  display: block;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FAQ;
