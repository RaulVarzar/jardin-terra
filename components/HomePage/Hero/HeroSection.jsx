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
    offset: ["0.8 end", "end"],
  });

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: home,
    offset: ["start", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0.6, 1], ["100%", "0%"]);

  // bg-gradient-to-b from-primary-content to-accent via-primary-content

  return (
    <>
      <div className="relative z-10 bg-primary-content" id="home">
        {/* <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-primary-content"
      ></motion.div> */}
        <section
          ref={home}
          className="xl:px-12 3xl:max-w-screen-3xl w-full relative items-center min-h-screen px-4 sm:px-6 md:px-10 pt-[12vh] 2xl:pt-[12vh]  mx-auto  md:pt-28  "
        >
          <div className="flex flex-col w-full h-full justify-stretch gap-y-4 md:gap-y-8 lg:gap-y-10 2xl:gap-y-16 3xl:gap-y-20 ">
            <motion.div className="flex  flex-col will-change-transform xl:items-start items-center w-full h-full  gap-2  justify-between   grow xl:gap-2 xl:py-4">
              <Header scrollYProgress={scrollYProgress} />
              {/* <ChevronButton opacity={chevronOpacity} /> */}
            </motion.div>

            <Carousel scrollYProgress={sectionScrollProgress} />
          </div>
        </section>
        {/* <RoundedBottom scrollProgress={scrollYProgress} /> */}
      </div>
      <div className="h-[20vh] md:h-[25vh] xl:h-[30vh] z-10 relative ">
        <div
          className="absolute inset-x-0 bottom-0 h-full 
              bg-gradient-to-b from-primary-content via-primary-content/60 to-transparent"
        ></div>
      </div>
    </>
  );
}

export default HeroSection;
