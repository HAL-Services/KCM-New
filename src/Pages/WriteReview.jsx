import { useState } from "react";
import { FaStar } from "react-icons/fa";

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
      <h1> Leave us a feedback </h1>
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
      <div className="review-wrapper">
        <label className="review-lable">Your Name</label>
        <input type="text" className="review-input" />
      </div>
      <textarea className="review-text" placeholder="We value your feedback" />
      <button className="review-button">Submit</button>
    </div>
  );
}

export default WriteReview;
