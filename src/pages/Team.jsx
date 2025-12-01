import HeroBanner from '../components/HeroBanner';
import aboutHero from '../images/teamHero.jpg';
export default function Team() {
  return (
    <>
      <HeroBanner
        line1="The Minds Powering Our Vision"
        line2="Presenting Our Core Team"
        bgImage={aboutHero}
      />

    </>
  );
}
