import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

import Carousel from '../Carousel';
import Services from '../Services';
import Socials from '../Socials';
import Header from '../Header';
import ServicesGrid from '../ServicesGrid';
import ProjectCard from '../ProjectCard';
import { FromRight } from '../utils/animations';
import HowItWorks from '../HowItWorksSection/HowItWorks';

const SERVICES = [
  { photo: 'gradini-private', title: 'Grădini private' },
  {
    photo: 'spatii-verzi-cartiere',
    title: 'Spații verzi pentru cartiere rezidențiale',
  },
  {
    photo: 'spatii-verzi-birouri',
    title: 'Spații verzi pentru clădiri de birouri',
  },
  {
    photo: 'gradini-comerciale',
    title: 'Grădini pentru spații comerciale și parcuri industriale',
  },
  {
    photo: 'gradini-verticale',
    title: 'Grădini verticale exterioare și interioare',
  },
  { photo: 'acoperisuri-verzi', title: 'Acoperișuri verzi' },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-95%']);

  return (
    <div ref={targetRef} className=" h-[250vh] relative">
      <div className="sticky top-0 flex items-center w-full h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {SERVICES.map((card) => {
            return (
              <ProjectCard
                photo={card.photo}
                title={card.title}
                key={card.title}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className=" homepage">
      <section className="relative grid items-center w-full grid-rows-5 gap-8 px-4 pt-24 pb-10 mx-auto overflow-hidden xl:px-12 xl:grid-cols-7 xl:grid-rows-1 snap-center max-w-8xl">
        <div className="flex flex-col w-full h-full row-span-2 gap-12 max-xl:order-last xl:col-span-3 justify-evenly grow xl:gap-2 ">
          <Header />
          <Socials />
        </div>
        <FromRight
          delay={0.6}
          duration={1.1}
          className="w-full h-full row-span-3 xl:pt-10 xl:col-span-4 grow"
        >
          <Carousel />
        </FromRight>
      </section>

      <HorizontalScrollCarousel />

      <section className="relative grid place-content-center snap-center">
        <HowItWorks />
      </section>
    </div>
  );
};

export default Homepage;
