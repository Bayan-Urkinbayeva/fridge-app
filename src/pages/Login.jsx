import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login, setJwt } from "../services/authService";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(loginData);
    setErrors(errors);
    if(Object.keys(errors).length!=0) return;

    try {
      const { data } = await login(loginData.email, loginData.password);
      console.log(data);
      if (data.status == false) {
        setErrors({ email: data.message });
        return;
      }
      const token = data.data.token;
      localStorage.setItem("token", token);
      setJwt();
      window.location = "/";
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleInput = (e) => {
    const copy = { ...loginData };
    copy[e.target.name] = e.target.value;
    setLoginData(copy);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Введите почту";
    } else if (!regex.test(values.email)) {
      errors.email = "Введите корректный адрес";
    }
    if (!values.password) {
      errors.password = "Введите пороль";
    }
    return errors;
  };

  return (
    <div className="d-flex align-items-center h-100">
      <main className="form-signin m-auto w-100" style={{ maxWidth: "300px" }}>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="text-center">🍏</h1>
          <h1 className="h3 mb-3 fw-normal text-center fw-bold">Grab it</h1>
          <label for="floatingInput" className="mb-1">
            Почта
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="floatingInput"
            name="email"
            placeholder="name@example.com"
            onChange={handleInput}
            value={loginData.email}
          />
          <p className="text-danger">{errors.email}</p>
          <div className="d-flex justify-content-between mb-1">
            <label for="floatingPassword" className="mb-1">
              Пароль
            </label>
            <Link to="/reset-password" className="text-primary">
              Забыли пароль?
            </Link>
          </div>
          <input
            type="password"
            className="form-control mb-2"
            id="floatingPassword"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            value={loginData.password}
          />
          <p className="text-danger">{errors.password}</p>
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
