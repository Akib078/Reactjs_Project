import React from "react";
import "./service.css";
import { FaGitAlt, FaCss3Alt } from "react-icons/fa";
import {
  SiJira,
  SiConfluence,
  SiZoho,
  SiGithub,
  SiLooker,
  SiGooglesheets,
  SiPostman,
  SiSelenium,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiFigma,
} from "react-icons/si";
import {
  TbChartHistogram,
  TbFileExcel,
  TbSql,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
} from "react-icons/tb";

// Tools from Akib_Rahman_Resume.pdf ("Skills & Expertises")
const TOOLS = [
  { name: "Jira", Icon: SiJira, color: "#2684FF" },
  { name: "Confluence", Icon: SiConfluence, color: "#2684FF" },
  { name: "Power BI", Icon: TbChartHistogram, color: "#F2C811" },
  { name: "Excel", Icon: TbFileExcel, color: "#21A366" },
  { name: "SQL", Icon: TbSql, color: "#4FA3E0" },
  { name: "Looker Studio", Icon: SiLooker, color: "#4285F4" },
  { name: "Google Sheets", Icon: SiGooglesheets, color: "#34A853" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Selenium", Icon: SiSelenium, color: "#43B02A" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Zoho", Icon: SiZoho, color: "#E42527" },
  { name: "Python", Icon: SiPython, color: "#4B8BBE" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: FaCss3Alt, color: "#2965F1" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Photoshop", Icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
  { name: "Illustrator", Icon: TbBrandAdobeIllustrator, color: "#FF9A00" },
];

// Expertise areas from the resume (no logos, shown as pills)
const EXPERTISE = [
  "Product Management",
  "Business Analysis",
  "Requirement Gathering",
  "BRD & Acceptance Criteria",
  "Scrum & Backlog",
  "UAT",
  "Manual Testing",
  "Automation Testing",
  "API Testing",
  "Sanity · Smoke · Regression",
  "Data Analysis",
  "Dashboards & Reporting",
];

// Infinite scroller: the list is rendered twice so the loop is seamless
const Marquee = ({ children, reverse = false, duration = 45 }) => (
  <div
    className={`marquee${reverse ? " marquee--reverse" : ""}`}
    style={{ "--marquee-duration": `${duration}s` }}
  >
    <div className="marquee__track">
      <div className="marquee__group">{children}</div>
      <div className="marquee__group" aria-hidden="true">
        {children}
      </div>
    </div>
  </div>
);

const Service = () => {
  return (
    <section id="skills" className="skills" aria-label="My Skills and Expertises">
      <span className="skills__glow" aria-hidden="true" />

      <div className="skills__box">
        <p className="skills__label">My Skills and Expertises</p>

        <Marquee duration={50}>
        {TOOLS.map(({ name, Icon, color }) => (
          <div className="marquee__item" key={name} title={name}>
            <Icon className="marquee__icon" style={{ color }} aria-hidden="true" />
            <span className="marquee__name">{name}</span>
          </div>
        ))}
        </Marquee>
      </div>

      <div className="skills__box skills__box--slim">
      <Marquee reverse duration={40}>
        {EXPERTISE.map((skill) => (
          <span className="skills__pill" key={skill}>
            <span className="skills__dot" aria-hidden="true" />
            {skill}
          </span>
        ))}
      </Marquee>
      </div>
    </section>
  );
};

export default Service;
