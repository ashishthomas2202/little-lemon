import React from "react";
import styles from "./Hero.module.css";
import image from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <img className={styles.background} src={image} alt="restaurant food" />
      <div className={styles.container}>
        <article>
          <header>
            <h1 className="display-title">Little Lemon</h1>
            <h3 className="sub-title">Chicago</h3>
          </header>
          <main>
            <p className="paragraph">
              We are a family owned Mediterranean restaurant, focussed on
              traditional recipes served with a modern twist.
            </p>
          </main>
          <footer>
            <Link to="/booking">
              <Button>Reserve a Table</Button>
            </Link>
          </footer>
        </article>
        <img src={image} alt="restaurant food" />
      </div>
    </section>
  );
}
