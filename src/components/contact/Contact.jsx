import React, { useState } from "react";
import "./contact.css";
import {
  TbMail,
  TbPhone,
  TbMapPin,
  TbCalendarCheck,
  TbSend,
} from "react-icons/tb";
import DotGrid from "../common/DotGrid";
import Sparkles from "../common/Sparkles";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

const EMAIL = "rahmanakib03@gmail.com";

const DETAILS = [
  { Icon: TbMapPin, label: "Location", value: "Mohakhali, Dhaka" },
  { Icon: TbMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: TbPhone, label: "Phone", value: "01534363363", href: "tel:+8801534363363" },
  { Icon: TbCalendarCheck, label: "Open Hours", value: "Mon - Sun: 24/7" },
];

// Twinkling star sparkles: x/y position (%), size (px), colour, animation delay (s)
const FORM_SPARKLES = [
  [91, 7, 12, "v", 0], [70, 20, 8, "c", -1.2], [96, 46, 9, "v", -2.4], [78, 76, 7, "p", -3.3],
  [42, 91, 10, "c", -0.6], [46, 5, 7, "v", -1.9], [6, 4, 9, "c", -2.8], [27, 14, 6, "p", -0.3],
  [60, 44, 6, "v", -3.8], [88, 90, 11, "v", -1.5], [14, 93, 8, "p", -2.1], [62, 97, 6, "c", -4.1],
  [97, 26, 7, "c", -3.0], [35, 52, 5, "c", -1.0],
];
const CARD_SPARKLES = [
  [[90, 18, 9, "v", 0], [72, 78, 6, "c", -2.2], [96, 62, 6, "p", -1.1]],
  [[88, 22, 7, "c", -0.8], [64, 80, 9, "v", -2.9], [95, 70, 6, "p", -1.7]],
  [[92, 25, 8, "p", -1.4], [70, 74, 6, "v", -0.4], [82, 50, 5, "c", -3.1]],
  [[89, 20, 9, "v", -2.5], [66, 82, 6, "c", -1.0], [96, 64, 7, "v", -3.6]],
];
const EMPTY = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No server: the form opens the visitor's email app with everything filled in.
  const submit = (e) => {
    e.preventDefault();
    const subject = form.subject.trim() || `Hello from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <DotGrid />
      <div className="contact__inner">
        <header className="contact__head" data-aos="fade-up" data-aos-duration="1000">
          <span className="contact__eyebrow">
            <span className="contact__dot" aria-hidden="true" />
            Get in touch
          </span>
          <h2 className="contact__title">
            Let&rsquo;s build something <span>great</span>
          </h2>
          <p className="contact__sub">
            Open to Product, QA and Business Analysis roles and projects. Send a message and I&rsquo;ll
            get back to you soon.
          </p>
        </header>

        <div className="contact__box">
          {/* left: details */}
          <aside className="contact__info" data-aos="fade-right" data-aos-duration="2200">
            <ul className="contact__list">
              {DETAILS.map(({ Icon, label, value, href }, i) => (
                <li key={label} className="contact__item">
                  <span className="contact__item-fx" aria-hidden="true">
                    <Sparkles list={CARD_SPARKLES[i]} />
                  </span>
                  <span className="contact__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="contact__text">
                    <span className="contact__label">{label}</span>
                    {href ? (
                      <a className="contact__value" href={href}>
                        {value}
                      </a>
                    ) : (
                      <span className="contact__value">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* right: message form */}
          <form
            className="contact__form"
            onSubmit={submit}
            data-aos="fade-left"
            data-aos-duration="2200"
          >
            {/* soft decorative background: ripple lines, drifting glow, twinkling sparkles */}
            <span className="contact__fx" aria-hidden="true">
              <Sparkles list={FORM_SPARKLES} />
            </span>

            {/* outline drawing: envelope + letter, dashed trail looping up to a paper plane
                that sits half outside the form */}
            <svg className="mailfx" viewBox="0 0 220 150" aria-hidden="true" focusable="false">
              <path
                className="mailfx__trail"
                d="M62 100 C14 96 12 30 62 26 C104 22 120 62 156 54 C174 50 186 48 198 47"
              />

              {/* letter: only the part above the envelope opening is drawn */}
              <path className="mailfx__line" d="M56 92 V54 H120 V92" />
              <line className="mailfx__line mailfx__line--soft" x1="66" y1="64" x2="110" y2="64" />
              <line className="mailfx__line mailfx__line--soft" x1="66" y1="72" x2="104" y2="72" />
              <line className="mailfx__line mailfx__line--soft" x1="66" y1="80" x2="98" y2="80" />

              {/* envelope: open top so it does not cross the letter */}
              <path className="mailfx__line" d="M56 88 H44 V142 H132 V88 H120" />
              <path className="mailfx__line" d="M44 92 L80 116 M132 92 L96 116 M44 142 L88 110 L132 142" />

              {/* paper plane: symmetric wings, sits half outside the form */}
              <g transform="translate(196 46) rotate(-14) scale(2.4)">
                <path className="mailfx__plane" d="M32 0 L0 -12 L8 0 L0 12 Z M32 0 L8 0" />
              </g>
            </svg>
            <div className="contact__row">
              <label className="field">
                <span className="field__label">Your name</span>
                <input
                  className="field__input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={update}
                  required
                />
              </label>
              <label className="field">
                <span className="field__label">Email address</span>
                <input
                  className="field__input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={update}
                  required
                />
              </label>
            </div>
            <label className="field">
              <span className="field__label">Subject</span>
              <input
                className="field__input"
                type="text"
                name="subject"
                placeholder="Job opportunity, project, question…"
                value={form.subject}
                onChange={update}
              />
            </label>
            <label className="field">
              <span className="field__label">Message</span>
              <textarea
                className="field__input field__input--area"
                name="message"
                rows={6}
                placeholder="Tell me a little about it…"
                value={form.message}
                onChange={update}
                required
              />
            </label>

            <div className="contact__actions">
              <button type="submit" className="contact__submit">
                Send message <TbSend aria-hidden="true" />
              </button>
              <p className="contact__note" role="status">
                {sent
                  ? "Your email app should open with the message ready to send."
                  : "Opens your email app with the message filled in."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
