import http from "./httpService";

const apiEndpoint = process.env.REACT_APP_API_URL + "/users";

export function getUsers(query) {
  return http.get(`${apiEndpoint}?query=${query}`);
}

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
  });
}