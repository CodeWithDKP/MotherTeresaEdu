import { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import careersHero from '../images/careersHero.jpg';
import Button from '../components/Button';
export default function Careers() {

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    designation: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Career Form Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
      designation: "",
      resume: null,
    });

    e.target.reset();
  };


  return (
    <>
      <HeroBanner
        line1="Build Your Future With Us"
        line2="Explore Exciting Career Opportunities"
        bgImage={careersHero}
      />

      <section className="career-section bg-white py-5">
        <div className="container">

          <h2 className="fw-bold mb-4 text-center">
            <span className="headingPart1">Create History</span>{" "}
            <span className="headingPart2">With Us!</span>{" "} <br />
            <span className="headingPart1">Come & Join Us.</span>
          </h2>

          <form
            className="career-form form p-4 shadow-lg rounded-1 bg-white mt-5 mb-5"
            onSubmit={handleSubmit}
          >
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <input
                  name="name"
                  type="text"
                  className="form-control mb-4"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  name="email"
                  type="email"
                  className="form-control mb-4"
                  placeholder="Email id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-12 col-md-6">
                <input
                  name="phone"
                  type="text"
                  className="form-control mb-4"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <select
                  name="designation"
                  className="form-select mb-4"
                  value={formData.designation}
                  onChange={handleChange}
                >
                  <option value="">Designation/ Job role:</option>
                  <option>Counselor (0–1 years)</option>
                  <option>Senior Counselor (1–2 years)</option>
                  <option>Regional Manager (3–5 years)</option>
                </select>

                <input
                  name="resume"
                  type="file"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="text-center mt-5">
              <Button className="btn form-btn py-2 px-5 rounded-2" type="submit">
                SUBMIT
              </Button>
            </div>
          </form>


        </div>
      </section>


    </>
  );
}
