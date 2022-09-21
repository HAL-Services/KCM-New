import { useState } from "react";
import "../styles/ProfileForm.styles.scss";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profileUpdate } from "../apiCalls";

const ProfileForm = () => {
  const { user, dispatch } = useContext(Context);
  const username = useRef();
  const mobile = useRef();
  const password = useRef();
  const newPassword = useRef();
  const confirmPassword = useRef();
  const history = useHistory();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password.current.value === "") throw new Error("password!");
      if (password.current.value === newPassword.current.value)
        throw new Error("match!");
      if (newPassword.current.value !== confirmPassword.current.value)
        throw new Error("same!");

      await profileUpdate(
        username.current.value ? username.current.value : user.username,
        mobile.current.value ? mobile.current.value : user.mobile,
        password.current.value ? password.current.value : user.password,
        newPassword.current.value,
        user.email,
        user.token
      );
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("User");
      history.push("/login");
    } catch (err) {
      if (err.message === "password!")
        return handleError("Please enter password to update!");
      if (err.message === "same!")
        return handleError("New Password and Confirm Password do not match!");
      if (err.message === "match!")
        return handleError("New Password same as Old Password!");
      if (err.data.error === "Password Invalid")
        return handleError("Old password is wrong");
      return handleError(err.data.error);
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="profile-container">
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
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            autoComplete="off"
            ref={username}
            placeholder={user.username}
          />
          <label htmlFor=" form-input-fullName">New Username</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="mobile"
            autoComplete="off"
            ref={mobile}
            placeholder={user.mobile}
          />
          <label htmlFor=" form-input-phoneNumber">New Mobile Number</label>
        </div>
        <div className="input-container">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            autoComplete="off"
            minLength={8}
            ref={password}
            required
          />
          <label htmlFor="form-input-password">Old Password</label>
        </div>
        <div className="input-container">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            autoComplete="off"
            minLength={8}
            ref={newPassword}
            required
          />
          <label htmlFor="form-input-password">New Password</label>
        </div>

        <div className="input-container">
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            autoComplete="off"
            minLength={8}
            ref={confirmPassword}
            required
          />
          <label htmlFor="form-input-password">Confirm Password</label>
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
