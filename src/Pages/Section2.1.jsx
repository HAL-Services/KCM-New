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
        viewport={{ once: false, amount: 0.8 }}
      >
        Services we offer
      </motion.h1>
      <div className="service__cardWrapper">
        <ServiceCard
          title="Silver"
          body={["Car wash", "Engine Check", "Batteries"]}
          sty="#d7d7d7"
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
          sty="#b4b4b4"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
