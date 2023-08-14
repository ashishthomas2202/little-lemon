import React from "react";
import styles from "./Footer.module.css";
import logo from "../images/logo.svg";
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <article>
          <img src={logo} alt="Little Lemon Logo" />
        </article>
        <article>
          <h3 className="lead-text">Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Onlone</li>
            <li>Login</li>
          </ul>
        </article>
        <article>
          <h3 className="lead-text">Contact</h3>
          <ul>
            <li>123 Citrus Street</li>
            <li>Lemonville, New York</li>
            <li>11357</li>
            <li></li>
            <li>987-654-3210</li>
            <li>service@littlelemon.com</li>
          </ul>
        </article>
        <article>
          <h3 className="lead-text">Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
