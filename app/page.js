"use client";

import HeroSection from "/components/HomePage/Hero/HeroSection.jsx";
import ServicesSection from "/components/HomePage/Services/ServicesSection.jsx";
import StepsSection from "/components/HomePage/HowIsWorks/StepsSection.jsx";
import AboutSection from "/components/HomePage/About/AboutSection.jsx";
import Footer from "/components/HomePage/Footer.jsx";
import SustainabilitySection from "/components/HomePage/Sustainability/SustainabilitySection.jsx";
import Navbar from "/components/Navbar/Navbar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className={
          "h-full rounded-b-3xl md:rounded-b-4xl transition-colors overflow-clip duration-700 bg-primary"
        }
      >
        <HeroSection />
        <ServicesSection />
        <StepsSection />
        <SustainabilitySection />
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
