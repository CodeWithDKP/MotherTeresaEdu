import { useState } from "react";
import { useApp } from "../context/AppContext";

import HeroBanner from "../components/HeroBanner";
import Button from "../components/Button";

import contactHero from "../images/contactHero.jpg";

export default function Contact() {
  const { Links_Address } = useApp();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      message: "",
    });
  };

  return (
    <>
      <HeroBanner
        line1="Reach Out to Us"
        line2="We’d Love to Hear From You"
        bgImage={contactHero}
      />

      <section className="contact-page-section bg-white py-5">
        <div className="container py-4">
          <div className="row">

            {/* LEFT SIDE — OFFICES */}
            <div className="col-lg-6 pe-lg-5">
              <h3 className="fw-bold mb-4 text-center text-lg-start">
                <span className="headingPart1">Our</span>{" "}
                <span className="headingPart2">Office</span>
              </h3>

              <div className="mb-5">
                <h6 className="fw-bold mb-4">CORPORATE OFFICE:</h6>

                {Links_Address.contact.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div className="mb-4">
                      <p className={index === 2 ? "mb-4" : "mb-2"} key={index}>
                        <Icon className="me-2" />
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE — CONNECT + MAP */}
            <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
              <h3 className="fw-bold mb-4 text-center text-lg-start">
                <span className="headingPart1">Connect</span>{" "}
                <span className="headingPart2">With Us</span>
              </h3>

              <h6 className="fw-bold mb-2">Social Links:</h6>
              <div className="d-flex align-items-center gap-3 mb-4">
                {Links_Address.socials.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>

              <h6 className="fw-bold mb-2">Find Us on Map:</h6>
              <div className="rounded-3 overflow-hidden" style={{ height: "150px" }}>
                <iframe
                  src={Links_Address.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>
        </div>
      </section>


    </>
  );
}
