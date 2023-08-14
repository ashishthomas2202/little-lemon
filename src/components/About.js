import React from "react";
import styles from "./About.module.css";
import image1 from "../images/restaurant.jpg";
import image2 from "../images/restaurant1.jpg";
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <article>
        <h1 className="display-title">Little Lemon</h1>
        <h3 className="sub-title">Chicago</h3>
        <p className="paragraph">
          A Little Lemon is a culinary destination that celebrates the vibrancy
          of lemons. Our menu is a testament to the art of infusing zesty
          flavors into every dish. With a dedication to quality and creativity,
          we offer a range of tantalizing lemon-infused delights that captivate
          the senses. From savory entrees to delightful desserts, each bite is
          an exploration of unique tastes. Join us for an unforgettable dining
          experience where every dish is a burst of sunshine and flavor.
        </p>
      </article>
      <article>
        <main className={styles.imageWrapper}>
          <img src={image1} alt="Little lemon restaurant" />
          <img src={image2} alt="Little lemon restaurant" />
        </main>
      </article>
    </section>
  );
}
