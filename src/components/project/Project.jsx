import React from "react";
import "./project.css";
import CardFx from "../common/CardFx";
import {
  SiJira,
  SiSelenium,
  SiGithub,
  SiConfluence,
  SiFigma,
  SiPostman,
  SiGoogledocs,
  SiJavascript,
  SiApachejmeter,
} from "react-icons/si";
import {
  TbChartHistogram,
  TbFileExcel,
  TbSql,
  TbArrowUpRight,
  TbTerminal2,
} from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

// Tool logos (brand colours) shown on the project cards
const T = {
  confluence: { name: "Confluence", Icon: SiConfluence, color: "#2684FF" },
  jira: { name: "Jira", Icon: SiJira, color: "#2684FF" },
  github: { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  figma: { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  selenium: { name: "Selenium", Icon: SiSelenium, color: "#43B02A" },
  excel: { name: "Excel", Icon: TbFileExcel, color: "#21A366" },
  postman: { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  powerbi: { name: "Power BI", Icon: TbChartHistogram, color: "#F2C811" },
  sql: { name: "SQL", Icon: TbSql, color: "#4FA3E0" },
  docs: { name: "Google Docs", Icon: SiGoogledocs, color: "#4285F4" },
  javascript: { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  newman: { name: "Newman", Icon: TbTerminal2, color: "#E6E6EA" },
  jmeter: { name: "JMeter", Icon: SiApachejmeter, color: "#D22128" },
};

// Projects from Akib_Rahman_Resume.pdf (links taken from the resume)
const PROJECTS = [
  {
    title: "Falaq Food — ERP/CRM Software Management",
    category: "Business Analysis · Product Management",
    summary:
      "Analysed business workflows and pain points to shape a custom ERP/CRM, taking it from requirements and backlog to tested releases.",
    stats: [
      { value: "80+", label: "Requirements" },
      { value: "30+", label: "Backlog items" },
      { value: "400+", label: "Test cases" },
    ],
    tools: ["Jira", "Confluence", "GitHub", "UAT"],
    icons: [T.confluence, T.jira, T.github, T.figma],
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
    icons: [T.selenium, T.excel, T.jira, T.postman],
    link: "https://github.com/Akib078/Falaq_Food_Storefront_Testing/",
  },
  {
    title: "OLA — Growth & Business Analysis",
    category: "Business Intelligence",
    summary:
      "Cleaned ride data and built interactive dashboards on bookings, cancellations and revenue, backed by SQL analysis.",
    stats: [
      { value: "10K+", label: "Ride records" },
      { value: "SQL", label: "Behaviour analysis" },
    ],
    tools: ["Power BI", "SQL", "Excel", "Power Query"],
    icons: [T.powerbi, T.excel, T.sql],
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
    icons: [T.excel, T.docs],
    link: "https://github.com/Akib078/Maven_Coffee_Analysis",
    wide: true,
  },
  {
    title: "Restful Booker — REST API Testing & Automation",
    category: "API Testing · Automation",
    summary:
      "Tested a booking REST API with POST, GET, PUT and DELETE in Postman, automated response checks with JavaScript assertions and ran the collection with Newman for reports.",
    stats: [
      { value: "CRUD", label: "All 4 methods" },
      { value: "JS", label: "Automated assertions" },
      { value: "Newman", label: "CLI test reports" },
    ],
    tools: ["REST API", "Postman", "JavaScript", "Newman"],
    icons: [T.postman, T.javascript, T.newman],
    link: "https://github.com/Akib078/Booking_API_Testing",
    wide: true,
  },
  {
    title: "Booking API — Performance & Load Testing",
    category: "Performance Testing",
    summary:
      "Load-tested the same API in JMeter with different threads, ramp-up periods and loops to check its speed and stability under pressure.",
    stats: [
      { value: "5", label: "HTTP methods" },
      { value: "Load", label: "& stress tests" },
    ],
    tools: ["JMeter", "Load", "Stress", "Listeners"],
    icons: [T.jmeter],
    link: "https://github.com/Akib078/Performance_Testing_Booking_API",
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
              style={{ "--brand": p.icons[0].color }}
              onMouseMove={trackSpotlight}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={(i % 2) * 120}
            >
              <CardFx seed={i + 2} count={7} />
              <span className="project-card__spotlight" aria-hidden="true" />
              {React.createElement(p.icons[0].Icon, {
                className: "project-card__watermark",
                "aria-hidden": true,
              })}

              <div className="project-card__body">
                <div className="project-card__top">
                  <span className="project-card__category">
                    <span className="projects__dot" aria-hidden="true" />
                    {p.category}
                  </span>
                  <span className="project-card__num">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <ul className="project-card__icons" aria-label="Tools used">
                  {p.icons.map(({ name, Icon, color }) => (
                    <li key={name} className="project-card__icon" title={name} style={{ color }}>
                      <Icon aria-hidden="true" />
                      <span className="project-card__icon-name">{name}</span>
                    </li>
                  ))}
                </ul>

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
