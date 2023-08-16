import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.svg";
import hamburgerIcon from "../images/hamburger_icon.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="Little Lemon Logo" />
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
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
