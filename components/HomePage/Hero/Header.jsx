import { FromLeft, WordReveal, Reveal } from "../../utils/animations.jsx";
import { motion } from "framer-motion";
import Socials from "./Socials.jsx";
import { PiPlantDuotone } from "react-icons/pi";
import MagneticButton from "../../MagneticButton.jsx";

const HEADER = "GRĂDINII TALE".split("");

const Header = () => {
  return (
    <div className="flex flex-col  px-2  grow xl:w-fit  justify-center gap-y-1.5 xl:gap-y-3 ">
      <div className="flex flex-col w-full  max-xl:text-center gap-1 text-neutral-content ">
        <Reveal delay={0.8} duration={1.2}>
          <motion.h3 className="text-2xl  font-bold leading-none sm:text:3xl md:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
            Noi suntem artiștii
          </motion.h3>
        </Reveal>
        <Reveal delay={1.2} duration={1.2}>
          <div className="inline-block ">
            <h3 className="  font-black leading-tight table text-[10vw] md:text-7xl lg:text-8xl max-xl:text-center xl:text-7xl 2xl:text-8xl 3xl:text-9xl">
              GRĂDINII TALE
            </h3>
          </div>
        </Reveal>
      </div>

      <h3 className="flex  flex-wrap justify-center max-w-2xl font-light leading-none opacity-50 xl:justify-start text-neutral-content text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl">
        <WordReveal offset="120" delay={1.6} duration={1.5}>
          Proiectăm spații verzi în armonie cu natura
        </WordReveal>
      </h3>

      <FromLeft delay={1.4} duration={0.7}>
        <a
          href="/contact"
          className="py-3 pl-8 mt-6 max-xl:mx-auto flex flex-row gap-2 pr-4  tracking-wider xl:pl-6 xl:pr-4 xl:py-4  text-neutral-content  hover:backdrop-brightness-125  rounded-xl   mybutton  xl:hover:pl-10 hover:pl-8 bg-base-content"
        >
          <h1 className="text-sm  md:text-lg text-accent-content font-semibold">
            Începe un proiect
          </h1>
          <span className="text-lg md:text-xl xl:text-2xl text-accent-content">
            <PiPlantDuotone />
          </span>
        </a>
      </FromLeft>
    </div>
  );
};

export default Header;
