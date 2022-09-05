import { useState } from "react";
import "../styles/ProfileForm.styles.scss";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
const ProfileForm = () => {
  const { user, dispatch } = useContext(Context);
  const username = useRef();
  const mobile = useRef();
  const password = useRef();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const data = {
      username: username.current.value,
      mobile: mobile.current.value,
      password: password.current.value,
    };
    try {
      await axios.post("http://localhost:5000/users/update", data, config);
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("User");
      history.push("/login");
    } catch (err) {
      console.log(err.message);
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            required={true}
            autoComplete="off"
            ref={username}
          />
          <label htmlFor=" form-input-fullName">New Username</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="mobile"
            required={true}
            autoComplete="off"
            ref={mobile}
          />
          <label htmlFor=" form-input-phoneNumber">New Mobile Number</label>
        </div>
        <div className="input-container">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            required={true}
            autoComplete="off"
            ref={password}
          />
          <label htmlFor="form-input-password">New Password</label>
        </div>

        <label htmlFor="form-input-showPassword" className="profile__showPass">
          <input
            type="checkbox"
            className="profile__inPass"
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
          />
          Show Password
        </label>

        <div className="profile__btn-container">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};
export default ProfileForm;
