import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
const Profile = () => {
  return (
    <div>
      <Navbar title={"Профиль"} />
      <button className="btn btn-primary">Выйти</button>
      <Navigation />
    </div>
  );
};
export default Profile;
