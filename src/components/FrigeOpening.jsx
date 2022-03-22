import React from "react";

import Spinner from "./Spiner";
const FridgeOpening = () => {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center flex-column">
      <Spinner />
      <p className="fs-6 mt-3">Холодильник открывается</p>
    </div>
  );
};

export default FridgeOpening;
