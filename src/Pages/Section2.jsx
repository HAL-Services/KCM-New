import Carousel from "../components/Carousel";
import GarageCarousel from "../components/GarageCarousel";
import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import WaveImage from "../Assets/Images/wave.svg";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { landingAnim, titleAnim } from "../animation";
import "../styles/Section2.styles.css";
export default function Section2() {
  return (
    <div className="Section2PageContainer">
      <section>
        <motion.h1
          className="about_title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          Our Expertise
        </motion.h1>
        <Carousel data={ExpertiseImagedata} />
      </section>
      <section className="Section2PageSection">
        <div className="Section2PageText1">Latest From Our Garage</div>
        <GarageCarousel />
      </section>
      <img
        className="waveImage"
        src={WaveImage}
        style={{ marginTop: "-1rem", zIndex: "-1" }}
      ></img>
    </div>
  );
}
