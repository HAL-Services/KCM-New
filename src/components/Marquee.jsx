import Marquee from "react-fast-marquee";
import "../styles/Marquee.styles.scss";
import MarqueeData from "../OfflineAPI/MarqueeImagesData";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { landingAnim, titleAnim } from "../animation";
export default function MarqueeElement() {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0,
        ease: "linear",
        type: "spring",
      }}
      viewport={{ once: false, amount: 0.1 }}
      className="MarqueeContainer"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <Marquee gradient={false}>
        {MarqueeData.map((imgData) => (
          <div key={imgData.id} className="MarqueeDiv">
            <img className="MarqueeImage" src={imgData.url} />
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
}
