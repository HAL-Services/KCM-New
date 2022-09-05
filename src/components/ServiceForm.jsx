import { useContext, useState, useRef } from "react";
import DateTime from "./DateTime";
import "../styles/ServiceForm.styles.scss";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
import axios from "axios";
const ServiceForm = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const carNumber = useRef();
  const carModel = useRef();
  const address = useRef();
  const history = useHistory();
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      date,
      time,
      username: user.username,
      carNumber: carNumber.current.value,
      carModel: carModel.current.value,
      mobile: user.mobile,
      address: address.current.value,
      email: user.email,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    try {
      await axios.post("http://localhost:5000/services/create/", data, config);
      history.push("/shortly");
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateDate = (value) => {
    setDate(value);
  };
  const updateTime = (value) => {
    setTime(value);
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
            defaultValue={user ? user.username : ""}
          />
          <label htmlFor="form-input-fullName">Full Name</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="mobile"
            required={true}
            autoComplete="off"
            defaultValue={user ? user.mobile : ""}
          />
          <label htmlFor="form-input-fullName">Mobile Number</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="carNumberr"
            required={true}
            autoComplete="off"
            ref={carNumber}
          />
          <label htmlFor="form-input-carNumber">Car Number</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="carModel"
            required={true}
            autoComplete="off"
            ref={carModel}
          />
          <label htmlFor="form-input-carNumber">Car Model</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="address"
            required={true}
            autoComplete="off"
            ref={address}
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
        <DateTime updateTime={updateTime} updateDate={updateDate} />
        <div className="service-btn-container">
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
