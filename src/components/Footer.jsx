import { useApp } from "../context/AppContext";
import { NavLink } from "react-router-dom";

import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsTelephoneFill,
  BsEnvelopeFill,
  BsGlobe
} from "react-icons/bs";

import "../components/styles/Footer.css";

export default function Footer() {
  const { footer } = useApp();

  const socialIcons = {
    instagram: <BsInstagram />,
    facebook: <BsFacebook />,
    linkedin: <BsLinkedin />,
    twitter: <BsTwitter />,
    youtube: <BsYoutube />
  };

  const contactIcons = {
    phone: <BsTelephoneFill />,
    mail: <BsEnvelopeFill />,
    globe: <BsGlobe />
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
         <NavLink to={"/"}> <img src={footer.logo} alt="logo" className="footer-logo" /></NavLink>
          <p className="footer-desc">{footer.description}</p>

          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {footer.leftLinks.map((item, i) => (
              <li key={i}>
                <NavLink to={item.path} className="footer-link">{item.name}</NavLink>
              </li>
            ))}
          </ul>

          <div className="footer-socials">
            {footer.socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                {socialIcons[s.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {footer.rightLinks.map((item, i) => (
              <li key={i}>
                <NavLink to={item.path} className="footer-link">{item.name}</NavLink>
              </li>
            ))}
          </ul>

          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            {footer.contact.map((c, i) => (
              <li key={i}>
                <span className="icon">{contactIcons[c.icon]}</span>
                {c.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Admissionshala. All Rights Reserved.
      </div>
    </footer>
  );
}
