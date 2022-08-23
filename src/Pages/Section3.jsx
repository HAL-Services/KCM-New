import Card from "../components/Card";
import CardData from "../OfflineAPI/CardRelatedData";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { landingAnim, titleAnim } from "../animation";
import "../styles/Section3.styles.scss";
export default function Section3() {
  return (
    <>
      <div className="Section3how_we_work">
        <motion.h1
          className="about_title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          How we Work
        </motion.h1>
        <div className="Section3wrapper">
          {CardData.map((ele) => {
            return (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.12 * ele.id,
                  ease: "linear",
                  type: "spring",
                }}
                viewport={{ once: false, amount: 0.1 }}
                key={ele.id}
              >
                <Card
                  style={{ height: "100%" }}
                  title={ele.title}
                  body={ele.content}
                  key={ele.id}
                  number={ele.id}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
