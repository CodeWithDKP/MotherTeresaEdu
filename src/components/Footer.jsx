import { useApp } from "../context/AppContext";
import { NavLink } from "react-router-dom";

import "../components/styles/Footer.css";

export default function Footer() {
  const { Links_Address, footer } = useApp();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left ">
          <div className="mb-4">
            <NavLink to={"/"}>
            <img src={footer.logo} alt="logo" className="footer-logo" />
          </NavLink>
          </div>

          <div className="mb-4"><p className="footer-desc">{footer.description}</p></div>

          <h4 className="footer-title">Quick Links</h4>
          <div className="mb-4">
            <ul className="footer-links">
            {footer.leftLinks.map((item, i) => (
              <li key={i}>
                <NavLink to={item.path} className="footer-link">{item.name}</NavLink>
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4 className="footer-title mb-4">Contact Us</h4>
          <ul className="footer-contact">
            {Links_Address.contact.map((c, i) => (
              <li key={i} className="mb-4">
                <span className="icon"><c.icon /></span>
                {c.text}
              </li>
            ))}
          </ul>
          <div className="footer-socials ms-1">
            {Links_Address.socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Admissionshala. All Rights Reserved.
      </div>
    </footer>
  );
}
