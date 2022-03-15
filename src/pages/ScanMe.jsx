import React from "react";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import FridgeOpen from "../components/FridgeOpen";
import Paid from "../components/Paid";
import Error from "../components/Error";
import done from "../assets/done.png";
import spinner from "../assets/spinner.gif";
const ScanMe = () => {
  const status = 200;
  return (
    <div className="h-100">
      <Navbar title={"Сканирование"} />
      {status == 200 ? <FridgeOpen /> : <Paid />}
      {/* <Navigation /> */}
    </div>
  );
};

export default ScanMe;
