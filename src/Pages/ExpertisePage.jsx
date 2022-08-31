import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import "../styles/ExpertisePage.styles.scss";
import { motion } from "framer-motion";
export default function ExpertisePage() {
  const images = ExpertiseImagedata.map((img) => {
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1 * img.id,
          ease: "linear",
          type: "spring",
        }}
        viewport={{ once: true, amount: 0.1 }}
        key={img.id}
        className="expertise-img-container"
      >
        <h2>{img.title}</h2>
        <img src={img.url} alt="garage-images" />
      </motion.div>
    );
  });
  return (
    <div className="expertise-container">
      <div className="expertise-wrapper">{images}</div>
    </div>
  );
}
