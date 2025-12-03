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

      <section className="clients-section bg-white py-5">
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
                  className="client-card-box"
                  onMouseEnter={() => swiperRef.current.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current.autoplay.start()}
                >
                  <div className="client-card p-3 rounded-3">
                    <img
                      src={item.img}
                      className="img-fluid rounded"
                      alt={item.name}
                    />
                    <h3 className="mt-3 h5 fw-bold">{item.name}</h3>
                    <p className="text-muted">{item.place}</p>
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
