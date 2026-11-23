import React from "react";
import "./footer.css";
import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandFacebook,
  TbBrandInstagram,
  TbMail,
  TbArrowUp,
  TbDownload,
} from "react-icons/tb";
import logo from "../pic/logo.png";
import resume from "../pic/Akib_Rahman_Resume.pdf";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { name: "LinkedIn", Icon: TbBrandLinkedin, href: "https://www.linkedin.com/in/akib-rahman-6748b4220/" },
  { name: "GitHub", Icon: TbBrandGithub, href: "https://github.com/Akib078" },
  { name: "Facebook", Icon: TbBrandFacebook, href: "https://www.facebook.com/akibrahman.oion" },
  { name: "Instagram", Icon: TbBrandInstagram, href: "https://www.instagram.com/akkiibbb/" },
  { name: "Email", Icon: TbMail, href: "mailto:rahmanakib03@gmail.com" },
];

const Footer = () => {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer__line" aria-hidden="true" />
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo-link" aria-label="Akib Rahman, back to top">
              <span
                className="footer__logo"
                role="img"
                aria-label="Akib Rahman"
                style={{ "--logo-url": `url(${logo})` }}
              />
            </a>
            <p className="footer__roles">Product Manager · QA Engineer · Business Analyst</p>
            <p className="footer__blurb">
              Turning business needs into clear requirements, well-tested software and
              data-driven decisions.
            </p>
            <a className="footer__resume" href={resume} download="Akib_Rahman_Resume.pdf">
              <TbDownload aria-hidden="true" /> Download resume
            </a>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__links">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h4 className="footer__heading">Connect</h4>
            <ul className="footer__socials">
              {SOCIALS.map(({ name, Icon, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="footer__social"
                    aria-label={name}
                    title={name}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="footer__where">Based in Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Akib Rahman. All rights reserved.</p>
          <button type="button" className="footer__top-btn" onClick={toTop}>
            Back to top <TbArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
