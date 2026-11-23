import React from "react";
import "./cardfx.css";

// Card backdrop (style based on asterot.com's featured card): shifting yellow-tinted
// gradient, two soft floating orbs and small glowing dots rising through the card.
const CardFx = ({ seed = 0, count = 10 }) => (
  <>
    <span className="fx__gradient" aria-hidden="true" />
    <span className="fx__orb fx__orb--a" aria-hidden="true" />
    <span className="fx__orb fx__orb--b" aria-hidden="true" />
    <span className="fx__particles" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const k = i + seed * 3;
        return (
          <span
            key={i}
            className="fx__particle"
            style={{
              left: `${(6 + k * 37) % 94}%`,
              "--size": `${3 + (k % 3)}px`,
              "--alpha": 0.4 + ((k * 11) % 40) / 100,
              "--delay": `${(k * 1.7) % 12}s`,
              "--dur": `${9 + ((k * 5) % 7)}s`,
              "--drift": `${(k % 2 ? -1 : 1) * (8 + ((k * 3) % 15))}px`,
            }}
          />
        );
      })}
    </span>
  </>
);

export default CardFx;
