import React from "react";
import styles from "./FoodCard.module.css";

export default function Card(props) {
  const { image, title, price, description, cta, ctaIcon } = props;
  return (
    <article className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.cardContent}>
        <header>
          <h3 className={styles.subTitle}>{title}</h3>
          <h3 className={styles.price}>{price}</h3>
        </header>
        <main>
          <p>{description}</p>
        </main>
        <footer>
          <button className={styles.cta}>
            {cta}
            {ctaIcon && <img src={ctaIcon} alt={cta} />}
          </button>
        </footer>
      </div>
    </article>
  );
}
