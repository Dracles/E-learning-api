import React from "react";
import "./navbar.css";
import { GrPowerShutdown } from "react-icons/gr";
import { logout } from "../../helpers";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">Logo</div>
        <div className="navbar-msg">
          <GrPowerShutdown
            onClick={() => {
              logout();
              history.push("/login");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
