import React from "react";
import "./home.css";
import hero from "../pic/hero.jpg";
import cv from "../pic/Akib_Rahman_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const Home = () => {
  return (
    <section id="home" className="home">
      {/* soft yellow glows in the background (replace the old white blob image) */}
      <span className="home__glow home__glow--left" aria-hidden="true" />
      <span className="home__glow home__glow--right" aria-hidden="true" />

      <div className="home__container">
        <div className="home__photo-wrap">
          {/* faint concentric rings behind the photo (style based on tenels.com) */}
          <span className="home__rings" aria-hidden="true" />
          {/* small floating bubbles around the photo */}
          <span className="home__bubbles" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <span key={n} className={`home__bubble home__bubble--${n}`} />
            ))}
          </span>
          <div className="home__photo-frame">
            <img
              className="home__photo"
              src={hero}
              alt="Portrait of Akib Rahman"
              width="300"
              height="300"
              fetchpriority="high"
            />
          </div>
        </div>

        <div className="home__text">
          <h1 className="home__title" data-aos="fade-up" data-aos-duration="1500">
            Hello! I am <span className="home__name">Akib.</span>
          </h1>
          <p className="home__title home__role" data-aos="fade-up" data-aos-duration="1500">
            A{" "}
            <span>
              <Typewriter
                words={["Product Manager.", "QA Engineer.", "Business Analyst."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="home__subtitle" data-aos="fade-up" data-aos-duration="2000">
            Welcome to my personal portfolio. Hope you will like it!
          </p>
          <div className="home__actions" data-aos="fade-up" data-aos-duration="2500">
            <a href={cv} download="Akib_Rahman_Resume.pdf" className="home__button">
              My Resume
            </a>
            <a href="#projects" className="home__button home__button--ghost">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
