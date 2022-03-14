import React from "react";
import { Link } from "react-router-dom";
import { login, setJwt } from "../services/authService";

const Login = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target["login"].value;
    const password = e.target["password"].value;
    try{
        const {data} = await login(email, password);
        const token = data.data.token;
        localStorage.setItem('token', token);
        setJwt();
        window.location="/";
    }
    catch(ex){
        console.log(ex);
    }
  };
  return (
    <div className="d-flex align-items-center h-100">
      <main className="form-signin m-auto w-100" style={{ maxWidth: "330px" }}>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="h3 mb-3 fw-normal  text-center">Grab it</h1>
          <label for="floatingInput" className="mb-1">
            Почта
          </label>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="login"
            placeholder="name@example.com"
          />
          <div className="d-flex justify-content-between">
            <label for="floatingPassword" className="mt-3">
              Пароль
            </label>
            <Link to="/reset-password" className="text-primary mt-3">
              Забыли пароль?
            </Link>
          </div>
          <input
            type="password"
            className="form-control mt-2"
            id="floatingPassword"
            name="password"
            placeholder="Password"
          />
          <button className="w-100 btn btn-lg btn-primary my-3" type="submit">
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
