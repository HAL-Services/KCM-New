import LandingImage from "../Assets/Images/LandingImageNew.png";
import "../styles/LandingPage.styles.css";
// Importing animation
import { motion } from "framer-motion";
import { landingAnim, titleAnim } from "../animation";
export default function LandingPage() {
  return (
    <>
      <div className="contactUs">Email Us - HalServices@gmail.com</div>
      <motion.div
        variants={landingAnim}
        initial="hidden"
        animate="show"
        className="LandingPageContainer"
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
