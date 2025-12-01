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
                  Admissionshala.com is a budding venture of the parent organization Career Leader
                  Educational Services. Career Leader is a college <b>admission consultancy</b> firm based out
                  of Pune, Maharashtra that holds an enhanced experience of 14+ years in the field of
                  education counseling, affirmations, and assistance in professional opportunities across
                  India.
                </p>

                <p>
                  Ever since its commencement as a <b>college admissions counselor</b>, Career Leader has been
                  extremely mainstream and effective to outline students' future in the field of management,
                  engineering, medical- domestic and international, law, architecture, and distance learning
                  education. With the advent of the digital world, our <b>admission consultancy service</b>
                  intends to take this inheritance forward in a digitized manner- Admissionshala.com.
                </p>

                <p>
                  Often students do not get the right guidance and eventually, they end up forfeiting the
                  college of their preferred choice. Admissionshala is a free digital portal for all the
                  students that will go about as their personal disarray solver in their pockets. It
                  resembles a ray of light in the haziness of bewildered aspiring candidates and intends to
                  deliver the correct course for outlining their professional path. It succors to provide
                  aspiring students opportunities and grab the best out of their forthcoming endeavors.
                </p>

                <p>
                  With the admissionshala portal, we aim to offer the graduating batches a student-centric
                  portal that will nurture and fetch alluring end-to-end solutions. Every student faces
                  numerous doubts while choosing the right college for their higher education. With this
                  facility, we wish to be at the top of the list of admission consultants in India.
                </p>

                <p>
                  Admissionshala portal brings you a crystal-clear analysis of different colleges across the
                  nation. Here, one will undergo a segregated process of opting out of a bunch of illustrious
                  colleges based on the parameters like specialization, the field of interests, fees, and
                  location to name a few.
                </p>

                <p>
                  Moreover, it will be a one-time process, i.e., a student will likewise not need to go
                  through the extensive, dreary cycle of filling in their own subtleties again and again for
                  each school they apply to. If a student faces inconvenience at any step on the admissionshala
                  portal, our experienced school admission consultant will be promptly accessible to convert
                  it into a cakewalk.
                </p>

                <p>
                  To summarise, Career Leader as a graduate school admissions consultant has put the "CRUX" of
                  decade-long insights in this field in the structure of admissionshala.com for you to choose
                  wisely, choose rightly!
                </p>

                <p className="fw-bold">Vision and Mission page:</p>

                <ol>
                  <li>
                    <b>Vision:</b> To aid a one-stop admission process solution for students to save their
                    valuable time, money, and efforts for a good college search.
                  </li>

                  <li>
                    <b>Mission:</b> To eradicate all the short-term educational barriers coming in the way of
                    higher education aspirants, and provide equal opportunities to one and all. To work
                    towards fulfilling the basic constitutional "right to education" for students irrespective
                    of every geographical area, financial background, and category.
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
                To aid a one-stop admission process solution for students to save their valuable time, money, and efforts for a good college search.
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
                To eradicate all the short-term educational barriers coming in the way of higher education aspirants, provide equal opportunities to one and all. To work towards fulfilling the basic constitutional “right to education” for students irrespective of every geographical area, financial background, and category.
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