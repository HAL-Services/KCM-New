import Card from "../components/HowWeWorkCard";
import CardData from "../OfflineAPI/CardRelatedData";
import { motion } from "framer-motion";
import {
  RiTaxiFill,
  RiTaxiWifiFill,
  RiCarFill,
  RiCarWashingFill,
} from "react-icons/ri";
import { useRef, useState, useEffect } from "react";
import "../styles/Section3.styles.scss";
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

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="Section3how_we_work">
        <motion.h1
          className="about_title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
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
      <div className="benefits">
        <h1>Kcm Benefits</h1>
        <div className="benefits_container">
          <span className="benefits_box">
            <span className="benefits_box_icon">
              <RiCarFill className="benefits_icon" />
            </span>
            <span>
              <h2>Free Doorstep Pick-up and Drop</h2>
              <p>No more unnecessary workshop vitals!</p>
            </span>
          </span>
          <span className="benefits_box">
            <span className="benefits_box_icon">
              <RiTaxiFill className="benefits_icon" />
            </span>
            <span>
              <h2>Free Doorstep Pick-up and Drop</h2>
              <p>No more unnecessary workshop vitals!</p>
            </span>
          </span>
          <span className="benefits_box">
            <span className="benefits_box_icon">
              <RiTaxiWifiFill className="benefits_icon" />
            </span>
            <span>
              <h2>Free Doorstep Pick-up and Drop</h2>
              <p>No more unnecessary workshop vitals!</p>
            </span>
          </span>
          <span className="benefits_box">
            <span className="benefits_box_icon">
              <RiCarWashingFill className="benefits_icon" />
            </span>
            <span>
              <h2>Free Doorstep Pick-up and Drop</h2>
              <p>No more unnecessary workshop vitals!</p>
            </span>
          </span>
        </div>
      </div>
      <motion.div className="curated" ref={carousel}>
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
      </motion.div>
    </>
  );
}
