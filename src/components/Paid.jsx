import React from "react";
import done from "../assets/done.png";
const Paid = () => {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center flex-column">
      <img src={done} style={{ width: "80px", height: "80px" }}></img>
      <p className="fs-6 mt-3" style={{ color: "#7cb342" }}>
        Покупка завершена
      </p>
    </div>
  );
};

export default Paid;
