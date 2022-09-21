import { useState, useContext, useRef } from "react";
import Loader from "../components/Loader.jsx";
import "../styles/Login.scss";
import { Link } from "react-router-dom";
import SignUpSvg from "../Assets/Images/login.jpg";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "../context/Context";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { forgotPassword } from "../apiCalls.js";

const Forgot = () => {
  const emailRef = useRef();
  const { isFetching, dispatch } = useContext(Context);
  function handleError(err) {
    toast.error(err, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function handleSuccess(err) {
    toast.success(err, {
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
    try {
      const email = emailRef.current.value;
      const link = await forgotPassword(email);
      await emailjs.send(
        "service_5xhuphl",
        "template_85h8enu",
        {
          to_name: "Forgot Password Link!",
          from_name: "KCM-SERVICES",
          message: `${link}`,
          to_email: `${email}`,
        },
        "v8rfW3JruoYuZK6VC"
      );
      handleSuccess("Please check email for a unique link.");
    } catch (err) {
      handleError(err.data.error);
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
              required
              autoComplete="off"
              ref={emailRef}
            />
            <label htmlFor="form-input-phoneNumber">Email</label>
          </div>

          <div className="btn-container">
            <button type="submit">SUBMIT</button>
            {isFetching && <Loader />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
