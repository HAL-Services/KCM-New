import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:5000/login",
      userCredentials
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
