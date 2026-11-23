import React from "react";
import "./record.css";
import CardFx from "../common/CardFx";
import DotGrid from "../common/DotGrid";
import Bubbles from "../common/Bubbles";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

// Content taken from Akib_Rahman_Resume.pdf
const EXPERIENCE = [
  {
    role: "QA & Product Management Support",
    org: "Tenels | Falaq Food",
    place: "Dhaka",
    date: "Jul 2026 – Present",
    current: true,
    points: [
      ["Joined daily Scrum and business analysis meetings with client teams, defined ", "60+", " backlog items and tracked priority-based releases."],
      ["Prepared BRDs, acceptance criteria, business logic and QA checklists; executed UAT, sanity, smoke and regression testing and reported bugs in Jira."],
      ["Analysed Falaq Food's business and custom ERP/CRM system and authored ", "100+", " business & software requirements in Confluence."],
    ],
    tools: ["Scrum", "Jira", "Confluence", "UAT", "BRD"],
  },
  {
    role: "Business Analyst - Compliance",
    org: "First4Freelancers (MNC)",
    place: "Dhaka",
    date: "Dec 2024 – Mar 2026",
    points: [
      ["Analysed and maintained documents for ", "250+", " client files, meeting internal audit standards with high accuracy."],
      ["Managed and validated data & files in Excel, Google Sheets and Zoho to ensure data integrity and regulatory compliance."],
    ],
    tools: ["Excel", "Google Sheets", "Zoho", "Audit"],
  },
  {
    role: "Software Test Engineer (Internship)",
    org: "A1QA",
    place: "Remote",
    date: "May 2024 – Aug 2024",
    points: [
      ["Applied software testing techniques under the supervision of experienced QA mentors."],
      ["Prepared test plans, test scenarios and detailed bug reports in Jira."],
      ["Designed and executed manual test cases from business & functional requirements."],
    ],
    tools: ["Manual Testing", "Test Plans", "Jira"],
  },
  {
    role: "Assistant Director (IT)",
    org: "BRAC University Business Club (BizBee)",
    place: "Extracurricular",
    date: "May 2022 – Aug 2023",
    points: [["Managed the IT team and supported cross-functional teams to organise events & projects."]],
    tools: ["Leadership", "Event Ops"],
  },
];

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "BRAC University",
    date: "2019 – 2024",
    grade: "CGPA 3.24",
    outOf: "/ 4.00",
  },
  {
    degree: "H.S.C, Science",
    school: "Cantonment College Jessore",
    date: "2016 – 2018",
    grade: "GPA 4.25",
    outOf: "/ 5.00",
  },
  {
    degree: "S.S.C, Science",
    school: "Zilla School Jessore",
    date: "2007 – 2016",
    grade: "GPA 5.00",
    outOf: "/ 5.00",
  },
];

// Render a bullet, highlighting the number in the middle (if any)
const Point = ({ parts }) => (
  <li>
    {parts.map((p, i) => (i === 1 ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>))}
  </li>
);

const Record = () => {
  return (
    <section id="about" className="about">
      <DotGrid />
      <div className="about__inner">
        <header className="about__head" data-aos="fade-up" data-aos-duration="1000">
          <span className="about__eyebrow"><span className="dot" aria-hidden="true" />About me</span>
          <h2 className="about__title">
            Experience <span>&amp;</span> Education
          </h2>
          <p className="about__summary">
            Analytical, detail-oriented professional working across product management, QA and
            business analysis: turning business needs into clear requirements, and making sure
            what ships actually works.
          </p>
        </header>

        {/* ---------- Experience timeline ---------- */}
        <h3 className="about__group">
          <i className="fa fa-briefcase" aria-hidden="true" /> Work Experience
        </h3>
        <ol className="xp">
          {EXPERIENCE.map((job, idx) => (
            <li className="xp__item" key={job.role} data-aos="fade-up" data-aos-duration="900">
              <span className={`xp__dot${job.current ? " xp__dot--live" : ""}`} aria-hidden="true" />
              <article className="about-card xp__card">
                <Bubbles reverse={idx % 2 === 1} />
                <div className="about-card__body">
                <div className="xp__top">
                  <div>
                    <h4 className="xp__role">{job.role}</h4>
                    <p className="xp__org">
                      {job.org} <span className="xp__place">· {job.place}</span>
                    </p>
                  </div>
                  <span className={`pill${job.current ? " pill--live" : ""}`}>
                    <span className={job.current ? "pill__pulse" : "dot"} aria-hidden="true" />
                    {job.date}
                  </span>
                </div>
                <ul className="xp__points">
                  {job.points.map((parts, i) => (
                    <Point key={i} parts={parts} />
                  ))}
                </ul>
                <ul className="xp__tools" aria-label="Tools and skills">
                  {job.tools.map((t) => (
                    <li key={t}>
                      <span className="dot" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>

        {/* ---------- Education cards ---------- */}
        <h3 className="about__group">
          <i className="fa fa-graduation-cap" aria-hidden="true" /> Education
        </h3>
        <div className="edu">
          {EDUCATION.map((e, i) => (
            <article
              className="about-card edu__card"
              key={e.degree}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={i * 120}
            >
              <CardFx seed={i + 5} count={7} />
              <div className="about-card__body">
              <span className="edu__date">
                <span className="dot" aria-hidden="true" />
                {e.date}
              </span>
              <h4 className="edu__degree">{e.degree}</h4>
              <p className="edu__school">{e.school}</p>
              <p className="edu__grade">
                {e.grade} <span>{e.outOf}</span>
              </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Record;
