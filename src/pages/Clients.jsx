import HeroBanner from '../components/HeroBanner';
import careersHero from '../images/careersHero.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { useApp } from "../context/AppContext";

export default function Clients() {

  const { ourClients } = useApp();

  // swiper reference
  const swiperRef = useRef(null);

  return (
    <>
      <HeroBanner
        line1="Our Valued Clients"
        line2="Collaborating With India’s Top Organizations"
        bgImage={careersHero}
      />

      <section className="clients-section bg-light py-5">
        <div className="container clients-container">

          <h2 className="mb-3 fw-bold text-center">
            <span className="headingPart1">Our</span>{" "}
            <span className="headingPart2">Clients</span>
          </h2>

          <p className="mb-4 text-center">
            Trusted by leading brands and organizations across India.
          </p>

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
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              576: { slidesPerView: 2, slidesPerGroup: 2 },
              992: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            style={{ paddingBottom: 36 }}
          >
            {ourClients.clients.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="card shadow-sm border-0"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                  }}
                >
                  <div
                    className="card-img-top"
                    style={{
                      height: "160px",
                      overflow: "hidden",
                      borderTopLeftRadius: "0.375rem",
                      borderTopRightRadius: "0.375rem"
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </div>


                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{item.name}</h5>
                    <p className="card-text text-muted">{item.place}</p>
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
