"use client";

import ChevronButton from "./ChevronButton";
import Carousel from "./Carousel";
import Header from "./Header";
import { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "framer-motion";
import RoundedBottom from "./RoundedBottom";

function HeroSection({}) {
  const home = useRef(null);
  const { scrollYProgress } = useScroll({
    target: home,
    offset: ["start", "end"],
  });

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: home,
    offset: ["start", "end start"],
  });

  const clipPathRaw = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const clipPath = useMotionTemplate`inset( 0 ${clipPathRaw}% 0 ${clipPathRaw}% round 2vw 2vw 0 0)`;

  return (
    <>
      <div
        className="relative z-10  bg-gradient-to-b from-primary-content via-primary-content/90 to-transparent"
        id="home"
      >
        {/* <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-primary-content"
      ></motion.div> */}
        <section
          ref={home}
          className=" w-full relative items-center min-h-screen   "
        >
          <div className="flex flex-col h-full justify-stretch gap-y-4 md:gap-y-8 lg:gap-y-10 2xl:gap-y-16 3xl:gap-y-20 ">
            <motion.div className="flex px-4 sm:px-6 md:px-0 mx-auto sticky top-0  max-md:min-h-[50vh] 3xl:max-w-screen-3xl flex-col will-change-transform  pt-[12vh]  md:pt-28 2xl:pt-[12vh] xl:items-start items-center w-full h-full  gap-2  justify-between   grow xl:gap-2 xl:py-4">
              <Header scrollYProgress={sectionScrollProgress} />
              {/* <ChevronButton opacity={chevronOpacity} /> */}
            </motion.div>

            <Carousel
              clipPath={clipPath}
              scrollYProgress={sectionScrollProgress}
            />
          </div>
        </section>
        {/* <RoundedBottom scrollProgress={scrollYProgress} /> */}
      </div>
      {/* <div className="h-[20vh] md:h-[25vh] xl:h-[30vh] z-10 relative ">
        <div
          className="absolute inset-x-0 bottom-0 h-full 
              bg-gradient-to-b from-primary-content via-primary-content/60 to-transparent"
        ></div>
      </div> */}
    </>
  );
}

export default HeroSection;
