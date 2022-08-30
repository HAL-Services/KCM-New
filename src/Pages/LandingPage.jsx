import LandingImage from "../Assets/Images/mobileDesign.gif";
import "../styles/LandingPage.styles.css";
// Importing animation
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { landingAnim, titleAnim } from "../animation";
import MobileBackground from "../Assets/Images/mobileDesign.gif";
import { FaArrowCircleUp } from "react-icons/fa";
export default function LandingPage() {
  const { scrollY } = useViewportScroll();
  const yValue = useTransform(scrollY, [0, 200], [0, 50]);

  return (
    <>
      <div className="contactUs">Email- kcmautomobiles@gmail.com</div>
      <div className="mobileViewImage" style={{ display: "none" }}>
        <img src={MobileBackground} />
      </div>
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
        className="LandingPageContainer"
        id="LandingPageContainer"
        style={{
          backgroundImage: `url(${LandingImage})`,
        }}
      >
        <div className="LandingPageWrapper">
          <span className="landing_hide">
            <motion.h1 variants={titleAnim}>The German Car Expert</motion.h1>
          </span>
          <span className="landing_hide">
            <motion.h4 variants={titleAnim}>
              Working with brands from all over the world
            </motion.h4>
          </span>
          <span className="landing_hide">
            <motion.button
              variants={titleAnim}
              whileHover={{
                backgroundColor: "hsl(243, 80%, 68%)",
                color: "var(--default-color)",
                transition: "0.4s",
                cursor: "pointer",
              }}
            >
              Quick Book
            </motion.button>
          </span>
          <span className="landing_hide">
            <motion.div className="LandingText" variants={titleAnim}>
              A Car Service Station in Gurugram
            </motion.div>
          </span>
          <span className="landing_hide">
            <motion.div className="LandingText1" variants={titleAnim}>
              One Stop Shop for all that your Car needs
            </motion.div>
          </span>
        </div>
      </motion.div>
    </>
  );
}
