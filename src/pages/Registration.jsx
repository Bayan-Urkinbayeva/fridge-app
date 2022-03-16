import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Registration = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInput = (e) => {
    const copy = { ...data };
    copy[e.target.name] = e.target.value;
    setData(copy);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      window.location = "/";
    }
  }, [errors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Поле имя не может быть пустым";
    }
    if (!values.surname) {
      errors.surname = "Поле фамилия не может быть пустым";
    }
    if (!values.email) {
      errors.email = "Поле почта не может быть пустым";
    } else if (!regex.test(values.email)) {
      errors.email = "Введите корректный адрес";
    }
    if (!values.password) {
      errors.password = "Поле пороль не может быть пустым";
    } else if (values.password.length < 4) {
      errors.password = "Пороль должен быть более 4 символов";
    } else if (values.password.length > 10) {
      errors.password = "Пороль должен быть менее 10 символов";
    }
    return errors;
  };

  return (
    <div className="d-flex align-items-center h-100">
      <main className="form-signin m-auto w-100" style={{ maxWidth: "300px" }}>
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="text-center">🍏</h1>
          <h1 className="h3 mb-3 fw-normal text-center fw-bold">Grab it</h1>
          <label for="name" className="mb-1">
            Имя
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="name"
            name="name"
            value={data.name}
            onChange={handleInput}
          />
          <p className="text-danger">{errors.name}</p>
          <label for="surname" className="mb-1">
            Фамилия
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="surname"
            value={data.surname}
            onChange={handleInput}
            name="surname"
          />
          <p className="text-danger">{errors.surname}</p>
          <label for="email" className="mb-1">
            Почта
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="email"
            name="email"
            onChange={handleInput}
          />
          <p className="text-danger">{errors.email}</p>
          <label for="password" className="mb-1">
            Пароль
          </label>
          <input
            type="password"
            className="form-control mb-2"
            id="password"
            name="password"
            onChange={handleInput}
          />
          <p className="text-danger ">{errors.password}</p>
          <button className="w-100 btn btn-primary mb-4 mt-2" type="submit">
            Зарегистрироваться
          </button>
          <span className="d-flex justify-content-center">
            У вас уже есть аккаунт?
          </span>
          <Link to="/login" className="text-primary text-center">
            <p>Войти</p>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default Registration;
