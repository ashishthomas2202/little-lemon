import React from "react";
import styles from "./Highlights.module.css";
import Button from "./Button";
import FoodCard from "./FoodCard";
import deliveryIcon from "../images/delivery.svg";
import saladImage from "../images/salad.jpg";
import bruchettaImage from "../images/bruchetta.png";
import lemonDessertImage from "../images/dessert.jpg";

export default function Highlights() {
  const dishes = [
    {
      image: saladImage,
      title: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      cta: "Order a delivery",
      ctaIcon: deliveryIcon,
    },
    {
      image: bruchettaImage,
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      cta: "Order a delivery",
      ctaIcon: deliveryIcon,
    },
    {
      image: lemonDessertImage,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      cta: "Order a delivery",
      ctaIcon: deliveryIcon,
    },
  ];
  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
        <header>
          <h1 className="display-title">This weeks specials!</h1>
          <Button>Online Menu</Button>
        </header>

        <main>
          {dishes.map((dish) => (
            <FoodCard {...dish} />
          ))}
        </main>
      </div>
    </section>
  );
}
