import { motion } from "framer-motion";

// importing styles
import "../styles/ServiceCard.scss";

const ServiceCard = (props) => {
  return (
    <div className="servicecard" style={{ background: `${props.sty}` }}>
      <div className="servicecard_body">
        <h3 className="servicecard_title">{props.title}</h3>
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
                viewport={{ once: true, amount: 1 }}
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
