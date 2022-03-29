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

      const token = data.token;
      console.log(token);
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
    <div className="flex items-center h-full">
      <main className="form-signin m-auto w-full" style={{ maxWidth: "300px" }}>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="text-center">🍏</h1>
          <h1 className="mb-3 font-bold text-center text-[18px]">Grab it</h1>
          <div className="email flex flex-col mb-1">
          <label for="floatingInput" className="mb-2">
            Почта
          </label>
          <input
            type="text"
            className="form-control border-2 mb-2 h-8 w-full outline-none"
            id="floatingInput"
            name="email"
            placeholder="name@example.com"
            onChange={handleInput}
            value={loginData.email}
          />
          </div>
          <p className="text-red-600 text-[14px]">{errors.email}</p>
          <div className="email flex flex-col items-center mt-4">
          <div className=" w-full flex justify-between mb-1">
            <label for="floatingPassword" className="mb-1">
              Пароль
            </label>
            <Link to="/reset-password">
              <p className="text-blue-600 text-center">Забыли пароль?</p>
            </Link>
          </div>
          <input
            type="password"
            className="form-control border-2 h-8 mb-2 w-full outline-none"
            id="floatingPassword"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            value={loginData.password}
          />

          </div>
          <p className="text-red-600 text-[14px] text-start">{errors.password}</p>
          <div className=" mt-4  login w-full flex justify-center">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4" type="submit">
            Войти
          </button>
          </div>
          <span className=" text-slate-400 flex justify-center">
            У вас еще нет аккаунта?
          </span>
          <Link to="/registration" >
            <p className="text-blue-600 text-center">Зарегистрироваться</p>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default Login;
