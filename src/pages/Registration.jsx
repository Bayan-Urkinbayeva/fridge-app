import React, { useState} from "react";
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

          <label for="phone_number" className="mb-1">
            Номер телефона
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="phone_number"
            name="phone_number"
            value={data.phone_number}
            onChange={handleInput}
          />
          <p className="text-danger">{errors.phone_number}</p>

          <label for="email" className="mb-1">
            Почта
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="email"
            name="email"
            onChange={handleInput}
            value={data.email}
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
            value={data.password}
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
