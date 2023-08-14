import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard(props) {
  const { image, name, rating, testimony } = props;
  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar />);
  }

  return (
    <article className={styles.card}>
      <header>{stars}</header>
      <main>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </main>
      <footer>
        <p className="paragraph">{testimony}</p>
      </footer>
    </article>
  );
}
