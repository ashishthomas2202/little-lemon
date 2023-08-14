import React from "react";
import styles from "./Testimonials.module.css";
import anneImage from "../images/anne_hathaway.webp";
import kristenImage from "../images/kristen_bell.webp";
import michaelImage from "../images/michael_jordan.webp";
import ryanImage from "../images/ryan_reynolds.webp";
import TestimonialCard from "./TestimonialCard";
export default function Testimonials() {
  const testimonies = [
    {
      image: anneImage,
      name: "Anne Hathaway",
      rating: 5,
      testimony:
        "Delightful Experience! The unique lemon-infused dishes are a burst of flavor. Can't wait to return!",
    },
    {
      image: kristenImage,
      name: "Kristen Bell",
      rating: 3,
      testimony:
        "A Taste Sensation! The lemon-infused creations are artful and delicious. The lemon desserts were a perfect ending.",
    },
    {
      image: michaelImage,
      name: "Michael Jordan",
      rating: 4,
      testimony:
        "Hidden Gem! Cozy ambiance, friendly staff, and zesty lemon-inspired menu. Loved the lemon herb grilled chicken!",
    },
    {
      image: ryanImage,
      name: "Ryan Reynolds",
      rating: 5,
      testimony:
        "Zesty Perfection! A Little Lemon's creative lemon-infused menu is a flavor explosion. Every dish tells a delightful story.",
    },
  ];
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <header>
          <h1 className="display-title">Testimonials</h1>
        </header>
        <main>
          {testimonies.map((testimony) => (
            <TestimonialCard {...testimony} />
          ))}
        </main>
      </div>
    </section>
  );
}
