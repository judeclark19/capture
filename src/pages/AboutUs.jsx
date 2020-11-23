import React from "react";
import ScrollToTop from "../components/ScrollToTop";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//Sections
import About from "../components/About";
import Services from "../components/Services";
import FAQ from "../components/FAQ";

function AboutUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ScrollToTop />
      <About />
      <Services />
      <FAQ />
    </motion.div>
  );
}

export default AboutUs;
