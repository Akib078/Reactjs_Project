import React from "react";
import "./bubbles.css";

// Small floating bubbles (same look as around the Home photo and in the certificate cards).
// Put it inside a card that has position: relative; content should sit above it.
const Bubbles = ({ reverse = false }) => (
  <span className={`bubbles${reverse ? " bubbles--reverse" : ""}`} aria-hidden="true">
    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
      <span key={n} className={`bubble bubble--${n}`} />
    ))}
  </span>
);

export default Bubbles;
