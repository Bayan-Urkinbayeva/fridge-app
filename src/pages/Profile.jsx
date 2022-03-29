import React, {useState, useEffect} from "react";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import { getUser } from "../services/userService";
import { logout } from "../services/authService";
import "./Profile.css";
const Profile = () => {
  const [userData, setUserData] = useState({});
  useEffect(async () => {
    const res = await getUser();
    console.log(res);
    setUserData(res.data);
  }, []);
  const handleClick = () => {
    logout();
    window.location = "/login";
  }
  return (
    <>
      <Navbar title={"Профиль"} />
      <div className="profile h-full w-full flex justify-center items-center">
      <div className="info flex flex-col justify-center items-center text-center">
        <div className="user_img"></div>
        <p className="h4 pt-2">{userData.name}</p>
        <div className="user_info">
          <div className="user_number flex justify-around">
            <p>Номер телефона:</p>
            <p>{userData.phone_number}</p>
          </div>
          <div className="user_email flex justify-around">
            <p>Почта:</p>
            <p>{userData.email}</p>
          </div>
        </div>
        <button onClick={handleClick}  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4" type="submit">
            Выйти
          </button>
      </div>
      </div>
      <Navigation />
    </>
  );
};
export default Profile;
