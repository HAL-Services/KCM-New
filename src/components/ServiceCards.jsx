import { motion } from "framer-motion";
// importing styles
import "../styles/ServiceCard.scss";
import { HiChevronDoubleDown } from "react-icons/hi";

const ServiceCard = (props) => {
  return (
    <div className="servicecard-container">
      <div className="servicecard-card">
        <div className="face face1">
          <div className="servicecard-content">
            <h3>{props.title.toUpperCase()}</h3>
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                delay: 0.1,
                ease: "linear",
                repeatType: "reverse",
              }}
              className="servicecard-down"
            >
              <HiChevronDoubleDown className="servicecard-down-icon" />
            </motion.span>
          </div>
        </div>
        <div className="face face2">
          <div className="servicecard-content">
            {props.body.map((data, index) => {
              return <div key={index}>{data}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
