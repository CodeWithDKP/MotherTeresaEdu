import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroBanner from '../components/HeroBanner';
import teamHero from '../images/teamHero.jpg';
import { useApp } from '../context/AppContext';
import '../components/styles/pages/Team.css';
export default function Team() {
  const { Team } = useApp();
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
            <span className="headingPart2"> Team</span>
          </h2>

          <p className="mb-4 text-center">
            Our passionate and dedicated educators and staff who strive to make quality education accessible to every student.
          </p>
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
            {Team.teamData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="team-card-box">
                  <div className="team-card p-3 rounded-3">
                    <img src={item.img} className="img-fluid" alt={item.name} />
                    <h3 className="mt-3 h5 fw-bold">{item.name}</h3>
                    <p className="text-muted">{item.role}</p>
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
