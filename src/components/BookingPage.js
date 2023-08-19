import React, { useState, useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import styles from "./BookingPage.module.css";
import image from "../images/restaurant.jpg";
export default function BookingPage() {
  const [fields, setFields] = useState({
    date: { value: "", error: null, touched: false },
    time: { value: "", error: null, touched: false },
    guests: { value: 1, error: null, touched: false },
    occasion: { value: "", error: null, touched: false },
  });

  function initializeTimes() {
    // console.log("time::", fetchData("9/9/2024"));
  }
  function updateTimes() {}

  useEffect(() => {
    initializeTimes();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return [...state, ...action.payload];
        break;
      default:
        return state;
    }
  };
  const [availableTimes, dispatch] = useReducer(reducer, [
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <section className={styles.bookingPage}>
      <div className={styles.container}>
        <article>
          <img src={image} alt="restaurant food" />
        </article>
        <article>
          <h1 className="display-title">Reserve Table</h1>
          <BookingForm
            availableTimes={availableTimes}
            fields={fields}
            setFields={setFields}
          />
        </article>
      </div>
    </section>
  );
}
