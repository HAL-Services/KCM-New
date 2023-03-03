import Card from "../components/HowWeWorkCard";
import CardData from "../OfflineAPI/CardRelatedData";
import { motion } from "framer-motion";
import { RiTaxiWifiFill, RiCarFill } from "react-icons/ri";
import { GiMechanicGarage } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import "../styles/Section3.styles.scss";
import { FaHandHoldingUsd } from "react-icons/fa";
export default function Section3() {
  const imageData = [
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
    {
      link: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png",
      body: "Brakes",
    },
  ];

  return (
    <>
      <div className="Section3how_we_work">
        <motion.h1
          
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          style={{ color: "black", fontSize: "var(--big-font-size)" }}
        >
          <h2 className="about_title">How We
          <h3 className="experience">Work
            <span>WORK</span>
          </h3>
        </h2>
          
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
                viewport={{ once: true, amount: 0.1 }}
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
      <div className="benefits-box">
        <div className="benefits">
          <h1 style={{ fontSize: "var(--big-font-size)", color: "black" }}>
            Kcm Benefits
          </h1>
          <div className="benefits_container">
            <span className="benefits_box">
              <span className="benefits_box_icon">
                <RiCarFill className="benefits_icon" />
              </span>
              <span>
                <h2>Free DoorStep Pick-up and Drop</h2>
                <p>No more hussel!</p>
              </span>
            </span>
            <span className="benefits_box">
              <span className="benefits_box_icon">
                <FaHandHoldingUsd className="benefits_icon" />
              </span>
              <span>
                <h2>Cheapest Service in the City</h2>
                <p>Save upto 50% on labour charges </p>
              </span>
            </span>
            <span className="benefits_box">
              <span className="benefits_box_icon">
                <FcBusinessman className="benefits_icon" />
              </span>
              <span>
                <h2>Personalized Expert Advice </h2>
                <p>Get guided by our industry best mechanics</p>
              </span>
            </span>
            <span className="benefits_box">
              <span className="benefits_box_icon">
                <GiMechanicGarage className="benefits_icon" />
              </span>
              <span>
                <h2>Original Spare Parts</h2>
                <p>Only Tried and Test quality parts used</p>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* <motion.div className="curated" ref={carousel}>
        <h1>Curated Custom Services</h1>
        <motion.div
          className="curated_inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {imageData.map((e, index) => {
            return (
              <div className="curated_box" key={index}>
                <div className="curated_box_image">
                  <img src={e.link} alt="" />
                </div>
                <span className="curated_box_content">{e.body}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div> */}
    </>
  );
}
