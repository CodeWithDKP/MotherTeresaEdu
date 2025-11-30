import { useApp } from "../context/AppContext";
import { NavLink } from "react-router-dom";
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import '../components/styles/pages/Home.css';
import studentDev from '../images/studentDevProgram.png';
import facultyDev from '../images/facultyDevProgram.png';
import advantagesImgHorizontal from '../images/admissionshala.png';
import advantagesImgVertical from '../images/admissionshala_Mob.png';


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
  //why admissionshala state
  const [showMore, setShowMore] = useState(false);


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


      <section className="lead-form-container bg-white p-5">
        <div className="Lead-form-div bg-white p-3 rounded-3" id="form">

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

      <section className="whyAdmissionshala-section bg-white">
        <div className="container whyAdmissionshala ">

          <NavLink to="/about" className="text-decoration-none">
            <h2 className="text-center mb-4 fw-bold">
              <span className="headingPart1">Why</span> <span className="headingPart2">Admissionshala?</span>
            </h2>
          </NavLink>
          <div className={showMore ? "full-text" : "clamped-text"}>
            <p>
              “It is not about how hard you work but it is about how smartly you manage your time,
              resources, mind, and efforts to work together for a better result”.– Anonymous.
            </p>

            <p>
              In the present era, time is money, and to value your money and efforts, we bring forth
              admissionshala.com, an <b>admission consultant in Pune, Maharashtra</b>.
              We are an extraordinarily selective digital platform fabricated specially for aspiring
              students to counsel, guide, and help in career mapping.
            </p>

            <p>
              Making a career choice can be challenging for both parents and students. The absence of
              the right source of information may lead to making the wrong decision. With our 14+ years
              of experience in education counseling and career mapping, we aim to clear all the queries
              circling around admissions. We clarify doubts and make education easy with the following
              offerings:
            </p>

            <p>
              Admissionshala.com follows a student-oriented approach. We comprehend students’ profiles
              and expectations and then conduct a well-framed process of vocational guidance, counseling,
              and career mapping.
            </p>

            <p>
              The Research and Development team of admissionshala.com conducts profound research and
              data-driven analysis of various colleges & universities and brings valuable and sorted
              insights including the inside story of colleges that eventually saves your time and resources.
            </p>

            <p>
              We follow a Common Application Process (CAP) where students can apply at numerous colleges
              all at once which will offer a hassle-free, time-saving, and snappier user experience. Our
              experienced college admission counselors have your back till the completion of the process.
            </p>

            <p>
              Since we are into education for the last 14 years, we have a strong association with the
              alumni of pioneering tier-1 colleges like XLRI, Symbiosis, IIMs, NIT, and WeSchool. With
              their support, we host mock interviews & GD sessions, which increase the chances of
              selection.
            </p>

            <p>
              Admissionshala likewise has a solid association with 10000+ alumni and hence it becomes
              easier for us to assist you in getting great summer internships and final placement
              opportunities in top companies.
            </p>

            <p>
              To sum up, Admissionshala secures the top position in the <b>list of admission consultants in India</b>,
              and it is the best portal for multiple admission and placement-related questions. We keep
              you updated with the newest developments about institutes, scholarships, and student
              programs. With the help of our certified <b>college admissions consultant</b>, we ensure the
              experience is more human, even in digital proximity.
            </p>
          </div>

          <div className=" mt-3">
            <button className="ShowMore-btn px-4 py-2" onClick={() => setShowMore(!showMore)}>
              {showMore ? "− Show Less" : "+ Show More"}
            </button>
          </div>
        </div>
      </section>

      <section className="courses-section bg-white py-5">
        <div className="container-fluid courses-container px-3">

          <div className="row justify-content-center gap-4">
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
              <span className="headingPart2"> Program</span>
            </h2>
          </NavLink>
          

          <p className="mb-5 text-center">
            Engage with the best of both Faculty and Industry experts to expand your horizons with our development programs
          </p>

          <div className="row row-cols-1 row-cols-lg-2 gy-4 gx-5 mt-2 mb-5">
            <div className="col">
              <div
                className="program-card rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{ backgroundImage: `url(${studentDev})` }}
              >
                <div className="content-box">
                  <h4>Student Development Program</h4>
                  <p>Learn from India’s best Faculty and Industrialists in order to add that only Feather to your Intellectual Hat. <NavLink to={"/contact"} style={{color:"black"}} className="text-decoration-none">Enroll Now!</NavLink></p>
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
                  <p>Current trends in all education fields can only be justified by the best of the faculty. <NavLink to={"/contact"} style={{color:"#f77a0c"}} className="text-decoration-none">Enroll</NavLink> for our Faculty Development Program to cater all current student needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ranked-section bg-white py-5">
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


      <section className="advantages-section bg-white py-5" >
        <div className="container advantages-container">
          <h2 className="mb-4 fw-bold text-center">
            <span className="headingPart1">Advantages of</span>
            <span className="headingPart2"> Admissionshala</span>
          </h2>
          <p className="mb-4 text-center">Below are the reasons to choose Admissionshala</p>

          <div className="advantages-img">
            <img
              src={advantagesImgHorizontal}
              alt="advantages"
              className="adv-img adv-img-desktop"
            />

            <img
              src={advantagesImgVertical}
              alt="advantages"
              className="adv-img adv-img-mobile"
            />
          </div>

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
            style={{ paddingBottom: 36 }}
          >
            {home.testimonials.map((item, i) => (
              <SwiperSlide key={i} className="testimonial-slide">

                <div className="testCards">
                  {/* Floating Image */}
                  <div className="testmonialImg-div">
                    <img
                      src={item.img}
                      className="testimonial-img"
                      alt={item.name}
                    />
                  </div>

                  {/* Card */}
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
