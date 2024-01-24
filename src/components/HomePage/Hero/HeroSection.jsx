import ChevronButton from './ChevronButton';
import Carousel from './HomeCarousel';
import Header from './Header';
import { FromRight } from '../../utils/animations';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const HeroSection = () => {
  const home = useRef(null);
  const { scrollYProgress } = useScroll({
    target: home,
    offset: ['start', 'end start'],
  });

  const carouselY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const headerY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const chevronOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['100%', '0%']
  );
  const mainOpacity = useTransform(scrollYProgress, [0, 0.5], ['100%', '45%']);
  const carouselScale = useTransform(scrollYProgress, [0, 1], ['100%', '90%']);

  return (
    <section
      ref={home}
      className="relative grid items-center w-full h-screen px-4 pt-24 pb-10 mx-auto overflow-hidden grid-rows-10 gap-x-8 xl:px-12 xl:grid-cols-10 xl:grid-rows-1 snap-center 3xl:px-12"
    >
      <motion.div
        style={{ y: headerY, opacity: mainOpacity }}
        className="flex flex-col items-center w-full h-full row-span-6 gap-2 sm:row-span-5 md:row-span-4 max-xl:order-last xl:col-span-5 3xl:col-span-4 justify-evenly grow xl:gap-2 xl:py-4"
      >
        <Header />
        <motion.div
          initial={{ y: '200%', opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1.2, duration: 1.2, ease: 'easeInOut' },
          }}
          style={{ opacity: chevronOpacity }}
        >
          <ChevronButton />
        </motion.div>
      </motion.div>
      <FromRight
        delay={0.8}
        duration={1.1}
        style={{ y: carouselY, opacity: mainOpacity, scale: carouselScale }}
        className="w-full h-full row-span-4 xl:col-span-5 sm:row-span-5 md:row-span-6 grow 3xl:col-span-6"
      >
        <Carousel scrollYProgress={scrollYProgress} />
      </FromRight>
    </section>
  );
};

export default HeroSection;
