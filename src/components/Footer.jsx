import { useApp } from "../components/context/AppContext";
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
        <div className="footer-left">
          <img src={footer.logo} alt="logo" className="footer-logo" />
          <p className="footer-desc">{footer.description}</p>

          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {footer.leftLinks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="footer-socials">
            {footer.socials.map((s, i) => (
              <span key={i}>{socialIcons[s.icon]}</span>
            ))}
          </div>
        </div>

        <div className="footer-right">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {footer.rightLinks.map((item, i) => (
              <li key={i}>{item}</li>
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
