import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import HeroSection from '../HomePage/Hero/HeroSection';
import ServicesSection from '../HomePage/Services/ServicesSection';
import StepsSection from '../HomePage/HowIsWorks/StepsSection';
import AboutSection from '../HomePage/About/AboutSection';
import Footer from '../HomePage/Footer';
import SustainabilitySection from '../HomePage/Sustainability/SustainabilitySection';
import Navbar from '../Navbar';

const Homepage = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    setScrollProgress(latest);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div>
      <Navbar hidden={hidden} scrollProgress={scrollProgress} />
      <div className="h-full  bg-base-200 rounded-b-3xl md:rounded-b-4xl">
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

export default Homepage;
