import React from "react";
import image from "../Assets/Images/1.jpeg";
import AboutUsCards from "../components/AboutUsCards";
import { motion } from "framer-motion";
import first from "../Assets/img.png";
// importing Styles
import "../styles/AboutUs.scss";
import HeadingText from "../components/HeadingText";

const AboutUs = () => {
  const dataName = [
    {
      id: 1,
      title: "Kishore Chandra",
      subtitle: "Founder",
      data: `Kishore is an automobile enthusiast and has been in the field for about two decades. He started KCM with only dream of serving customers with geniune and best in class facilities. Under his guidance KCM has servced many happy customers.`,
    },
    {
      id: 2,
      title: "Harish Chandra",
      subtitle: "Team Lead",
      data: `Harish is Kishore's younger brother and is working as the Team Lead at KCM. His expertise and knowledge gathered over the last two decades is unmatched and and there is no car that he cannot fix. His excellent skills has lead him serve many happy customers `,
    },
  ];

  return (
    <>
      <div className="about_section" id="about">
        <HeadingText text1="About" text2="Us" style="light" />
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
        <HeadingText text1="Our" text2="Founders" style="dark" />
        <div className="about_cardwrapper">
          {dataName.map((e) => {
            return (
              <div
                key={e.id}
              >
                <AboutUsCards
                  title={e.title}
                  subtitle={e.subtitle}
                  data={e.data}
                  img={first}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
