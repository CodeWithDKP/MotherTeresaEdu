import { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import HeroBanner from '../components/HeroBanner';
import '../components/styles/pages/About.css'
import aboutHero from '../images/aboutHero.jpg';
import Advantages from "../components/Advantages";
import About_img from '../images/About-img.png';
import ourMission from '../images/Our-Mission.jpg';
import ourvision from '../images/Our-Vision.jpg';
export default function About() {
  const { about } = useApp();
  //About us state
  const [showMore, setShowMore] = useState(false);
  //counters
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <>
      <HeroBanner
        line1="Our journey has been amazing"
        line2="and We say it proudly!"
        bgImage={aboutHero}
      />

      <section className="aboutUs-section bg-white py-5">
        <div className="container py-5">
          <div className="row">

            {/* LEFT TEXT */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4 fw-bold section-heading">
                <span className="headingPart1">About</span>
                <span className="headingPart2"> Us</span>
              </h2>

              <div className={showMore ? "full-text" : "clamped-text"}>

                <p>
                  "All students need a little help, a little hope, and somebody who believes in them to
                  succeed." -Anonymous.
                </p>

                <p>
                  Mother Teresa Educational Foundation (MTEF) is a pioneering institution based in Ananthapuramu, Andhra Pradesh.
                  Our mission is to provide high-quality educational support and holistic development opportunities to students
                  across India.
                </p>

                <p>
                  Since its inception, MTEF has been committed to guiding students and empowering educators in diverse fields
                  including management, engineering, medicine, law, and distance learning. With the integration of digital platforms,
                  our foundation ensures accessible, reliable, and personalized support for every student.
                </p>

                <p>
                  Many students struggle to find the right guidance, which can affect their academic journey. MTEF acts as a
                  comprehensive support system, offering expert advice, resources, and mentorship to help students make informed
                  decisions about their higher education.
                </p>

                <p>
                  Through our foundation, students receive structured guidance to navigate college selection, admission processes,
                  and scholarship opportunities. We strive to become a trusted name in the list of top educational foundations in India.
                </p>

                <p>
                  Our platform provides detailed insights into colleges across the country, helping students make choices based
                  on specialization, fees, location, and other parameters.
                </p>

                <p>
                  The process is designed to be simple and student-friendly, minimizing repetitive forms and providing support
                  whenever needed through our experienced counselors.
                </p>

                <p>
                  In short, Mother Teresa Educational Foundation combines years of expertise in education and student support
                  to help students choose wisely and pursue their dreams effectively.
                </p>

                <p className="fw-bold">Vision and Mission:</p>

                <ol className="about-list">
                  <li>
                    <b>Vision:</b> To be a one-stop educational foundation offering guidance and opportunities to students,
                    ensuring they make informed decisions for their academic and professional futures.
                  </li>

                  <li>
                    <b>Mission:</b> To remove barriers in education, provide equal opportunities to all students, and work towards
                    enabling access to quality education irrespective of geographic, financial, or social background.
                  </li>
                </ol>

              </div>

              <button
                className="ShowMore-btn px-4 py-2 mt-3"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "− Show Less" : "+ Show More"}
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6">
              <img src={About_img} alt="About Admissionshala" className="about-image" />
            </div>

          </div>
        </div>
      </section>

      <section ref={sectionRef} className="counter-section py-5 bg-light">
        <div className="container">
          <div className="row g-3 text-center">

            {about.counters.map((item, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="counter-card">
                  <h2 className="counter-number">
                    {start ? <CounterValue end={item.number} /> : "0"}
                  </h2>
                  <p className="counter-label">{item.label}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="visionMission-section py-5 bg-white">
        <div className="container bg-light px-0">

          {/* Row 1 */}
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-3 mb-md-0 px-0">
              <img src={ourvision} alt="Vision" className="img-fluid" />
            </div>

            <div className="col-12 col-md-6">
              <h2 className="fw-bold mb-3">
                <span className="headingPart1">Our</span>{" "}
                <span className="headingPart2">Vision</span>
              </h2>
              <p>
                To provide high-quality education, holistic development, and accessible opportunities for students, empowering them to achieve their academic and professional goals effectively.
              </p>

            </div>
          </div>

          {/* Row 2 */}
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-12 col-md-6 mb-3 mb-md-0 px-0">
              <img src={ourMission} alt="Mission" className="img-fluid" />
            </div>

            <div className="col-12 col-md-6">
              <h2 className="fw-bold mb-3">
                <span className="headingPart1">Our</span>{" "}
                <span className="headingPart2">Mission</span>
              </h2>
              <p>
                To remove educational barriers, ensure equal access to quality learning, and empower every student—regardless of location, financial background, or category—to achieve their full potential and succeed in higher education and life.
              </p>
            </div>
          </div>

        </div>
      </section>


      <section className="advantages-section bg-white py-5" >
        <div className="container advantages-container">
          <h2 className="mb-4 fw-bold text-center">
            <span className="headingPart1">Advantages of</span>
            <span className="headingPart2"> Admissionshala</span>
          </h2>
          <Advantages />
        </div>
      </section>


    </>
  );
}
function CounterValue({ end }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(interval);
        setValue(end);
      } else {
        setValue(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end]);

  return <>{value}</>;
}