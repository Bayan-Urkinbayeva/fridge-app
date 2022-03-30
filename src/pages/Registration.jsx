import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setJwt } from "../services/authService";
import { register } from "../services/userService";
const Registration = () => {
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const copy = { ...data };
    copy[e.target.name] = e.target.value;
    setData(copy);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(data));
    const errors = validate(data);
    if (Object.keys(errors).length === 0) {
      try {
        const body = {
          name: data.name,
          phone_number: data.phone_number,
          email: data.email,
          password: data.password,
        };

        console.log(body);
        const response = await register(body);
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        setJwt();
      } catch (ex) {
        console.log(ex);
      }
      window.location = "/";
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Поле имя не может быть пустым";
    }
    if (!values.phone_number) {
      errors.phone_number = "Поле номер телефона не может быть пустым";
    } else if (values.phone_number.length !== 11) {
      errors.phone_number = "Неправильный номер телефона";
    }
    if (!values.email) {
      errors.email = "Поле почта не может быть пустым";
    } else if (!regex.test(values.email)) {
      errors.email = "Введите корректный адрес";
    }
    if (!values.password) {
      errors.password = "Поле пороль не может быть пустым";
    } else if (values.password.length < 8) {
      errors.password = "Пороль должен быть более 8 символов";
    }
    return errors;
  };

  return (
    <div className="flex items-center h-full">
      <main className="form-signin m-auto w-full" style={{ maxWidth: "300px" }}>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="text-center">🍏</h1>
          <h1 className="mb-3 text-center font-bold text-[18px]">Grab it</h1>
          <label for="name" className="mb-1">
            Имя
          </label>
          <input
            type="text"
            className="form-control border-2 mb-2 h-8 w-full outline-none"
            id="name"
            name="name"
            value={data.name}
            onChange={handleInput}
          />
          <p className="text-red-600 text-[14px]">{errors.name}</p>

          <label for="phone_number" className="mb-1">
            Номер телефона
          </label>
          <input
            type="text"
            className="form-control border-2 mb-2 h-8 w-full outline-none"
            id="phone_number"
            name="phone_number"
            value={data.phone_number}
            onChange={handleInput}
          />
          <p className="text-red-600 text-[14px]">{errors.phone_number}</p>

          <label for="email" className="mb-1">
            Почта
          </label>
          <input
            type="text"
            className="form-control border-2 mb-2 h-8 w-full outline-none"
            id="email"
            name="email"
            onChange={handleInput}
            value={data.email}
          />
          <p className="text-red-600 text-[14px]">{errors.email}</p>

          <label for="password" className="mb-1">
            Пароль
          </label>
          <input
            type="password"
            className="form-control border-2 mb-2 h-8 w-full outline-none"
            id="password"
            name="password"
            onChange={handleInput}
            value={data.password}
          />
          <p className="text-red-600 text-[14px] ">{errors.password}</p>
          <div className=" mt-4  login w-full flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4 mt-2" type="submit">
            Зарегистрироваться
          </button>
          </div>
          <span className="text-slate-400 flex justify-center">
            У вас уже есть аккаунт?
          </span>
          <Link to="/login" >
            <p className="text-blue-600 text-center">Войти</p>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default Registration;
