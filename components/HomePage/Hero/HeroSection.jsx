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

  const carouselY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const chevronOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["100%", "0%"]
  );
  const mainOpacity = useTransform(scrollYProgress, [0, 0.5], ["100%", "45%"]);
  const carouselScale = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);

  return (
    <div className="relative bg-secondary-content" id="home">
      <section
        ref={home}
        className=" grid-rows-12 3xl:px-24  max-w-screen-3xl bg-secondary-content w-full relative grid items-center z-40 h-screen px-4 pt-[10vh] 2xl:pt-[13vh] pb-10 2xl:pb-[7vh] mx-auto xl:grid-cols-12  overflow-hidden md:pt-28  gap-x-8 xl:px-1  xl:grid-rows-1 snap-center 2xl:px-16"
      >
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col items-start w-full h-full  gap-2 row-span-6 sm:row-span-5 xl:col-span-6 max-xl:order-last justify-between   grow xl:gap-2 xl:py-4"
        >
          <Header />
          <motion.div
            initial={{ y: "200%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 1.2, duration: 1.2, ease: "easeInOut" },
            }}
            style={{ opacity: chevronOpacity }}
          >
            <ChevronButton />
          </motion.div>
        </motion.div>
        <FromRight
          delay={0.8}
          duration={1.1}
          style={{ y: carouselY, opacity: mainOpacity, scale: 1 }}
          className="w-full h-full row-span-6 sm:row-span-7 xl:col-span-6"
        >
          <Carousel scrollYProgress={scrollYProgress} />
        </FromRight>
      </section>
      <RoundedBottom scrollProgress={scrollYProgress} />
    </div>
  );
}

export default HeroSection;
