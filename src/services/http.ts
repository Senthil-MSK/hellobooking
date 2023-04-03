import axios from 'axios';

const headers = {
  "Content-type": "application/json",
  accept: "application/json",
  // 'Access-Control-Allow-Origin' : 'http://localhost:3000/',
  // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use((config: any) => {

  if (localStorage.getItem("token")) {
    if (config?.headers) config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  if (config?.data?.params?.use_form_data || config?.params?.use_form_data) {
    if (config?.headers) config.headers["Content-Type"] = "application/x-www-form-urlencoded";
  }

  delete config?.params;
  delete config?.data?.params;

  return config;
});

axios.interceptors.response.use(
  (response: any) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000/';
    // response.headers['Access-Control-Allow-Credentials'] = true
    return response;
  },
  function (error: any) {
    if (error?.response?.status === 401 && window.location.pathname !== "/login") {

      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");  // login time
      // if (window.location.pathname !== "/login" && window.location.pathname !== "/404") {
      //   window.localStorage.setItem("prevPath", window.location.href);
      // }
      window.location.pathname = "/404";
      
    }
    //something with error
    return Promise.reject(error);
  }
);
 

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  headers,
};
