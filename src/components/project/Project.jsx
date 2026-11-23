import React from "react";
import "./project.css";
import CardFx from "../common/CardFx";
import { SiJira, SiSelenium, SiGithub } from "react-icons/si";
import { TbChartHistogram, TbFileExcel, TbArrowUpRight } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

// Projects from Akib_Rahman_Resume.pdf (links taken from the resume)
const PROJECTS = [
  {
    title: "Falaq Food — ERP/CRM Software Management",
    category: "Business Analysis · Product",
    summary:
      "Analysed business workflows and pain points to shape a custom ERP/CRM, taking it from requirements and backlog to tested releases.",
    stats: [
      { value: "80+", label: "Requirements" },
      { value: "30+", label: "Backlog items" },
      { value: "400+", label: "Test cases" },
    ],
    tools: ["Jira", "Confluence", "GitHub", "UAT"],
    Icon: SiJira,
    color: "#2684FF",
    link: "https://github.com/Akib078/Falaq_Food_Business_Analysis",
    wide: true,
  },
  {
    title: "Falaq Food E-Commerce — Software Testing",
    category: "QA & Automation",
    summary:
      "End-to-end testing of key storefront workflows, plus a Selenium (Java) suite to speed up regression.",
    stats: [
      { value: "40+", label: "Test cases" },
      { value: "E2E", label: "& UAT" },
    ],
    tools: ["Selenium", "Java", "Jira", "Test Plan"],
    Icon: SiSelenium,
    color: "#43B02A",
    link: "https://github.com/Akib078/Falaq_Food_Storefront_Testing/",
  },
  {
    title: "OLA — Growth & Business Analysis",
    category: "Data Analysis",
    summary:
      "Cleaned ride data and built interactive dashboards on bookings, cancellations and revenue, backed by SQL analysis.",
    stats: [
      { value: "10K+", label: "Ride records" },
      { value: "SQL", label: "Behaviour analysis" },
    ],
    tools: ["Power BI", "SQL", "Excel", "Power Query"],
    Icon: TbChartHistogram,
    color: "#F2C811",
    link: "https://github.com/Akib078/OLA_Data_Analysis",
  },
  {
    title: "Maven Coffee Shop — Data Analysis",
    category: "Data Analysis",
    summary:
      "Turned 150,000 sales rows into an interactive Excel dashboard tracking sales, revenue, product performance and customer trends.",
    stats: [
      { value: "150K", label: "Sales rows" },
      { value: "1", label: "Interactive dashboard" },
    ],
    tools: ["Excel", "Power Query", "Pivot Tables"],
    Icon: TbFileExcel,
    color: "#21A366",
    link: "https://github.com/Akib078/Maven_Coffee_Analysis",
    wide: true,
  },
];

// Soft spotlight that follows the mouse inside a card
const trackSpotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Project = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <header className="projects__head" data-aos="fade-up" data-aos-duration="1000">
          <span className="projects__eyebrow">
            <span className="projects__dot" aria-hidden="true" />
            Projects
          </span>
          <h2 className="projects__title">
            Featured <span>Projects</span>
          </h2>
          <p className="projects__summary">
            Real work across business analysis, QA and data: from requirements and test suites
            to dashboards that drive decisions.
          </p>
        </header>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`project-card${p.wide ? " project-card--wide" : ""}`}
              style={{ "--brand": p.color }}
              onMouseMove={trackSpotlight}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={(i % 2) * 120}
            >
              <CardFx seed={i + 2} count={7} />
              <span className="project-card__spotlight" aria-hidden="true" />
              <p.Icon className="project-card__watermark" aria-hidden="true" />

              <div className="project-card__body">
                <div className="project-card__top">
                  <span className="project-card__category">
                    <span className="projects__dot" aria-hidden="true" />
                    {p.category}
                  </span>
                  <span className="project-card__num">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <span className="project-card__icon" aria-hidden="true">
                  <p.Icon />
                </span>

                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__summary">{p.summary}</p>

                <dl className="project-card__stats">
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <dt>{s.value}</dt>
                      <dd>{s.label}</dd>
                    </div>
                  ))}
                </dl>

                <div className="project-card__footer">
                  <ul className="project-card__tools" aria-label="Tools used">
                    {p.tools.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a
                    className="project-card__link"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    <SiGithub aria-hidden="true" />
                    View project
                    <TbArrowUpRight className="project-card__arrow" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more" data-aos="fade-up" data-aos-duration="900">
          <a href="https://github.com/Akib078" target="_blank" rel="noopener noreferrer">
            <SiGithub aria-hidden="true" />
            See more on GitHub
            <TbArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
