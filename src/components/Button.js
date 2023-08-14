import React from "react";
import "./Button.css";

export default function Button(props) {
  const { children, className, ...rest } = props;
  return (
    <button className="default-btn" {...rest}>
      {children}
    </button>
  );
}
