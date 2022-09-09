import { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import "../styles/WriteReview.styles.scss";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function WriteReview() {
  const userRef = useRef();
  const dataRef = useRef();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const history = useHistory();
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
  function handleSuccess() {
    toast.success("Your review was submitted successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function handleError() {
    toast.error("There was some error. Please try later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: userRef.current.value,
      data: dataRef.current.value,
    };
    try {
      await axios.post("http://localhost:5000/reviews/create", data);
      handleSuccess();
      setTimeout(() => {
        history.push("/");
      }, 4000);
    } catch (error) {
      handleError();
      setTimeout(() => {
        history.push("/");
      }, 4000);
    }
  };
  return (
    <div className="review-container">
      <div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
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
        <form onSubmit={handleSubmit}>
          <div className="review-wrapper">
            <input
              type="text"
              name="name"
              required={true}
              autoComplete="off"
              ref={userRef}
            />
            <label>Your Name</label>
          </div>
          <textarea
            className="review-text"
            placeholder="We value your feedback"
            ref={dataRef}
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
