import Card from "../components/HowWeWorkCard";
import CardData from "../OfflineAPI/CardRelatedData";

import { RiCarFill } from "react-icons/ri";
import { GiMechanicGarage } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import "../styles/Section3.styles.scss";
import { FaHandHoldingUsd } from "react-icons/fa";
import HeadingText from "../components/HeadingText";

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
export default function Section3() {
  useEffect(() => {
    Aos.init({ duration: 999 })
  }, [])
  return (
    <>
      <div className="Section3how_we_work">
        <HeadingText text1="How We" text2="Work" style="dark" />
        <div className="Section3wrapper">
          {CardData.map((ele) => {
            return (
              <div key={ele.id} data-aos="zoom-in-up">
                <Card
                  style={{ height: "100%" }}
                  title={ele.title}
                  body={ele.content}
                  key={ele.id}
                  number={ele.id}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="benefits-box">
        <div className="benefits">
          <HeadingText text1="EU AutoWorks" text2="Benefits" style="light" />
          <div className="benefits_container" >
            <span className="benefits_box" data-aos="zoom-in-up">
              <span className="benefits_box_icon">
                <RiCarFill className="benefits_icon" />
              </span>
              <span>
                <h2>Free Door Step Pick-up and Drop</h2>
                <p>No more hussel!</p>
              </span>
            </span>
            <span className="benefits_box" data-aos="zoom-in-up">
              <span className="benefits_box_icon">
                <FaHandHoldingUsd className="benefits_icon" />
              </span>
              <span>
                <h2>Cheapest Service in the City</h2>
                <p>Save upto 50% on labour charges </p>
              </span>
            </span>
            <span className="benefits_box" data-aos="zoom-in-up">
              <span className="benefits_box_icon">
                <FcBusinessman className="benefits_icon" />
              </span>
              <span>
                <h2>Personalized Expert Advice </h2>
                <p>Get guided by our industry best mechanics</p>
              </span>
            </span>
            <span className="benefits_box" data-aos="zoom-in-up">
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
