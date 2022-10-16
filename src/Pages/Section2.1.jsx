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
        style={{ color: "black", fontSize: "var(--big-font-size)" }}
      >
        Our Service Package
      </motion.h1>
      <div className="service__cardWrapper">
        <ServiceCard
          title="Silver"
          sty="#c0c0c0"
          body={[
            "Engine Oil Replacement",
            "A/C Filter Replacement",
            "Car Scanning",
            "Battery Inspection",
          ]}
          id="1"
        />
        <ServiceCard
          title="Platinum"
          body={[
            "Complete General Checkup",
            "Wheel Alignment & Balancing Inspection",
            "Car Washing & Cleaning",
            "Fuel & Air Filter Checkup",
          ]}
          id="2"
          sty="#e5e4e2"
        />
        <ServiceCard
          title="Gold"
          body={[
            "Complete Car Body Wax Polish",
            "Complete Car Interior DryClean",
            "Battery Inspection & Wheel Alignment",
            "Car Scanning",
          ]}
          sty="#FFD700"
          id="3"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
