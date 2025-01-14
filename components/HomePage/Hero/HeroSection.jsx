"use client";

import ChevronButton from "./ChevronButton";
import Carousel from "./HomeCarousel";
import Header from "./Header";
import { FromRight } from "../../utils/animations";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import RoundedBottom from "./RoundedBottom";

function HeroSection({}) {
  const home = useRef(null);
  const { scrollYProgress } = useScroll({
    target: home,
    offset: ["start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const chevronOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["100%", "0%"]
  );

  return (
    <div className="relative bg-primary-content" id="home">
      <section
        ref={home}
        className=" grid-rows-12  xl:max-w-screen-xl xl:max-2xl:px-6 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl  w-full relative grid items-center z-40 h-screen px-4 pt-[10vh] 2xl:pt-[13vh] pb-10 2xl:pb-[7vh] mx-auto xl:grid-cols-12 md:pt-28  gap-x-8 xl:px-1  xl:grid-rows-1 snap-center 2xl:px-8 3xl:px-12"
      >
        <motion.div className="flex flex-col will-change-transform items-start w-full h-full  gap-2 row-span-6 sm:row-span-5 xl:col-span-6 max-xl:order-last justify-between   grow xl:gap-2 xl:py-4">
          <Header scrollYProgress={scrollYProgress} />
          <ChevronButton opacity={chevronOpacity} />
        </motion.div>

        <Carousel scrollYProgress={scrollYProgress} />
      </section>
      <RoundedBottom scrollProgress={scrollYProgress} />
    </div>
  );
}

export default HeroSection;
