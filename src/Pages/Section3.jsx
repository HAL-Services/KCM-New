import Card from "../components/HowWeWorkCard";
import CardData from "../OfflineAPI/CardRelatedData";
import { motion } from "framer-motion";
import { RiTaxiWifiFill, RiCarFill } from "react-icons/ri";
import { GiMechanicGarage } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import "../styles/Section3.styles.scss";
import { FaHandHoldingUsd } from "react-icons/fa";
import HeadingText from "../components/HeadingText";
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
        <HeadingText text1="How We" text2="Work" style="dark" />
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
          <HeadingText text1="EU AutoWorks" text2="Benefits" style="light" />
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
    </>
  );
}
