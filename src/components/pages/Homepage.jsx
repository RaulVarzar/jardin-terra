import { useRef } from 'react';
import { motion } from 'framer-motion';

import Carousel from '../HomeCarousel';
import Header from '../Header';
import HowItWorks from '../HowItWorksSection/HowItWorks';
import HorizontalScrollCarousel from '../HomePage/HorizontalScrollCarousel';
import VerticalScrollCarousel from '../HomePage/VerticalScrollCarousel';
import { FromBottom, FromRight } from '../utils/animations';

const Homepage = () => {
  const sectionRef = useRef(null);

  const executeScroll = () => sectionRef.current.scrollIntoView();

  return (
    <div className=" homepage">
      <section className="relative grid items-center w-full px-4 pt-24 pb-10 mx-auto overflow-hidden grid-rows-10 gap-x-8 xl:px-12 xl:grid-cols-10 xl:grid-rows-1 snap-center 3xl:px-12">
        <div className="flex flex-col items-center w-full h-full row-span-6 gap-2 sm:row-span-5 md:row-span-4 max-xl:order-last xl:col-span-5 3xl:col-span-4 justify-evenly grow xl:gap-2 ">
          <Header />

          <FromBottom delay={1.5} duration={0.7}>
            <div
              onClick={() => executeScroll()}
              className="flex flex-col items-center px-6 py-3 text-xl font-light leading-none tracking-wide uppercase transition duration-300 cursor-pointer opacity-70 text-neutral-content hover:opacity-100"
            >
              <motion.i
                animate={{
                  y: [6, 0, 6],
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="fa-solid fa-caret-down"
              ></motion.i>
            </div>
          </FromBottom>
        </div>
        <FromRight
          delay={0.8}
          duration={1.1}
          className="w-full h-full row-span-4 xl:col-span-5 sm:row-span-5 md:row-span-6 grow 3xl:col-span-6"
        >
          <Carousel />
        </FromRight>
      </section>

      <HorizontalScrollCarousel ref={sectionRef} />

      {/* <section className="relative grid place-content-center snap-center">
        <HowItWorks />
      </section> */}

      <VerticalScrollCarousel />
    </div>
  );
};

export default Homepage;
