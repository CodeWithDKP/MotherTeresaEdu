const HeroBanner = ({ line1, line2, bgImage }) => {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-mask"></div>

      <div className="container h-100 d-flex align-items-center">
        <div className="hero-text">
          <h2>
            <span className="headingHero1">{line1}</span><br />
            <span className="headingHero2">{line2}</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
