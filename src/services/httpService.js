import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log(error);
  }
  return Promise.reject(error);
});
function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
  console.log(jwt);
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setJwt,
};