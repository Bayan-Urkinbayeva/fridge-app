import React from "react";
import spinner from "../assets/spinner.gif";
const FridgeOpen = () => {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center flex-column">
      <img src={spinner} style={{ width: "80px", height: "80px" }}></img>
      <p className="fs-6 mt-3" style={{ color: "#7cb342" }}>
        Холодильник открыт
      </p>
    </div>
  );
};

export default FridgeOpen;
