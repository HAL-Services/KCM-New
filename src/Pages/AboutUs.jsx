import React from "react";
import image from "../Assets/Images/1.jpg";
import AboutUsCards from "../components/AboutUsCards";
import { motion } from "framer-motion";

// importing Styles
import "../styles/AboutUs.scss";

const AboutUs = () => {
  const dataName = [
    {
      id: 1,
      title: "Kishore Chandra",
      subtitle: "Founder",
    },
    {
      id: 2,
      title: "Harish Chandra",
      subtitle: "Team Lead",
    },
  ];

  return (
    <>
      <div className="about_section" id="about">
        <motion.h1
          className="about_title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          viewport={{ amount: 0.1, once: false }}
        >
          About Us
        </motion.h1>
        <div className="about_container">
          <motion.div
            className="about_left_section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            KCM is a luxury automobile workshop which is committed to serving
            the needs of customer. KCM was started in 2016 with a vision to
            provide the best in class service. Our aim is to make the customer
            happy by providing them with unpralled service and assistant. We
            have a team of best workman you will find anywhere in the city. Our
            team members are masters of their craft having experience of working
            in the industry for more than 10 years and have previously worked
            with many leading brands.We have a family of more than 1000 happy
            customers who appreciate our work and believe in our vision.
          </motion.div>
          <motion.div
            className="about_right_section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={image} alt="alternate" className="about_image" />
          </motion.div>
        </div>
      </div>
      <div className="about_cards">
        <motion.h1
          className="about_title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          Meet Our Founders
        </motion.h1>
        <motion.div className="about_cardwrapper">
          {dataName.map((e) => {
            return (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 * e.id,
                  ease: "linear",
                  type: "spring",
                }}
                viewport={{ once: false, amount: 0.1 }}
                key={e.id}
              >
                <AboutUsCards title={e.title} subtitle={e.subtitle} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
