import React, { useEffect, useState } from "react";
import "./certifications.css";
import {
  TbRosetteDiscountCheckFilled,
  TbArrowUpRight,
  TbZoomIn,
  TbX,
  TbCalendar,
  TbHash,
  TbUser,
} from "react-icons/tb";
import certItbd from "../pic/cert-it-training-bd.png";
import certSimplilearn from "../pic/cert-simplilearn-powerbi.png";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

// Details read from the certificate images; links from Akib_Rahman_Resume.pdf
const CERTS = [
  {
    title: "Business Analysis & Power BI for Beginners",
    issuer: "Simplilearn SkillUp",
    kind: "Declaration of Completion",
    image: certSimplilearn,
    meta: [
      { Icon: TbCalendar, label: "Issued", value: "2 Jan 2026" },
      { Icon: TbHash, label: "Certificate code", value: "10179668" },
    ],
    summary:
      "Online course covering business and software analysis, advanced Excel and Power BI fundamentals, from gathering requirements to building reports.",
    topics: ["Business Analysis", "Software Analysis", "Advanced Excel", "Power BI"],
    link: "https://drive.google.com/file/d/1tX1fDA03VuNMm-JyKBqgmQ4RAeuHjLPS/view?usp=sharing",
  },
  {
    title: "Hands-on SQA & Cyber Security Course",
    issuer: "IT Training BD",
    kind: "Certificate of Completion",
    image: certItbd,
    meta: [
      { Icon: TbHash, label: "Certificate no.", value: "ITB-B28-4920" },
      { Icon: TbUser, label: "Trainer", value: "Sabiul Islam Rashed" },
    ],
    summary:
      "Recognised for stellar performance in hands-on training on software, API, automation and database testing and bug reporting, led by industry professionals.",
    topics: ["Software Testing", "API Testing", "Automation", "Database Testing", "Bug Reporting"],
    link: "https://drive.google.com/drive/folders/17CQjyZzNsSpLc7TPV_eNlbc_PixyQQwh",
  },
];

const Certifications = () => {
  const [open, setOpen] = useState(null); // certificate shown full-size

  // Close the full-size view with Escape, and stop the page scrolling behind it
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

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
            <article
              key={c.title}
              className={`cert${i % 2 ? " cert--flip" : ""}`}
              data-aos="fade-up"
              data-aos-duration="900"
            >
              {/* the certificate itself, like a framed print */}
              <button
                type="button"
                className="cert__frame"
                onClick={() => setOpen(c)}
                aria-label={`View the ${c.title} certificate full size`}
              >
                <span className="cert__ribbon">
                  <TbRosetteDiscountCheckFilled aria-hidden="true" />
                  Certified
                </span>
                <img src={c.image} alt={`${c.kind}: ${c.title}, ${c.issuer}`} loading="lazy" />
                <span className="cert__zoom" aria-hidden="true">
                  <TbZoomIn />
                  View full size
                </span>
              </button>

              {/* details */}
              <div className="cert__body">
                <p className="cert__kind">
                  <span className="certs__dot" aria-hidden="true" />
                  {c.kind}
                </p>
                <h3 className="cert__title">{c.title}</h3>
                <p className="cert__issuer">{c.issuer}</p>

                <dl className="cert__meta">
                  {c.meta.map(({ Icon, label, value }) => (
                    <div key={label}>
                      <dt>
                        <Icon aria-hidden="true" />
                        {label}
                      </dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="cert__summary">{c.summary}</p>

                <ul className="cert__topics" aria-label="Topics covered">
                  {c.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="cert__actions">
                  <button type="button" className="cert__btn" onClick={() => setOpen(c)}>
                    <TbZoomIn aria-hidden="true" />
                    View certificate
                  </button>
                  <a
                    className="cert__link"
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open original
                    <TbArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* full-size viewer */}
      {open && (
        <div
          className="cert-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${open.title} certificate`}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="cert-viewer__close"
            onClick={() => setOpen(null)}
            aria-label="Close"
            autoFocus
          >
            <TbX />
          </button>
          <figure className="cert-viewer__figure" onClick={(e) => e.stopPropagation()}>
            <img src={open.image} alt={`${open.kind}: ${open.title}, ${open.issuer}`} />
            <figcaption>
              {open.title} · {open.issuer}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Certifications;
