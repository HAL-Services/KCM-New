import { motion } from "framer-motion";

// importing styles
import "../styles/ServiceCard.scss";

const ServiceCard = (props) => {
  return (
    <div className="servicecard" style={{ border: ` 3px dashed ${props.sty}` }}>
      <div className="servicecard_body">
        <h3 className="servicecard_title" style={{ color: `${props.sty}` }}>
          <u>{props.title}</u>
        </h3>
        <ul className="servicecard_desc">
          {props.body.map((e, index) => {
            return (
              <motion.li
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  duration: 1,
                }}
                viewport={{ once: false, amount: 1 }}
              >
                {e}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
