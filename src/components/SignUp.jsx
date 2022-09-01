import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import SignUpGif from "../Assets/Images/signUpGif.gif";
import axios from "axios";
import Loader from "../components/Loader";
import "../styles/Login.scss";

const SignUp = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const mobileRef = useRef();
  const [fetching, setFetching] = useState(false);
  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      mobile: mobileRef.current.value,
    };
    try {
      setFetching(true);
      await axios.post("http://localhost:5000/signup/", user);
      history.push("/login");
      setFetching(false);
    } catch (err) {
      console.log(err.response.data);
      alert("User already exists");
      setFetching(false);
    }
  };
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
        <form onSubmit={handleClick}>
          <div className="setps-container"></div>
          <div className="input-container">
            <input
              type="text"
              name="fullName"
              required={true}
              autoComplete="off"
              ref={usernameRef}
            />
            <label htmlFor="form-input-fullName">Full Name</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="phoneNumber"
              required={true}
              autoComplete="off"
              ref={mobileRef}
            />
            <label htmlFor="form-input-phoneNumber">Phone number</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              required={true}
              autoComplete="off"
              ref={emailRef}
            />
            <label htmlFor="form-input-fullName">What is your email?</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              required={true}
              autoComplete="off"
              minLength={8}
              ref={passwordRef}
            />
            <label htmlFor="form-input-fullName">Password</label>
          </div>
          <span style={{ marginBottom: "20px", color: "grey" }}>
            Creating an account means you're okay with our Terms of Service and
            our Privacy Policy
          </span>
          <Link to="/login">
            <span
              className="loginWrapper"
              style={{ marginTop: "40px", color: "white" }}
            >
              Already have an account?
              <span>Login</span>
            </span>
          </Link>
          <div className="btn-container">
            <button type="submit">Register</button>
            {fetching && <Loader />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
