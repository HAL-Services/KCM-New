import "../styles/ServiceForm.styles.scss";
import DateTime from "./DateTime";
import "react-datepicker/dist/react-datepicker.css";
const ServiceForm = () => {
  return (
    <div className="Service-container">
      <form action="" method="post">
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
        <DateTime />
        <div className="service-btn-container">
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
