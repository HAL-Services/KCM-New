import React, { useEffect } from "react";
import "../styles/GetAQuote.scss";
import { IoCloseSharp } from "react-icons/io5";

const GetAQuote = ({ close }) => {
  useEffect(() => {
    if (close) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, []);

  return (
    <div className="quote">
      <div className="quote_box">
        <span className="quote_close" onClick={() => close(false)}>
          <IoCloseSharp className="quote_close_icon" />
        </span>
        <h2>Get A Quote</h2>
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
              type="email"
              name="email"
              required={true}
              autoComplete="off"
            />
            <label htmlFor="form-input-Email">Email</label>
          </div>
          <div className="input-container">
            <input
              type="tel"
              name="phoneNumber"
              required={true}
              pattern="[789][0-9]{9}"
              autoComplete="off"
              maxLength={10}
              minLength={10}
            />
            <label htmlFor="form-input-phoneNumber">Phone Number</label>
          </div>

          <div className="input-container">
            <input
              type="text"
              name="query"
              autoComplete="off"
              required={true}
            />
            <label htmlFor="form-input-query">How can we help you?</label>
            {/* <label className="contact__label">How can we help you?</label>
            <textarea
              cols="0"
              rows="7"
              htmlFor="form-input-query"
              // className="contact__input"
              name="query"
            ></textarea> */}
          </div>
          <div className="button_container">
            <button>Sumbit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAQuote;
