import React, {useState, useEffect} from "react";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import { getUser } from "../services/userService";
import { logout } from "../services/authService";
const Profile = () => {
  const [userData, setUserData] = useState({});
  useEffect(async () => {
    const res = await getUser();
    console.log(res);
    setUserData(res.data.data);
  }, []);
  const handleClick = () => {
    logout();
    window.location = "/login";
  }
  return (
    <>
      <Navbar title={"Профиль"} />
      <div className="p-2 pt-5 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
        <p className="h4">{userData.name}</p>
        <p>Balance: {userData.balance}</p>
        <p> Phone number:  {userData.phone_number}</p>
        <p> Email: {userData.email}</p>
        <button onClick={handleClick} className="btn btn-primary w-25">Выйти</button>
      </div>
      <Navigation />
    </>
  );
};
export default Profile;
