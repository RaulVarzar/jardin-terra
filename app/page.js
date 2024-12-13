"use client";
import { useState, useContext, useRef } from "react";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";

import HeroSection from "/components/HomePage/Hero/HeroSection.jsx";
import ServicesSection from "/components/HomePage/Services/ServicesSection.jsx";
import StepsSection from "/components/HomePage/HowIsWorks/StepsSection.jsx";
import AboutSection from "/components/HomePage/About/AboutSection.jsx";
import Footer from "/components/HomePage/Footer.jsx";
import SustainabilitySection from "/components/HomePage/Sustainability/SustainabilitySection.jsx";
import Navbar from "/components/Navbar.jsx";

const Home = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(null);

  // const { scrollY } = useScroll();

  const [servicesInView, setServicesInView] = useState();
  const [homeInView, setHomeInView] = useState();

  const color = servicesInView || homeInView;

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   setScrollProgress(latest);
  //   if (latest > 100) {
  //     setHidden(true);
  //     return;
  //   }
  //   setHidden(false);
  // });

  return (
    <div>
      <Navbar hidden={hidden} scrollProgress={scrollProgress} color={color} />
      <div
        className={
          "h-full rounded-b-3xl md:rounded-b-4xl transition-colors overflow-clip duration-700 bg-base-200"
        }
      >
        <HeroSection setHomeInView={setHomeInView} />
        <ServicesSection
          setServicesInView={setServicesInView}
          colored={color}
        />
        <StepsSection />
        <SustainabilitySection />
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
