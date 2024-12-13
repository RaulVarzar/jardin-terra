import ChevronButton from "./ChevronButton";
import Carousel from "./HomeCarousel";
import Header from "./Header";
import { FromRight } from "../../utils/animations";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import RoundedBottom from "./RoundedBottom";

function HeroSection({ setHomeInView }) {
  const home = useRef(null);
  const { scrollYProgress } = useScroll({
    target: home,
    offset: ["start", "end start"],
  });

  // CHECK IF THE SECTION IS IN VIEW
  const isInView = useInView(home);
  useEffect(() => {
    if (!isInView) {
      setHomeInView(false);
      return;
    }
    setHomeInView(true);
  }, [isInView]);

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
    <div className="relative">
      <section
        ref={home}
        className=" grid-rows-12  bg-accent w-full relative grid items-center z-40 h-screen px-4 pt-20 pb-10 mx-auto xl:grid-cols-12  overflow-hidden md:pt-28  gap-x-8 xl:px-12  xl:grid-rows-1 snap-center 3xl:px-12"
      >
        <motion.div
          style={{ y: headerY, opacity: mainOpacity }}
          className="flex flex-col items-center w-full h-full  gap-2 row-span-6 sm:row-span-5 xl:col-span-5 max-xl:order-last justify-evenly grow xl:gap-2 xl:py-4"
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
          className="w-full h-full row-span-6 sm:row-span-7 xl:col-span-7"
        >
          <Carousel scrollYProgress={scrollYProgress} />
        </FromRight>
      </section>
      <RoundedBottom scrollProgress={scrollYProgress} />
    </div>
  );
}

export default HeroSection;
