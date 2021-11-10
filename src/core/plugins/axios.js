import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = `http://127.0.0.1:8000/api/`;
axiosInstance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axiosInstance.defaults.headers.common[
//   "X-localization"
// ] = window.localStorage.getItem("locale")
//   ? window.localStorage.getItem("locale")
//   : "ar";

// axiosInstance.interceptors.response.use(null, error => {
//   if (error.response.status == 401) {
//     store.commit("logout");
//   }
//   return Promise.reject(error);
// });

window.$axios = axiosInstance;

export default axiosInstance;
