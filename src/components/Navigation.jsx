import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faUser } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div class="container fixed-bottom bg-light border-top px-3 py-2">
      <div class="row align-items-center fw-bold">
        <div class="col">
          <NavLink to="/" className="d-flex flex-column align-items-center ">
            <FontAwesomeIcon icon={faMap} className="icon" />
            <span style={{ fontSize: "14px" }}>Карта</span>
          </NavLink>
        </div>
        <div class="col">
          <NavLink
            to="/orders"
            className="d-flex flex-column align-items-center"
          >
            <FontAwesomeIcon icon={faList} className="icon" />
            <span style={{ fontSize: "14px" }}>Покупки</span>
          </NavLink>
        </div>
        <div class="col">
          <NavLink
            to="/profile"
            className="d-flex flex-column align-items-center"
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
