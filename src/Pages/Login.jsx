import { useState, useContext, useRef } from "react";
import Loader from "../components/Loader.jsx";
import "../styles/Login.scss";
import { Link } from "react-router-dom";
import SignUpSvg from "../Assets/Images/login.jpg";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "../context/Context";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPass, setShowPass] = useState(false);
  const { isFetching, dispatch } = useContext(Context);
  function handleError() {
    toast.error("Email or Password incorrect", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      const user = res.data;
      localStorage.setItem("User", JSON.stringify(user));
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } catch (err) {
      handleError();
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <div className="login-page">
      <div>
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
      </div>
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
      </div>
    </div>
  );
};

export default Login;