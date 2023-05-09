import axios from "axios";
import backendURL from "./backendURL";
export default axios.create({
  // baseURL: `http://${localhost}:5000`,
  baseURL: backendURL,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});
