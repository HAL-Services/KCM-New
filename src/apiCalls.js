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
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(getApiUrl("/login"), {
      email: email,
      password: password,
    });
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const signUpUser = async (username, email, password, mobile) => {
  try {
    const response = await axios.post(getApiUrl("/signup"), {
      username: username,
      email: email,
      mobile: mobile,
      password: password,
    });
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const profileUpdate = async (
  username,
  mobile,
  password,
  newPassword,
  email,
  token
) => {
  try {
    const data = {
      username: username,
      mobile: mobile,
      password: password,
      newPassword: newPassword,
      email: email,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(getApiUrl("/users/update"), data, config);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.get(getApiUrl("/users/forgot"), {
      email: email,
    });
    const link = `http://localhost:3000/${response.data}`;
    return Promise.resolve(link);
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const checkPassword = async (id, newPass, confirmPass) => {
  try {
    const response = await axios.post(getApiUrl("/users/check"), {
      id: id,
      newPass: newPass,
    });
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
};
