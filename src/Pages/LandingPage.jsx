import "../styles/LandingPage.scss";
import { useState } from "react";
// Importing animation
import { motion } from "framer-motion";
import { landingTitleAnim } from "../animation";
import { FaArrowCircleUp } from "react-icons/fa";
import LandingPageVideo from "../components/LandingPageVideo";
import QuickBookModal from "../components/QuickBookModal";
import GetAQuote from "../components/GetAQuote";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <motion.span
        animate={{ y: -10 }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          ease: "linear",
          repeatType: "reverse",
        }}
        style={{
          height: "50px",
          width: "50px",
          position: "fixed",
          margin: ".5rem",
          bottom: "0",
          right: "0",
          zIndex: "2",
        }}
      >
        <motion.a
          href="/"
          onClick={(e) => {
            let contact = document.getElementById("navbar");
            e.preventDefault();
            contact &&
              contact.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
          }}
        >
          <FaArrowCircleUp className="fingerUp" />
        </motion.a>
      </motion.span>
      <div className="hero-container">
        <motion.div
          className="content"
          variants={landingTitleAnim}
          initial="hidden"
          animate="show"
        >
          <h2 className="about_title">
            The German Car
            <h3 className="experience">
              Experts
              <span>EXPERTS</span>
            </h3>
          </h2>
        </motion.div>
        <LandingPageVideo />
      </div>
      <div className="btn-container">
   
        <QuickBookModal />
   
        <button className="button-6" onClick={() => setShowModal(true)}>
          Request A Quote
        </button>
        {showModal ? <GetAQuote close={setShowModal} /> : null}
      </div>
    </div>
  );
}
