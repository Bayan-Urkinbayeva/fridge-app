import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faUser } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div class="container fixed bottom-0 bg-white border-t-2 px-3 py-2">
      <div class="row flex items-center justify-around font-bold">
        <div class="col">
          <NavLink to="/" className="flex flex-col items-center ">
            <FontAwesomeIcon icon={faMap} className="icon" />
            <span style={{ fontSize: "14px" }}>Карта</span>
          </NavLink>
        </div>
        <div class="col">
          <NavLink
            to="/orders"
            className="flex flex-col items-center"
          >
            <FontAwesomeIcon icon={faList} className="icon" />
            <span style={{ fontSize: "14px" }}>Покупки</span>
          </NavLink>
        </div>
        <div class="col">
          <NavLink
            to="/profile"
            className="flex flex-col items-center"
          >
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span style={{ fontSize: "14px" }}>Профиль</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
