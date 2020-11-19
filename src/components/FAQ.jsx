import React from "react";

import styled from "styled-components";
import { SectionDiv } from "../styles";

function FAQ() {
  return (
    <FaqDiv>
      <h2>
        <span>Frequently Asked Questions</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            praesentium?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What is the process?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            praesentium?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How much does it cost?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            praesentium?
          </p>
        </div>
        <div className="faq-line"></div>
        <div className="question">
          <h4>When will I get my finished film?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              praesentium?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </div>
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
    padding: 3rem 0rem;
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
