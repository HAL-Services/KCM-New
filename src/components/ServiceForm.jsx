import { useState } from "react";
import "../styles/ServiceForm.styles.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ServiceForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="login-page" style={{ width: "100%" }}>
      <div className="Service-container">
        <form action="" method="post">
          <div className="setps-container"></div>
          <div className="input-container">
            <input
              type="text"
              name="fullName"
              required={true}
              autoComplete="off"
            />
            <label htmlFor="form-input-fullName">Full Name</label>
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
          <div className="DatePickers">
            <span className="datePicker-title">Select Date</span>

            <DatePicker
              className="picker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              maxDate={new Date()}
            />
          </div>
          <div className="btn-container">
            <button type="submit">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
