import React from "react";
import error from "../assets/error.png";
const Error = () => {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center flex-column">
      <img src={error} style={{ width: "80px", height: "80px" }}></img>
      <p className="fs-6 mt-3" style={{ color: "#f01707" }}>
        Ошибка
      </p>
    </div>
  );
};

export default Error;
