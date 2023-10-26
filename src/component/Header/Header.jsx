import React from "react";
import logo from "../../image/icons8-покемон-96.png";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <h1 className="header__title">Pokemon stats</h1>
    </header>
  );
}
