import { useContext, useEffect, useState, useRef } from "react";
import DateTime from "./DateTime";
import "../styles/ServiceForm.styles.scss";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
import axios from "axios";
const ServiceForm = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const carNumber = useRef();
  const carModel = useRef();
  const address = useRef();
  const history = useHistory();
  const { user } = useContext(Context);
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
    const data = {
      date,
      time,
      username: currentUser.username,
      carNumber: carNumber.current.value,
      carModel: carModel.current.value,
      mobile: currentUser.mobile,
      address: address.current.value,
      email: currentUser.email,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    };
    try {
      await axios.post("http://localhost:5000/service/create/", data, config);
      history.push("/shortly");
    } catch (error) {}
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
