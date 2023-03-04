import React from "react";
import emailjs from "emailjs-com";

// Import animation
import { motion } from "framer-motion";
// Importing Styles
import "../styles/ContactUs.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import HeadingText from "./HeadingText";

const ContactUs = () => {
  function handleSuccess() {
    toast.success("Message Delievered", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_5xhuphl",
        "template_i9eml54",
        e.target,
        "v8rfW3JruoYuZK6VC"
      )
      .then(
        (result) => { },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    handleSuccess();
  }
  return (
    <div className="contact_section" id="contact_section">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <HeadingText text1="Contact" text2="Us" style="light" />
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
        {/* form start here  */}
        <motion.form
          action=""
          className="contact_rightside grid"
          onSubmit={sendEmail}
        >
          <div className="contact__inputs grid">
            <motion.div
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring" }}
              className="contact__content"
            >
              <label className="contact__label">Name</label>
              <input type="text" className="contact__input" name="name" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring" }}
              className="contact__content"
            >
              <label className="contact__label">Email</label>
              <input type="email" className="contact__input" name="email" />
            </motion.div>
          </div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            className="contact__content"
          >
            <label className="contact__label">Query</label>
            <input type="text" className="contact__input" name="subject" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            className="contact__content"
          >
            <label className="contact__label">Message</label>
            <textarea
              cols="0"
              rows="7"
              className="contact__input"
              name="message"
            ></textarea>
          </motion.div>
          <div>
            <input
              type="submit"
              value="Send Message"
              className="contact_btn_flex"
            />
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactUs;
