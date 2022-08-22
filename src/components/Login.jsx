import "../styles/Login.scss";
import { Link } from "react-router-dom";
import SignUpSvg from "../Assets/Images/signUpSvg.svg";
const Login = () => {
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
            src={SignUpSvg}
            alt="login_img"
          />
        </div>
      </div>
      <div className="right-login-container">
        <form action="" method="post">
          <div className="setps-container"></div>

          <div className="input-container">
            <input
              type="text"
              name="phoneNumber"
              required={true}
              autoComplete="off"
            />
            <label htmlFor="form-input-phoneNumber">Phone number.</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              required={true}
              autoComplete="off"
            />
            <label htmlFor="form-input-fullName">Enter Your OTP</label>
          </div>
          <Link to="/signUp">
            <span style={{ marginTop: "40px", color: "white" }}>
              Don't have an account? SignUp
            </span>
          </Link>
          <div className="btn-container">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
