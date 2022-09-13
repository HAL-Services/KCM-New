// let production = process.env.REACT_APP_PRODUCTION;
let testing = process.env.REACT_APP_DEV_SERVER;
const port = 5000;

// development url for herokuapp
//example testingURL = "https://app-name.herokuapp.com/";

export const API_HOSTNAME = testing
  ? `http://localhost:${port}`
  : console.log("No connection");

export const getApiUrl = (url) => `${API_HOSTNAME}${url}`;
