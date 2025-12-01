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

            <div className="col-lg-6">
              <h3 className="fw-bold mb-3 mb-lg-5 text-center">
                <span className="headingPart1">Tell Us More</span>{" "}
                <span className="headingPart2">About You</span>
              </h3>

              <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-2">

                <input
                  name="name"
                  className="form-control mb-3"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  name="phone"
                  className="form-control mb-3"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  name="email"
                  className="form-control mb-3"
                  placeholder="Email id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  name="city"
                  className="form-control mb-3"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />

                <input
                  name="state"
                  className="form-control mb-3"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  className="form-control mb-3"
                  rows="3"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />

                <div className="text-center mt-5">
                  <Button className="btn form-btn py-2 px-5 rounded-2" type="submit">
                    SUBMIT
                  </Button>
                </div>

              </form>

            </div>

            <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
              <div className="contact-details">

                <h3 className="fw-bold mb-3 mb-lg-5 text-center">
                  <span className="headingPart1">Contact</span>{" "}
                  <span className="headingPart2">Information</span>
                </h3>

                <h6 className="fw-bold">CORPORATE OFFICE:</h6>

                {Links_Address.contact.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <p className={index === 2 ? "mb-4" : "mb-2"} key={index}>
                      <Icon className="me-2" />
                      {item.text}
                    </p>
                  );
                })}

                <h6 className="fw-bold">BRANCH OFFICE:</h6>

                <p className="mb-4">
                  {<Links_Address.branchOffice.icon className="me-2" />}
                  {Links_Address.branchOffice.address}
                </p>

                <h6 className="fw-bold mb-2">Connect with us:</h6>

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

                <div className="rounded-3 overflow-hidden">
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
        </div>
      </section>
    </>
  );
}
