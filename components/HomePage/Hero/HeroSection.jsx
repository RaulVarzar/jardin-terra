"use client";

import ChevronButton from "./ChevronButton";
import Carousel from "./Carousel";
import Header from "./Header";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import RoundedBottom from "./RoundedBottom";

function HeroSection({}) {
  const home = useRef(null);
  const { scrollYProgress } = useScroll({
    target: home,
    offset: ["start", "end start"],
  });

  const chevronOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["100%", "0%"]
  );

  return (
    <div className="relative bg-primary-content z-10" id="home">
      <section
        ref={home}
        className="xl:px-12 3xl:max-w-screen-3xl w-full relative items-center min-h-screen px-4 sm:px-6 md:px-10 pt-[12vh] 2xl:pt-[12vh] pb-10 mx-auto  md:pt-28  "
      >
        <div className="grid grid-rows-12 min-h-[80svh] 2xl:max-h-[85svh] borde xl:grid-cols-12 xl:grid-rows-1 w-full h-full justify-stretch gap-x-8 gap-y-4 ">
          <motion.div className="flex flex-col will-change-transform xl:items-start items-center w-full h-full  gap-2 row-span-6 sm:row-span-5 xl:col-span-6 2xl:col-span-5 max-xl:order-last justify-between   grow xl:gap-2 xl:py-4">
            <Header scrollYProgress={scrollYProgress} />
            <ChevronButton opacity={chevronOpacity} />
          </motion.div>

          <Carousel scrollYProgress={scrollYProgress} />
        </div>
      </section>
      <RoundedBottom scrollProgress={scrollYProgress} />
    </div>
  );
}

export default HeroSection;
