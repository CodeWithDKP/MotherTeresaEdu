import { useApp } from "../context/AppContext";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import '../components/styles/pages/Home.css';
import studentDev from '../images/studentDevProgram.png';
import facultyDev from '../images/facultyDevProgram.png';
import Advantages from "../components/Advantages";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const {
    Button,
    home,
    indiaData,
    selectedState,
    setSelectedState,
    cities,
    setCities,
    handleStateChange
  } = useApp();


  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);


 const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    setIsSubmitting(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbxsqJtvKhfGsw1kyffrqs7dRQ6bbYJQPVcBmPxLfq65YRX1kj6HonoxnwQ3-uO9HIxK/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    alert("Form submitted successfully!");

    // ✅ RESET FORM UI
    form.reset();
    setSelectedState("");
    setCities([]);
    navigate("/payment");

  } catch (err) {
    console.error(err);
    alert("Failed to submit form");
  } finally {
    setIsSubmitting(false); // 🔄 stop loader
  }
};




  //why Mother teresa edu foundation state
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const el = document.getElementById("heroCarousel");
    if (!el || !window.bootstrap) return;

    const existing = window.bootstrap.Carousel.getInstance(el);
    if (existing) existing.dispose();

    new window.bootstrap.Carousel(el, {
      interval: 3000,
      ride: "carousel"
    });
  }, []);

  console.log(window.bootstrap);

  return (

    <>
      <section className="hero-section">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-wrap="true"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            {home.hero.map((slide, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <div className="overlay"></div>
                <img src={slide.image} className="d-block" alt={slide.title} />

                <div className="carousel-caption d-none d-md-block">
                  <h1>{slide.title}</h1>
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

      <section className="lead-form-container p-5">
  <div
    className="Lead-form-div bg-white p-3 rounded-3 position-relative"
    id="form"
  >

    {/* 🔄 FORM LOADER OVERLAY */}
    {isSubmitting && (
      <div className="form-overlay">
        <div className="spinner"></div>
      </div>
    )}

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
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <select name="city" className="input" required>
          <option value="">Select City *</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <input
        name="collegeName"
        type="text"
        placeholder="Enter College Name *"
        className="input"
        required
      />

      <select name="stallType" className="input" required>
        <option value="">Select Stall Type *</option>
        <option value="Title Sponsor">Title Sponsor</option>
        <option value="Co-Sponsor">Co-Sponsor</option>
        <option value="Associate Sponsor">Associate Sponsor</option>
      </select>

      <textarea
        name="remarks"
        placeholder="Remarks (optional)"
        className="input"
        rows={3}
      />

      <label className="consent-row">
        <input name="consent" type="checkbox" required />
        <span>
          I agree to receive updates through SMS/Email & WhatsApp *
        </span>
      </label>

      <Button
        className="form-btn"
        type="submit"
        disabled={isSubmitting}
      >
        SUBMIT
      </Button>
    </form>
  </div>
</section>


      <section className="whyMotherTeresa-section">
        <div className="container whyMotherTeresa">

          <NavLink to="/about" className="text-decoration-none">
            <h2 className="text-center mb-4 fw-bold">
              <span className="headingPart1">Why</span> <span className="headingPart2">Mother Teresa Educational Foundation?</span>
            </h2>
          </NavLink>
          <div className={showMore ? "full-text" : "clamped-text"}>
            <p>
              “Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela.
            </p>

            <p>
              At <b>Mother Teresa Educational Foundation, Ananthapuramu, Andhra Pradesh</b>, we are committed to providing quality education and holistic development for students. Our mission is to guide young minds in choosing the right career paths and achieving their full potential.
            </p>

            <p>
              Choosing the right educational path can be overwhelming for both students and parents. With our dedicated team of experienced educators and counselors, we help clarify doubts and provide accurate information to make informed decisions.
            </p>

            <p>
              Our student-centered approach focuses on understanding individual strengths and aspirations, followed by personalized guidance, mentorship, and career planning.
            </p>

            <p>
              The Research and Development team at Mother Teresa Educational Foundation performs in-depth research on schools, colleges, courses, and career opportunities. This ensures that students receive reliable, structured, and time-saving insights.
            </p>

            <p>
              We assist students through a smooth application process, ensuring a hassle-free experience from admission counseling to final enrollment. Our counselors are available throughout the journey to provide continuous support.
            </p>

            <p>
              With strong associations with alumni and professionals from top institutions, we organize workshops, mock interviews, and guidance sessions that enhance student readiness and confidence.
            </p>

            <p>
              Our foundation also maintains close connections with previous students, helping new students gain internships, mentorship, and placement opportunities.
            </p>

            <p>
              In summary, <b>Mother Teresa Educational Foundation</b> in Ananthapuramu stands as a trusted and reliable educational institution, guiding students towards academic excellence and meaningful career growth. We stay committed to keeping students informed about the latest developments, scholarships, and programs for holistic growth.
            </p>
          </div>

          <div className=" mt-3">
            <button className="ShowMore-btn px-4 py-2" onClick={() => setShowMore(!showMore)}>
              {showMore ? "− Show Less" : "+ Show More"}
            </button>
          </div>
        </div>
      </section>

      <section className="courses-section py-5">
        <div className="container-fluid courses-container px-3">

          <div className="row justify-content-center gap-5">
            {home.courses.map((card, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-lg-2 p-3 rounded-3  course-card"
                style={{ background: "#e1e6ea" }}
              >
                <h5 className="fw-bold">{card.title}</h5>

                <ul className="list-unstyled mt-3">
                  {card.list.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>

                <div className="text-end">
                  <img src={card.img} alt={card.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="program-section bg-light py-5">
        <div className="container text-center">
          <NavLink to={"/contact"} className="text-decoration-none">
            <h2 className="mb-4 fw-bold text-center">
              <span className="headingPart1">Development</span>
              <span className="headingPart2"> Programs</span>
            </h2>
          </NavLink>
          <p className="mb-5 text-center">
            Engage with experienced educators and industry experts to enhance skills and knowledge through our specialized development programs.
          </p>
          <div className="row row-cols-1 row-cols-lg-2 gy-4 gx-5 mt-2 mb-5">
            <div className="col">
              <div
                className="program-card rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{ backgroundImage: `url(${studentDev})` }}
              >
                <div className="content-box">
                  <h4>Student Development Program</h4>
                  <p>
                    Learn from our expert faculty and industry professionals to build skills, confidence, and academic excellence.{" "}
                    <NavLink to={"/contact"} style={{ color: "black" }} className="text-decoration-none">Enroll Now!</NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="program-card rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{ backgroundImage: `url(${facultyDev})` }}
              >
                <div className="content-box">
                  <h4>Faculty Development Program</h4>
                  <p>
                    Equip faculty with the latest teaching methodologies and educational trends to better guide students.{" "}
                    <NavLink to={"/contact"} style={{ color: "#f77a0c" }} className="text-decoration-none">Enroll</NavLink> in our Faculty Development Program today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ranked-section py-5">
        <div className="container ranked-container">
          <h2 className="mb-3 fw-bold text-center">
            <span className="headingPart1">Top Ranked</span>
            <span className="headingPart2"> Institutes</span>
          </h2>
          <p className="mb-4 text-center">Below are the India’s Top Ranked Management colleges,</p>

          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              576: { slidesPerView: 2, slidesPerGroup: 2 },
              992: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            style={{ paddingBottom: 36 }}
          >
            {home.rankedInstitutes.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="ranked-card-box">
                  <div className="ranked-card  p-3 rounded-3">
                    <img src={item.img} className="img-fluid rounded" alt={item.name} />
                    <h3 className="mt-3 h5 fw-bold">{item.name}</h3>
                    <p className="text-muted">{item.place}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <section className="advantages-section py-5" >
        <div className="container advantages-container">
          <h2 className="mb-4 fw-bold text-center">
            <span className="headingPart1">Advantages of</span>
            <span className="headingPart2"> Mother Teresa Educational Foundation</span>
          </h2>
          <p className="mb-4 text-center">Below are the reasons to choose Admissionshala</p>
          <Advantages />
        </div>
      </section>

      <section className="testimonial-section py-5">
        <div className="container testimonials-div">

          <h2 className="fw-bold mb-4 text-center">
            <span className="headingPart1">Our </span>
            <span className="headingPart2"> Testimonials</span>
          </h2>

          <p className="mb-5 text-center">Here are some real experiences from our students</p>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{ paddingBottom: 36 }}
          >


            {home.testimonials.map((item, i) => (
              <SwiperSlide
                key={i}
                className="testimonial-slide"
              >
                <div
                  className="testCards"
                  onMouseEnter={() => swiperRef.current.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current.autoplay.start()}
                >
                  <div className="testmonialImg-div mt-4">
                    <img src={item.img} className="testimonial-img" />
                  </div>

                  <div className="testimonial-card p-4 bg-white rounded-3">
                    <div className="quote-symbol">“</div>
                    <p className="mt-2">{item.review}</p>
                    <h5 className="fw-bold mt-3 text-end">{item.name}</h5>
                  </div>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>

        </div>
      </section>

    </>
  );
}
