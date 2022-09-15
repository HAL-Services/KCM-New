import React from "react";
import { motion } from "framer-motion";

// importing styles
import "../styles/AboutUs.scss";

const AboutUsCards = ({ title, subtitle, data, img }) => {
  return (
    <motion.div className="aboutUsCards_container">
      <div
        className="aboutUsCards_header"
        style={{
          backgroundImage: title === "Kishore Chandra" ? `url(${img})` : ``,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "150%",
          height: "150px",
        }}
      >
        <h1 className="aboutUsCards_title">{title}</h1>
        <p className="aboutUsCards_subtitle">{subtitle}</p>
      </div>
      <div className="aboutUsCards_body">
        <p className="aboutUsCards_para">{data}</p>
      </div>
    </motion.div>
  );
};

export default AboutUsCards;
