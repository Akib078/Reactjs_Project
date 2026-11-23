import React from "react";
import "./certifications.css";
import {
  TbRosetteDiscountCheckFilled,
  TbCertificate,
  TbArrowUpRight,
  TbSchool,
  TbWorld,
} from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

// From Akib_Rahman_Resume.pdf ("Courses & Certifications"), with the certificate links in it
const CERTS = [
  {
    title: "Business Analysis and Power BI Complete Course",
    issuer: "Simplilearn",
    mode: "Online",
    ModeIcon: TbWorld,
    summary:
      "Business and software analysis, advanced Excel and Power BI fundamentals: from gathering requirements to building reports.",
    topics: ["Business Analysis", "Software Analysis", "Advanced Excel", "Power BI"],
    link: "https://drive.google.com/file/d/1tX1fDA03VuNMm-JyKBqgmQ4RAeuHjLPS/view?usp=sharing",
  },
  {
    title: "SQA Training Course",
    issuer: "IT Training BD",
    mode: "Remote",
    ModeIcon: TbSchool,
    summary:
      "Hands-on training in software, API, automation and database testing and bug reporting, guided by experienced industry professionals.",
    topics: ["Software Testing", "API Testing", "Automation", "Database Testing", "Bug Reporting"],
    link: "https://drive.google.com/drive/folders/17CQjyZzNsSpLc7TPV_eNlbc_PixyQQwh",
  },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Gentle 3D tilt that follows the mouse
const tilt = (e) => {
  if (prefersReducedMotion()) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--ry", `${x * 8}deg`);
  el.style.setProperty("--rx", `${-y * 8}deg`);
};
const resetTilt = (e) => {
  e.currentTarget.style.setProperty("--ry", "0deg");
  e.currentTarget.style.setProperty("--rx", "0deg");
};

const Certifications = () => {
  return (
    <section id="certifications" className="certs">
      <div className="certs__inner">
        <header className="certs__head" data-aos="fade-up" data-aos-duration="1000">
          <span className="certs__eyebrow">
            <span className="certs__dot" aria-hidden="true" />
            Always learning
          </span>
          <h2 className="certs__title">
            Courses <span>&amp;</span> Certifications
          </h2>
        </header>

        <div className="certs__list">
          {CERTS.map((c, i) => (
            <div
              className="cert-wrap"
              key={c.title}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={i * 150}
            >
              <article className="cert" onMouseMove={tilt} onMouseLeave={resetTilt}>
                <span className="cert__shine" aria-hidden="true" />

                {/* left stub: the seal */}
                <div className="cert__stub">
                  <span className="cert__seal" aria-hidden="true">
                    <TbRosetteDiscountCheckFilled />
                  </span>
                  <span className="cert__stamp">Certified</span>
                  <span className="cert__no">No. {String(i + 1).padStart(2, "0")}</span>
                </div>

                {/* perforated tear line */}
                <span className="cert__perf" aria-hidden="true" />

                {/* main body */}
                <div className="cert__body">
                  <p className="cert__issuer">
                    <TbCertificate aria-hidden="true" />
                    {c.issuer}
                    <span className="cert__mode">
                      <c.ModeIcon aria-hidden="true" />
                      {c.mode}
                    </span>
                  </p>
                  <h3 className="cert__title">{c.title}</h3>
                  <p className="cert__summary">{c.summary}</p>
                  <ul className="cert__topics" aria-label="Topics covered">
                    {c.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a
                    className="cert__link"
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View certificate: ${c.title}`}
                  >
                    View certificate
                    <TbArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
