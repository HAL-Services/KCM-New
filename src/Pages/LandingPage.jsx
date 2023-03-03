import "../styles/LandingPage.scss";
// Importing animation
import { motion } from "framer-motion";
import { landingAnim, titleAnim, rightAnim } from "../animation";
import MobileBackground from "../Assets/Images/backdrop.png";
import { FaArrowCircleUp } from "react-icons/fa";
import QuickBookModal from "../components/QuickBookModal";
export default function LandingPage() {
  return (
    <div>
      <div className="email-fixed">Email- kcmautomobiles@gmail.com</div>
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
      <div
        
        className="landing-page-container"
        id="LandingPageContainer"
      >
        <div className="left">
          <span className="landing_hide">
            <h1 variants={titleAnim}>The German Car Experts</h1>
          </span>
          <span className="landing_hide">
            <h1
              style={{
                fontStyle: "italic",
                color: "hsl(var(--hue-color), 80%, 68%)",
                fontWeight: "700",
              }}
              variants={titleAnim}
            >
              Lightning Fast Service
            </h1>
          </span>
          <span className="landing_hide">
            <h2 style={{ fontSize: "23px" }} variants={titleAnim}>
              Working with brands from all over the world
            </h2>
          </span>
          <span className="landing_hide quickbook">
            <QuickBookModal />
          </span>
        </div>
       
       
      </div>

      <div

        className="outer-text"
      >
        <span className="landing_hide">
          <div
            className="LandingText">
            <h2 style={{ fontStyle: "italic" }}>
              A Car Service Station in Gurugram
            </h2>
          </div>
        </span>
        <span className="landing_hide">
          <div
            className="LandingText"
            
          >
            <h2 style={{ fontStyle: "italic" }}>
              One Stop Shop for all that your Car Needs
            </h2>
          </div>
        </span>
      </div>
    </div>
  );
}
