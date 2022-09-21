import "../styles/OtpChange.scss";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";
import { checkPassword } from "../apiCalls";

const OtpChange = () => {
  const newPass = useRef();
  const confirmPass = useRef();
  const params = useParams();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPassword = newPass.current.value;
      const confirmPassword = confirmPass.current.value;
      if (newPassword !== confirmPassword)
        throw new Error("Passwords do not match!");
      const data = await checkPassword(params.id, newPassword);
      handleSuccess(data.message);
      history.push("/login");
    } catch (err) {
      console.log(err.data);
      handleError(err.message);
    }
  };

  return (
    <div className="otp_container">
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

      <div className="otp_box">
        <h1>Set New Password</h1>
        <form action="post" onSubmit={handleSubmit}>
          <div className="otp_input-container">
            <input type="text" required ref={newPass} />
            <label htmlFor="form-input-password">New password</label>
          </div>
          <div className="otp_input-container">
            <input type="text" required ref={confirmPass} />
            <label htmlFor="form-input-password">Confirm password</label>
          </div>
          <div className="otp_btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OtpChange;
