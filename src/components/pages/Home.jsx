import { useApp } from "../../components/context/AppContext";
import { Link } from "react-router-dom";
import '../styles/pages/Home.css';

export default function Home() {
  const { Button, home, indiaData,
    selectedState,
    handleStateChange,
    cities, Course, courseSelected, spe, handleCourseChange, } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (!/^\d{10}$/.test(data.mobile)) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }
    console.log("Form Submitted:", data);
    form.reset();
  };


  return (

    <>
      <section className="hero-section">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* INDICATORS
          <div className="carousel-indicators">
            {home.hero.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-label={`Slide ${i + 1}`}
                aria-current={i === 0 ? "true" : undefined}
              ></button>
            ))}
          </div>
 */}
          {/* SLIDES */}
          <div className="carousel-inner">
            {home.hero.map((slide, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className="overlay"></div>
                <img src={slide.image} className="d-block" alt={slide.title} />

                <div className="carousel-caption d-none d-md-block">
                  <h5>{slide.title}</h5>
                  <p>{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>


      <section className="lead-form-container bg-white p-5">
        <div className="Lead-form-div bg-white p-3 rounded-3">

          <form onSubmit={handleSubmit} className="lead-form">

            <input
              name="fullName"
              type="text"
              placeholder="Enter Name *"
              className="input"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Enter Email Address *"
              className="input"
              required
            />
            <div className="mobile-row">
              <span className="code">+91</span>
              <input
                name="mobile"
                type="text"
                placeholder="Enter Mobile Number *"
                className="input"
                required
                maxLength="10"
                pattern="\d{10}"
              />
            </div>

            <div className="two-col">
              <select
                name="state"
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
                className="input"
                required
              >
                <option value="">Select State *</option>
                {Object.keys(indiaData).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>

              <select
                name="city"
                className="input"
                required
              >
                <option value="">Select City *</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <select
              name="course"
              value={courseSelected}
              onChange={(e) => handleCourseChange(e.target.value)}
              className="input"
              required
            >
              <option value="">Select Course Looking For *</option>
              {Object.keys(Course).map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>

            <select
              name="specialization"
              className="input"
              required
            >
              <option value="">Select Specialization Looking For *</option>
              {spe.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>

            <label className="consent-row">
              <input name="consent" type="checkbox" required />
              <span>I agree to receive updates through SMS/Email & WhatsApp *</span>
            </label>

            <Button className="form-btn" type="submit">SUBMIT</Button>
          </form>

        </div>
      </section>


    </>
  );
}
