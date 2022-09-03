import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCards";

// importing Styles
import "../styles/ServiceSection.scss";

const ServiceSection = () => {
  return (
    <div className="service__section">
      <motion.h1
        className="service__title"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1.3,
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Our Service Package
      </motion.h1>
      <div className="service__cardWrapper">
        <ServiceCard
          title="Silver"
          sty="#c0c0c0"
          body={["Car wash", "Engine Check", "Batteries"]}
          id="1"
        />
        <ServiceCard
          title="Platinum"
          body={[
            "1 Free car wash*",
            "Engine Check",
            "AC Service & Repair",
            "Suspension & Fitments",
            "Tyres & Wheel Care",
          ]}
          id="2"
          sty="#e5e4e2"
        />
        <ServiceCard
          title="Gold"
          body={[
            "Car wash",
            "Engine Check",
            "Suspension & Fitments",
            "Winshields & Lights",
          ]}
          sty="#FFD700"
          id="3"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
