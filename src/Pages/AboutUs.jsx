import React from "react";
import carImage from "../Assets/ExpertiseCardImages/carInspection.jpg";
import AboutUsCards from "../components/AboutUsCards";
import { motion } from "framer-motion";

// importing Styles
import "../styles/AboutUs.scss";

const AboutUs = () => {
  const dataName = [
    {
      id: 1,
      title: "Luvjeet Singh",
      subtitle: "Web developer",
    },
    {
      id: 2,
      title: "Aviral Bhudhani",
      subtitle: "Google",
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum autem
            et repellat rerum vero facere neque animi illo odit. Voluptatibus id
            sit soluta ratione distinctio eum, hic adipisci at beatae! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis
            nesciunt impedit corporis molestiae eum ipsum aliquam dolores porro
            perspiciatis? Possimus, accusantium, neque porro dolor provident
            amet voluptatum quos voluptates ex maiores vitae voluptate aut at
            ipsum cum vel quidem.
          </motion.div>
          <motion.div
            className="about_right_section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={carImage} alt="alternate" className="about_image" />
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
