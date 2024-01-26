import { useState, useContext, useRef } from 'react';
import { useInView, useMotionValueEvent, useScroll } from 'framer-motion';

import HeroSection from '../HomePage/Hero/HeroSection';
import ServicesSection from '../HomePage/Services/ServicesSection';
import StepsSection from '../HomePage/HowIsWorks/StepsSection';
import AboutSection from '../HomePage/About/AboutSection';
import Footer from '../HomePage/Footer';
import SustainabilitySection from '../HomePage/Sustainability/SustainabilitySection';
import Navbar from '../Navbar';

import { ThemeContext } from '../../store/user-context.jsx';

const Homepage = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(null);

  const { scrollY } = useScroll();

  const [servicesInView, setServicesInView] = useState();
  const [homeInView, setHomeInView] = useState();

  const color = servicesInView || homeInView;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollProgress(latest);
    if (latest > 100) {
      setHidden(true);
      return;
    }
    setHidden(false);
  });

  return (
    <div>
      <Navbar hidden={hidden} scrollProgress={scrollProgress} />
      <div
        className={
          'h-full rounded-b-3xl md:rounded-b-4xl transition-colors duration-700 ' +
          (color ? ' bg-accent' : ' bg-base-200')
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

export default Homepage;
