import "../styles/QuickBookForm.styles.scss";
import { useRef, useState } from "react";

export default function QuickBookForm() {
  const number = useRef();
  const username = useRef();
  const carModel = useRef();
  const [Number, setNumber] = useState(null);
  const [User, setUser] = useState(null);
  const [Car, setCar] = useState(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    setNumber(number.current.value);
    setUser(username.current.value);
    setCar(carModel.current.value);
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
          />
          <label htmlFor="form-input-carNumber">Car Model</label>
        </div>
        <div className="quickBook-btn-container">
          <button type="submit">
            <a
              href={`https://wa.me/919990868464/?text=My%20name%20is%20${User}%0AI%20would%20like%20to%20have%20my%20car%20${Car}%20serviced%0AMy%20contact%20number%20is%20${Number}`}
            >
              Confirm Booking
            </a>
          </button>
        </div>
      </form>
    </div>
  );
}
