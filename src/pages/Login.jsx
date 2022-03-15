import React from "react";
import { Link } from "react-router-dom";
import { login, setJwt } from "../services/authService";

const Login = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target["login"].value;
    const password = e.target["password"].value;
    try {
      const { data } = await login(email, password);
      const token = data.data.token;
      localStorage.setItem("token", token);
      setJwt();
      if (data.status == false) return alert(data.message);
      window.location = "/";
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="d-flex align-items-center h-100">
      <main className="form-signin m-auto w-100" style={{ maxWidth: "300px" }}>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="h3 mb-3 fw-normal text-center fw-bold">Grab it</h1>
          <label for="floatingInput" className="mb-1">
            Почта
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="floatingInput"
            name="login"
            placeholder="name@example.com"
          />
          <div className="d-flex justify-content-between mb-1">
            <label for="floatingPassword" className="">
              Пароль
            </label>
            <Link to="/reset-password" className="text-primary">
              Забыли пароль?
            </Link>
          </div>
          <input
            type="password"
            className="form-control mb-3"
            id="floatingPassword"
            name="password"
            placeholder="Password"
          />
          <button className="w-100 btn btn-primary mb-4" type="submit">
            Войти
          </button>
          <span className="d-flex justify-content-center">
            У вас еще нет аккаунта?
          </span>
          <Link to="/registration" className="text-primary text-center">
            <p>Зарегистрироваться</p>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default Login;
