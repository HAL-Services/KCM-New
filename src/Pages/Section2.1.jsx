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
          body={["Car wash", "Engine Check", "Batteries"]}
          sty="linear-gradient(to right, #bdc3c7, #2c3e50)"
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
          sty="linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0)"
        />
        <ServiceCard
          title="Gold"
          body={[
            "Car wash",
            "Engine Check",
            "Suspension & Fitments",
            "Winshields & Lights",
          ]}
          sty="linear-gradient(to right, #EDDE5D, #F09819)"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
