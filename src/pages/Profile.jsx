import React from "react";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar title={"Профиль"} />
      <div className="p-2 pt-5 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
        <p className="h4">Alex Martin</p>
        <p>email@gmail.com</p>
        <button className="btn btn-primary w-25">Выйти</button>
      </div>
      <Navigation />
    </>
  );
};
export default Profile;
