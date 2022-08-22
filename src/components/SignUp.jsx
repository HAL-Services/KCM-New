import "../styles/Login.scss";
import { Link } from "react-router-dom";
import SignUpGif from "../Assets/Images/signUpGif.gif";
const SignUp = () => {
  return (
    <div className="login-page">
      <div className="left-info-continer">
        <div className="information">
          <img
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
            src={SignUpGif}
          />
        </div>
      </div>
      <div className="right-login-container">
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
              name="phoneNumber"
              required={true}
              autoComplete="off"
            />
            <label htmlFor="form-input-phoneNumber">Phone number</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              required={true}
              autoComplete="off"
            />
            <label htmlFor="form-input-fullName">What is your email?</label>
          </div>
          <span style={{ marginBottom: "20px", color: "grey" }}>
            Creating an account means you're okay with our Terms of Service and
            our Privacy Policy
          </span>
          <Link to="/login">
            <span style={{ marginTop: "40px", color: "white" }}>
              Already have an account? Login
            </span>
          </Link>
          <div className="btn-container">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
