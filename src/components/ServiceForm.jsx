import { useContext, useEffect, useState } from "react";
import DateTime from "./DateTime";
import "../styles/ServiceForm.styles.scss";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../context/Context";
import axios from "axios";
import { useRef } from "react";
const ServiceForm = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useContext(Context);
  const dateRef = useRef();
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    };
    const fetchUserDetails = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/details/",
        config
      );
      setCurrentUser(data);
    };
    fetchUserDetails();
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dateRef);
  };
  return (
    <div className="Service-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            required={true}
            autoComplete="off"
            defaultValue={currentUser ? currentUser.username : ""}
          />
          <label htmlFor="form-input-fullName">Full Name</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="mobile"
            required={true}
            autoComplete="off"
            defaultValue={currentUser ? currentUser.mobile : ""}
          />
          <label htmlFor="form-input-fullName">Mobile Number</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="carNumberr"
            required={true}
            autoComplete="off"
          />
          <label htmlFor="form-input-carNumber">Car Number</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="carNumberr"
            required={true}
            autoComplete="off"
          />
          <label htmlFor="form-input-carNumber">Car Model</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="address"
            required={true}
            autoComplete="off"
          />
          <label htmlFor="form-input-carNumber">Pick Up Location</label>
        </div>
        <span
          style={{
            marginTop: "5px",
            marginBottom: "2rem",
            fontSize: "1.2rem",
          }}
        >
          Choose Time and Date
        </span>
        <DateTime ref={dateRef} />
        <div className="service-btn-container">
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
