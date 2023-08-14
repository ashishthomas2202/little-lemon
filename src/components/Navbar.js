import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.svg";
import hamburgerIcon from "../images/hamburger_icon.svg";
function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="Little Lemon Logo" />
        <ul className={styles.navLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <button className={styles.hamburger}>
          <img src={hamburgerIcon} alt="hamburger icon" />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
