import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users";


export function register(user) {
  return http.post(`${apiEndpoint}/register`, {
    name: user.name,
    surname: user.surname,
    login: user.login,
    phone_number: user.phone_number,
    email: user.email,
    password: user.password
  });
}