import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.uploadcare.com/",
  headers: { Authorization: "8207a55c632e14e908b3" },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return error;
  }
);

export default instance;
