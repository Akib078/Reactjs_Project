import React, { useEffect, useRef } from "react";
import "./dotgrid.css";

// Faint dot-grid background (style based on tenels.com). Dots near the mouse light up yellow.
// Put it as the first child of a section that has position: relative.
const DotGrid = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const host = el && el.parentElement;
    if (!host) return undefined;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--px", `${e.clientX - r.left}px`);
      el.style.setProperty("--py", `${e.clientY - r.top}px`);
    };
    const leave = () => {
      el.style.setProperty("--px", "-999px");
      el.style.setProperty("--py", "-999px");
    };
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => {
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <span className="dotgrid" ref={ref} aria-hidden="true">
      <span className="dotgrid__lit" />
    </span>
  );
};

export default DotGrid;
