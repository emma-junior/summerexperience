import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <img className="logo" src={logo} alt="logo" />
        <div>
          <button className="navbar-btn">
            <a href="https://selar.co/SummerExperience">Register Now!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
