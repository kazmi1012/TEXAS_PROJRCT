import ContactLink from "../components/Home/ContactLink";
import FindPerfectSection from "../components/Home/FindPerfectSection";
import Hero from "../components/Home/Hero";
import PopularProperties from "../components/Home/PopularProperties";
import ServiceSection from "../components/Home/ServiceSection";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProperties />
      <ServiceSection />
      <Testimonials />
      <FindPerfectSection />
      <ContactLink />
    </div>
  );
};

export default Home;
