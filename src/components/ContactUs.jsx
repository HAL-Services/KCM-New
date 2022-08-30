import React from "react";

// Import animation
import { motion } from "framer-motion";

// Importing Styles
import "../styles/ContactUs.scss";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="contact_section" id="contact_section">
      <h2 className="contact_main_title">Contact Us</h2>
      <span className="contact_main_subtitle">Get in Touch</span>
      <div className="contact_container grid">
        <motion.div className="contact_leftside">
          <div className="contact_info">
            <motion.span
              className="contact_icon"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <FiPhone />
            </motion.span>
            <div>
              <h3 className="contact_title">Call Us</h3>
              <span className="contact_subtitle">+91 099106 64597</span>
            </div>
          </div>

          <div className="contact_info">
            <motion.span
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="contact_icon"
            >
              <FiMail />
            </motion.span>
            <div>
              <h3 className="contact_title">Email</h3>
              <span className="contact_subtitle">halsrvcs@gmail.com</span>
            </div>
          </div>

          <div className="contact_info">
            <motion.span
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="contact_icon"
            >
              <FiMapPin />
            </motion.span>
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">
                <a
                  href="https://www.google.com/maps/dir//KCM+AUTOMOBILES/@28.4887933,76.9875978,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d183000000021:0x8d473674bdf87c83!2m2!1d77.0576381!2d28.4888112"
                  target="_blanck"
                >
                  Click Here
                </a>
              </span>
            </div>
          </div>
        </motion.div>
        <motion.form action="" className="contact_rightside grid">
          <div className="contact__inputs grid">
            <motion.div
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring" }}
              className="contact__content"
            >
              <label className="contact__label">Name</label>
              <input type="text" className="contact__input" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring" }}
              className="contact__content"
            >
              <label className="contact__label">Email</label>
              <input type="email" className="contact__input" />
            </motion.div>
          </div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            className="contact__content"
          >
            <label className="contact__label">Project</label>
            <input type="text" className="contact__input" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            className="contact__content"
          >
            <label className="contact__label">Message</label>
            <textarea cols="0" rows="7" className="contact__input"></textarea>
          </motion.div>
          <div>
            <a href="mailto:halsrvcs@gmail.com" className="contact_btn_flex">
              Send Message
              <span className="contact_btn_icon">
                <FiSend />
              </span>
            </a>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactUs;
