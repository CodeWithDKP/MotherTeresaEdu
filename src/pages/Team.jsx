import HeroBanner from '../components/HeroBanner';
import teamHero from '../images/teamHero.webp';
import '../components/styles/pages/Team.css';
import ceo from "../images/ceo.jpeg";
import Nagendra from "../images/Nagendra.jpeg";

export default function Team() {
  return (
    <>
      <HeroBanner
        line1="The Minds Powering Our Vision"
        line2="Presenting Our Core Team"
        bgImage={teamHero}
      />

      <section className="team-section bg-white py-5">
        <div className="container team-container">
          <h2 className="mb-3 fw-bold text-center">
            <span className="headingPart1">Meet Our</span>
            <span className="headingPart2"> Management</span>
          </h2>

          <p className="mb-5 text-center">
            Our passionate and dedicated leaders who guide Mother Teresa Educational Foundation with vision and commitment.
          </p>

          {/* ===== Team Member 1 ===== */}
          <div className="row align-items-stretch justify-content-center team-row mb-5">

            {/* Left: Image */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="team-media">
                <img
                  src={ceo}
                  alt="JAGADEESH"
                  className="team-single-img"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="col-12 col-md-7">
              <div className="team-content">
                <h3 className="h4 fw-bold mb-2">JAGADEESH</h3>
                <p className="text-muted mb-3">Management</p>

                <p>
                  With over 5 years of experience in education and management, JAGADEESH has been instrumental in shaping the vision and mission of Mother Teresa Educational Foundation.
                </p>
                <p>
                  Under his leadership, the foundation has successfully implemented student development programs, faculty enrichment initiatives, and community-focused educational outreach.
                </p>
                <p>
                  He strongly believes in holistic education, personalized mentorship, and creating an environment where students can thrive academically, professionally, and ethically.
                </p>
              </div>
            </div>

          </div>

          {/* ===== Team Member 2 ===== */}
          <div className="row align-items-stretch justify-content-center team-row">

            {/* Left: Image */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="team-media">
                <img
                  src={Nagendra}
                  alt="Nagendra"
                  className="team-single-img"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="col-12 col-md-7">
              <div className="team-content">
                <h3 className="h4 fw-bold mb-2">NAGENDRA</h3>
                <p className="text-muted mb-3">Management</p>

                <p>
                  Nagendra plays a key role in operational planning and institutional development at Mother Teresa Educational Foundation.
                </p>
                <p>
                  He focuses on maintaining academic standards, supporting faculty growth, and ensuring smooth coordination across departments.
                </p>
                <p>
                  His commitment to discipline, transparency, and student-centered values helps strengthen the foundation’s long-term vision.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
