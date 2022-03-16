import React from "react";
import Navbar from "../components/Navbar";
import FridgeOpen from "../components/FridgeOpen";
import Paid from "../components/Paid";
const ScanMe = () => {
  const status = 200;
  return (
    <div className="h-100">
      <Navbar title={"Сканирование"} />
      {status == 200 ? <FridgeOpen /> : <Paid />}
    </div>
  );
};

export default ScanMe;
