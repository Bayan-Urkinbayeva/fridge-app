import React from "react";
import { Link } from "react-router-dom";
import done from "../assets/done.png";
const FridgeClosed = () => {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center flex-column">
      <svg
        style={{ color: "#7cb342" }}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        class="bi bi-check-circle"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
      </svg>
      <p className="fs-6 mt-3" style={{ color: "#7cb342" }}>
        Покупка завершена
      </p>
      <Link to="/orders">
        <button className="btn btn-sm btn-outline-primary">К покупкам</button>
      </Link>
    </div>
  );
};

export default FridgeClosed;
