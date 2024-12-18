"use client";

import { useInView } from "framer-motion";

import HeroSection from "/components/HomePage/Hero/HeroSection.jsx";
import ServicesSection from "/components/HomePage/Services/ServicesSection.jsx";
import StepsSection from "/components/HomePage/HowIsWorks/StepsSection.jsx";
import ContactSection from "/components/HomePage/Contact/ContactSection.jsx";
import Footer from "/components/HomePage/Footer.jsx";
import SustainabilitySection from "/components/HomePage/Sustainability/SustainabilitySection.jsx";
import Navbar from "/components/Navbar/Navbar.jsx";
import { useRef } from "react";

const Home = () => {
  const darkRef = useRef(null);
  const setDark = useInView(darkRef, { margin: "0% 0% 10% 0%" });

  return (
    <div>
      <Navbar setDark={setDark} />
      <div
        className={
          "h-full rounded-b-3xl md:rounded-b-4xl transition-colors overflow-clip duration-700 " +
          (setDark ? " bg-base-200" : " bg-primary")
        }
      >
        <HeroSection />
        <ServicesSection />
        <div ref={darkRef}>
          <StepsSection />
          <SustainabilitySection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
