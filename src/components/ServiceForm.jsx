import { useContext, useState, useRef } from "react";
import DateTime from "./DateTime";
import "../styles/ServiceForm.styles.scss";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ServiceForm = () => {
  const [date, setDate] = useState(null);
  const carNumber = useRef();
  const carModel = useRef();
  const address = useRef();
  const history = useHistory();
  const { user } = useContext(Context);
  function handleSuccess() {
    toast.success("Request Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function handleError() {
    toast.error("Please try later.", {
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
      date,
      username: user.username,
      carNumber: carNumber.current.value,
      carModel: carModel.current.value,
      mobile: user.mobile,
      location: address.current.value,
      email: user.email,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    try {
      await axios.post("http://localhost:5000/services/create/", data, config);
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
  const updateDate = (value) => {
    setDate(value);
  };
  return (
    <div className="Service-container">
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
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            required={true}
            autoComplete="off"
            defaultValue={user ? user.username.toUpperCase() : ""}
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
            disabled
          />
          <label className="dis-label" htmlFor="form-input-fullName">
            Mobile Number
          </label>
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
          Pick a Date
        </span>
        <DateTime updateDate={updateDate} />
        <div className="service-btn-container">
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
