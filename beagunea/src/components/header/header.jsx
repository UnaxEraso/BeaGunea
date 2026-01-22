// src/components/header/header.jsx
import React from "react";
import "./header.css";
import Logo from "../img/BeaGunea.png";

const Header = () => {
  return (
    <header className="header-section">
      <img src={Logo} alt="BeaGunea Logo" className="header-logo" />
      <h1 className="header-title">BeaGunea</h1>
    </header>
  );
};

export default Header;
