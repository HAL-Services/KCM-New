import { useState } from "react";
import "../styles/ProfileForm.styles.scss";
const ProfileForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="profile-container">
      <form action="" method="post">
        <div className="input-container">
          <input
            type="text"
            name="fullName"
            required={true}
            autoComplete="off"
          />
          <label htmlFor=" form-input-fullName">Full Name</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="carNumberr"
            required={true}
            autoComplete="off"
          />
          <label htmlFor=" form-input-phoneNumber">Phone Number</label>
        </div>
        <div className="input-container">
          <input
            type={passwordShown ? "text" : "password"}
            name="carNumberr"
            required={true}
            autoComplete="off"
          />
          <label htmlFor="form-input-password">Password</label>
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
