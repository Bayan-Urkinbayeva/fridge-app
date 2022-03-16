import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users";


export function register(user) {
  return http.post(`${apiEndpoint}/register`, user);
}