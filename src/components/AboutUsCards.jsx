import React from "react";
import { motion } from "framer-motion";

// importing styles
import "../styles/AboutUs.scss";

const AboutUsCards = ({ title, subtitle }) => {
  return (
    <motion.div className="aboutUsCards_container">
      <div className="aboutUsCards_header">
        <h1 className="aboutUsCards_title">{title}</h1>
        <p className="aboutUsCards_subtitle">{subtitle}</p>
      </div>
      <div className="aboutUsCards_body">
        <p className="aboutUsCards_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          nihil eaque eveniet quaerat veritatis aliquid illum eum aut tenetur
          fugiat ipsam veniam eius nam molestias architecto iste ullam, dolorem
          magnam quod sed aspernatur. Est reiciendis quo dolorum ad unde.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUsCards;
