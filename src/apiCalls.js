import axios from "axios";
import { getApiUrl } from "./baseConstants";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(getApiUrl("/login"), userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

export const fetchTestimonialData = async () => {
  try {
    const response = await axios.get(getApiUrl("/reviews/filtered"));
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
