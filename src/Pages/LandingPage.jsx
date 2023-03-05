import "../styles/LandingPage.scss";
// Importing animation
import { motion } from "framer-motion";
import { landingAnim, titleAnim, rightAnim } from "../animation";
import MobileBackground from "../Assets/Images/loadvideo.mp4";
import { FaArrowCircleUp } from "react-icons/fa";
import QuickBookModal from "../components/QuickBookModal";
export default function LandingPage() {
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
        <div className="content">
          <h2 className="about_title">The German Car
            <h3 className="experience">Experts
              <span>EXPERTS</span>
            </h3>
          </h2>
        </div>
        <video className="video" src={MobileBackground} autoPlay muted />
      </div>
      <div className="btn-container">
        <button className="button-6">Quick Book</button>
        <button className="button-6">Request A Quote</button>
      </div>
    </div>
  );
}
