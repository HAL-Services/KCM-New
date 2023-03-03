import { motion } from "framer-motion";
import HeadingText from "../components/HeadingText";
import ServiceCard from "../components/ServiceCards";

// importing Styles
import "../styles/ServiceSection.scss";

const ServiceSection = () => {
  return (
    <div className="service__section">
      <HeadingText text1="Our" text2="Packages" style="light"/>
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
