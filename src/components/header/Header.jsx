import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../pic/logo.png";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const lastY = useRef(0);

  // Darker on scroll; hide while scrolling down, show again when scrolling up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Underline follows the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const shellClass = [
    "navbar-shell",
    scrolled && "is-scrolled",
    hidden && !open && "is-hidden",
    open && "is-open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={shellClass}>
      <nav className="navbar-pill" aria-label="Main navigation">
        <a href="#home" className="navbar-brand" aria-label="Akib Rahman, back to top">
          <span
            className="navbar-logo"
            role="img"
            aria-label="Akib Rahman"
            style={{ "--logo-url": `url(${logo})` }}
          />
        </a>

        <ul className="navbar-links">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={`nav-link${active === id ? " is-active" : ""}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`navbar-toggle${open ? " is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>

      <div id="mobile-menu" className="mobile-menu">
        {LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "is-active" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
