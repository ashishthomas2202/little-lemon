import React, { useState, useEffect } from "react";
import _ from "lodash";
import styles from "./BookingForm.module.css";

export default function BookingForm({ availableTimes, fields, setFields }) {
  const checkErrors = () => {
    let errors = {};
    Object.keys(fields).forEach((fieldName) => {
      if (fields[fieldName]?.error !== null) {
        errors[fieldName] = fields[fieldName].error;
      } else if (
        !fields[fieldName]?.touched &&
        fields[fieldName]?.value === ""
      ) {
        setFields({
          ...fields,
          [fieldName]: {
            ...fields[fieldName],
            error: `${_.capitalize(fieldName)} is required`,
          },
        });
      }
    });
    return Object.keys(errors).length > 0 ? errors : null;
  };

  const flagErrors = () => {
    let updatedFields = { ...fields };
    Object.keys(updatedFields).forEach((fieldName) => {
      updatedFields[fieldName].touched = true;
    });
    setFields({ ...updatedFields });
  };

  const handleChange = (e) =>
    setFields({
      ...fields,
      [e.target.name]: {
        ...fields[e.target.name],
        value: e.target.value,
      },
    });

  const handleBlur = (e) => {
    let fieldData = {
      [e.target.name]: { ...fields[e.target.name], touched: true },
    };
    if (fields[e.target.name]?.value === "") {
      fieldData[e.target.name].error = `${_.capitalize(
        e.target.name
      )} is required`;
    } else {
      fieldData[e.target.name].error = null;
    }
    setFields({
      ...fields,
      ...fieldData,
    });
  };

  useEffect(() => {
    checkErrors();
  }, [fields]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = checkErrors();
    if (errors) {
      console.log("Error", errors);
      flagErrors();
    } else {
      console.log("form submitted", fields);
    }
  };

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <label className="lead-text" htmlFor="res-date">
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={fields.date.value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {fields.date.error && fields.date.touched && <p>{fields.date.error}</p>}
      <label className="lead-text" htmlFor="res-time">
        Choose time
      </label>
      <select
        id="res-time "
        name="time"
        value={fields.time.value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option hidden>Select Time</option>
        {availableTimes.map((time, i) => (
          <option key={time + i}>{time}</option>
        ))}
      </select>
      {fields.time.error && fields.time.touched && <p>{fields.time.error}</p>}

      <label className="lead-text" htmlFor="guests">
        Number of guests
      </label>
      <input
        type="number"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={fields.guests.value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {fields.guests.error && fields.guests.touched && (
        <p>{fields.guests.error}</p>
      )}

      <label className="lead-text" htmlFor="occasion">
        Occasion
      </label>
      <select
        id="occasion"
        name="occasion"
        value={fields.occasion.value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option hidden>Select Occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {fields.occasion.error && fields.occasion.touched && (
        <p>{fields.occasion.error}</p>
      )}

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
