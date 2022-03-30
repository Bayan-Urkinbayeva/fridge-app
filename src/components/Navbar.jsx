import React from "react";
const Navbar = ({ title }) => {
  return (
    <div className="fixed top-0 z-10 w-full p-3 bg-white flex justify-center items-center border-b-2 ">
      <span className="text-center font-bold">{title}</span>
    </div>
  );
};

export default Navbar;
