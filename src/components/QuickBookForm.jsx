import "../styles/QuickBookForm.styles.scss";
import React, { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function QuickBookForm() {
  const number = useRef();
  const username = useRef();
  const carModel = useRef();
  const [Number, setNumber] = useState(null);
  const [User, setUser] = useState(null);
  const [Car, setCar] = useState(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(Number, User, Car);
    // setNumber(number.current.value);
    // setUser(username.current.value);
    // setCar(carModel.current.value);
  };

  return (
    <div className="quickBook-container">
      <form action="" method="post" onSubmit={sendMessage}>
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            required={true}
            ref={username}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
          />
          <label htmlFor="form-input-fullName">Full Name</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="mobile"
            required={true}
            autoComplete="off"
            ref={number}
            minLength={10}
            maxLength={10}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label htmlFor="form-input-fullName">Mobile Number</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="carNumberr"
            required={true}
            ref={carModel}
            autoComplete="off"
            onChange={(e) => setCar(e.target.value)}
          />
          <label htmlFor="form-input-carNumber">Car Model</label>
        </div>
        <div className="quickBook-btn-container">
          <button type="submit">
            <a
              href={
                User !== null && Car !== null && Number !== null
                  ? `https://wa.me/919990868464/?text=My%20name%20is%20${User}%0AI%20would%20like%20to%20have%20my%20car%20${Car}%20serviced%0AMy%20contact%20number%20is%20${Number}`
                  : null
              }
            >
              Confirm Booking
              <FaWhatsapp
                style={{
                  marginLeft: ".5rem",
                  fontWeight: "var(--font-bold)",
                  verticalAlign: "middle",
                }}
              />
            </a>
          </button>
        </div>
      </form>
    </div>
  );
}
