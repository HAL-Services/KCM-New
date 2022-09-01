import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import "../styles/WriteReview.styles.scss";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function WriteReview() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="review-container">
      <div className="review-box">
        <h1 className="review-header"> Leave us a feedback </h1>
        <div className="review-stars">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <form action="post">
          <div className="review-wrapper">
            <input type="text" name="name" required={true} autoComplete="off" />
            <label>Your Name</label>
          </div>
          <textarea
            className="review-text"
            placeholder="We value your feedback"
          />
          <motion.button
            className="review-button"
            type="submit"
            initial={{ x: 0 }}
            whileHover={{ y: -3, scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default WriteReview;
