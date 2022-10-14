import "../styles/LandingPage.scss";
// Importing animation
import { motion } from "framer-motion";
import { landingAnim, titleAnim, rightAnim } from "../animation";
import MobileBackground from "../Assets/Images/mobileDesign.gif";
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
      <motion.div
        variants={landingAnim}
        initial="hidden"
        animate="show"
        className="landing-page-container"
        id="LandingPageContainer"
      >
        <div className="left">
          <span className="landing_hide">
            <motion.h1 variants={titleAnim}>The German Car Experts</motion.h1>
          </span>
          <span className="landing_hide">
            <motion.h1
              style={{
                fontStyle: "italic",
                color: "hsl(var(--hue-color), 80%, 68%)",
                fontWeight: "700",
              }}
              variants={titleAnim}
            >
              Lightning Fast Service
            </motion.h1>
          </span>
          <span className="landing_hide">
            <motion.h2 style={{ fontSize: "23px" }} variants={titleAnim}>
              Working with brands from all over the world
            </motion.h2>
          </span>
          <span className="landing_hide quickbook">
            <QuickBookModal />
          </span>
        </div>
        <motion.div className="right" variants={rightAnim}>
          <img src={MobileBackground} alt="background-img" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="outer-text"
      >
        <span className="landing_hide">
          <motion.div
            className="LandingText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.1 }}
          >
            <motion.h2 style={{ fontStyle: "italic" }}>
              A Car Service Station in Gurugram
            </motion.h2>
          </motion.div>
        </span>
        <span className="landing_hide">
          <motion.div
            className="LandingText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.1 }}
          >
            <motion.h2 style={{ fontStyle: "italic" }}>
              One Stop Shop for all that your Car Needs
            </motion.h2>
          </motion.div>
        </span>
      </motion.div>
    </div>
  );
}
