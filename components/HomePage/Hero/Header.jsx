import { WordReveal, Reveal } from "../../utils/animations.jsx";
import { motion, useTransform } from "framer-motion";
import { isMobile } from "react-device-detect";
import ActionButton from "./ActionButton.jsx";

const HEADER = "GRĂDINII TALE".split("");

const Header = ({ scrollYProgress }) => {
  const carouselY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [0, -3]);
  const carouselX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <motion.div
      style={isMobile ? null : { y: carouselY, rotate, x: carouselX }}
      className="flex flex-col  px-2  grow xl:w-fit items-center xl:items-start justify-center gap-y-1.5 xl:gap-y-3 "
    >
      <div className="flex flex-col w-full  max-xl:text-center gap-1 text-neutral-content ">
        <Reveal delay={0.5} duration={1.4} offset={130}>
          <motion.h3 className="text-2xl  font-bold leading-none sm:text:3xl md:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
            Noi suntem artiștii
          </motion.h3>
        </Reveal>
        <Reveal delay={0.5} duration={1.4} offset={130}>
          <div className="inline-block ">
            <h3 className="  font-black leading-tight table text-[10vw] md:text-7xl lg:text-8xl max-xl:text-center xl:text-7xl 2xl:text-8xl 3xl:text-9xl">
              GRĂDINII TALE
            </h3>
          </div>
        </Reveal>
      </div>

      <div className="flex  flex-wrap justify-center max-w-2xl font-light leading-none opacity-50 xl:justify-start text-neutral-content text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl">
        <WordReveal offset={135} delay={1} duration={1.2}>
          Proiectăm spații verzi în armonie cu natura
        </WordReveal>
      </div>

      <ActionButton />
    </motion.div>
  );
};

export default Header;
