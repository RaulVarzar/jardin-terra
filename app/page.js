import SmoothScroll from "/components/SmoothScroll";

import HeroSection from "/components/HomePage/Hero/HeroSection.jsx";
import ServicesSection from "/components/HomePage/Services/ServicesSection.jsx";
import StepsSection from "/components/HomePage/HowIsWorks/StepsSection.jsx";
import ContactSection from "/components/HomePage/Contact/ContactSection.jsx";
import Footer from "/components/HomePage/Footer.jsx";
import SustainabilitySection from "/components/HomePage/Sustainability/SustainabilitySection.jsx";
import Navbar from "/components/Navbar/Navbar.jsx";
import ScrollBar from "/components/ScrollBar.jsx";

const Home = () => {
  return (
    <SmoothScroll>
      <ScrollBar />
      <Navbar />
      <div className="h-full rounded-b-3xl md:rounded-b-4xl overflow-clip bg-primary">
        <HeroSection />
        <ServicesSection />
        <StepsSection />
        <SustainabilitySection />
        <ContactSection />
      </div>
      <Footer />
    </SmoothScroll>
  );
};

export default Home;
