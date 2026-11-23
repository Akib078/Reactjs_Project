import React from "react";
import "./sparkles.css";

// Twinkling four-point star sparkles (used in the Contact section and the Education cards).
// list: [x %, y %, size px, tone ("v" violet, "c" cyan, "p" pink), animation delay s]
// layer: wrap them in their own clipped layer that fills the parent card
const Sparkles = ({ list, layer = false }) => {
  const stars = list.map(([x, y, size, tone, delay], i) => (
    <span
      key={i}
      className={`sparkle sparkle--${tone}`}
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${delay}s` }}
    />
  ));
  return layer ? (
    <span className="sparkles" aria-hidden="true">
      {stars}
    </span>
  ) : (
    stars
  );
};

export default Sparkles;
