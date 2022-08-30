import ExpertiseImagedata from "../OfflineAPI/ExpertiseImagesData";
import "../styles/ExpertisePage.styles.scss";
import { motion } from "framer-motion";
export default function ExpertisePage() {
  const images = ExpertiseImagedata.map((img) => {
    return (
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.12 * img.id,
          ease: "linear",
          type: "spring",
        }}
        viewport={{ once: false, amount: 0.1 }}
        key={img.id}
        className="expertise-img-container"
      >
        <h2>{img.title}</h2>
        <img src={img.url} />
      </motion.div>
    );
  });
  return (
    <div className="expertise-container">
      <div className="expertise-wrapper">{images}</div>
    </div>
  );
}
