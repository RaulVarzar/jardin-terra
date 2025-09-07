import { FadeIn, Reveal } from "../../utils/animations.jsx";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import SplitLinesAnimation from "../../utils/SplitLinesAnimation.jsx";
import ActionButton from "../../utils/ActionButton.jsx";

import { PiPlantDuotone } from "react-icons/pi";

const Header = ({ scrollYProgress }) => {
  return (
    <motion.div
      // style={isMobile ? null : { y: carouselY, rotate, x: carouselX }}
      className="flex flex-col md:flex-row gap-y-6 max-md:pb-8 sm:pt-6 lg:pt-12 2xl:pt-16 grow w-full items-center xl:items-start justify-center  xl:gap-y-3 "
    >
      <div className="flex flex-col w-full  max-xl:text-center gap-y-1 md:gap-y-2 text-neutral-content ">
        <Reveal delay={0.5} duration={1.4} offset={130}>
          <motion.h3 className="text-2xl  font-bold leading-none sm:text:3xl md:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
            Noi suntem artiștii
          </motion.h3>
        </Reveal>
        <Reveal delay={0.5} duration={1.4} offset={130}>
          <div className="inline-block ">
            <h3 className="font-black leading-tight table text-[10vw] md:text-7xl lg:text-8xl max-xl:text-center xl:text-8xl 2xl:text-9xl 3xl:text-[6.4rem]">
              GRĂDINII TALE
            </h3>
          </div>
        </Reveal>
        <FadeIn
          delay={1.1}
          duration={1.3}
          offset={70}
          className="w-fit max-md:mx-auto"
        >
          <ActionButton
            href="/contact"
            text="Începe un proiect"
            icon={PiPlantDuotone}
            buttonColor="bg-secondary-content"
            textColor="text-neutral-content"
          />
        </FadeIn>
      </div>

      <div className="flex  flex-wrap max-md:text-center text-pretty justify-center max-w-3xl  xl:justify-start  ">
        <SplitLinesAnimation
          text="Proiectăm spații verzi în armonie cu natura"
          initialDelay={1}
          stagger={0.15}
          duration={1}
          className="font-medium leading-none opacity-30 text-neutral-content tracking-normal text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl"
        />
      </div>
    </motion.div>
  );
};

export default Header;
