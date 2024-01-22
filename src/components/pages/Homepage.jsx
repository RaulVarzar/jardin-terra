import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import Carousel from '../HomePage/HomeCarousel';
import Header from '../HomePage/Header';
import HowItWorks from '../HowItWorksSection/HowItWorks';
import HorizontalScrollCarousel from '../HomePage/HorizontalScrollCarousel';
import VerticalScrollCarousel from '../HomePage/VerticalScrollCarousel';
import { FromRight } from '../utils/animations';
import ChevronButton from '../ChevronButton';
import About from '../HomePage/About';

const Homepage = () => {
  const home = useRef();
  const servicii = useRef();
  const modDeLucru = useRef();

  const [activeSection, setActiveSection] = useState('');

  function goToSection(section) {
    eval(section).current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function makeActive(section) {
    setActiveSection(section);
  }

  return (
    <div className=" homepage">
      <section
        ref={home}
        makeActive={makeActive}
        className="relative grid items-center w-full px-4 pt-24 pb-10 mx-auto overflow-hidden grid-rows-10 gap-x-8 xl:px-12 xl:grid-cols-10 xl:grid-rows-1 snap-center 3xl:px-12"
      >
        <div className="flex flex-col items-center w-full h-full row-span-6 gap-2 sm:row-span-5 md:row-span-4 max-xl:order-last xl:col-span-5 3xl:col-span-4 justify-evenly grow xl:gap-2 xl:py-4">
          <Header />
          <ChevronButton />
        </div>
        <FromRight
          delay={0.8}
          duration={1.1}
          className="w-full h-full row-span-4 xl:col-span-5 sm:row-span-5 md:row-span-6 grow 3xl:col-span-6"
        >
          <Carousel />
        </FromRight>
      </section>

      <HorizontalScrollCarousel ref={servicii} makeActive={makeActive} />

      {/* <section className="relative grid place-content-center snap-center">
        <HowItWorks />
      </section> */}

      <VerticalScrollCarousel ref={modDeLucru} makeActive={makeActive} />
      <About />
    </div>
  );
};

export default Homepage;
