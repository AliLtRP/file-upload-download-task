import axios from "axios";

const instance = axios.create({
  baseURL: "",
  headers: {},
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
