import { useState, useContext, useRef } from "react";
import Loader from "../components/Loader.jsx";
import "../styles/Login.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SignUpSvg from "../Assets/Images/login.jpg";
import Alert from "@mui/material/Alert";

import { Context } from "../context/Context";
import axios from "axios";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { isFetching, dispatch } = useContext(Context);
  const navigate = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      localStorage.setItem("authToken", JSON.stringify(res.data.token));
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.token });
      navigate("/");
    } catch (err) {
      setErr(true);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <div className="login-page">
      <Link to="/">
        <h1 className="login-header">KCM.</h1>
      </Link>
      <div className="left-info-continer">
        <div className="information">
          <img
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
            src={SignUpSvg}
            alt="login_img"
          />
        </div>
      </div>
      <div
        className="right-login-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <form style={{ marginBottom: "30px" }} onSubmit={handleClick}>
          <div className="setps-container"></div>

          <div className="input-container">
            <input
              type="email"
              name="email"
              required={true}
              autoComplete="off"
              ref={emailRef}
            />
            <label htmlFor="form-input-phoneNumber">Email</label>
          </div>
          <div className="input-container">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              required={true}
              autoComplete="off"
              ref={passwordRef}
            />
            <label htmlFor="form-input-fullName">Password</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" onClick={() => setShowPass(!showPass)} />
            <label htmlFor="showPassword" className="login-checkbox">
              Show Password
            </label>
          </div>

          <Link to="/signUp">
            <span
              className="loginWrapper"
              style={{ marginTop: "40px", color: "white" }}
            >
              Don't have an account?
              <span>Sign-Up</span>
            </span>
          </Link>
          <div className="btn-container">
            <button type="submit">LOGIN</button>
            {isFetching && <Loader />}
          </div>
        </form>
        {err && (
          <Alert severity="error" style={{ width: "100%" }}>
            Password or Email does not match
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Login;
