"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PricingButton from "./PricingButton.jsx";

import { useRef } from "react";
import { TextReveal } from "../../../utils/animations.jsx";
import useScreenWidth from "../../../utils/useScreenWidth";
import SplitLinesAnimation from "../../../utils/SplitLinesAnimation.jsx";

const titleVariants = {
  hidden: {
    y: "10%",
    filter: "blur(10px)",
    opacity: 0,
    transition: { duration: 0.7, delay: 0.1, ease: [0.45, 0, 0.15, 1] },
  },
  visible: {
    y: "0%",
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 1.2, delay: 0.2, ease: [0.45, 0, 0.15, 1] },
  },
  exit: {
    y: "15%",
    filter: "blur(10px)",
    opacity: 0,
    transition: { duration: 0.8, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
};

export const Header = () => {
  const exitHelper = useRef(null);
  const elementRef = useRef(null);
  const isMobile = useScreenWidth();

  const { scrollYProgress } = useScroll({
    target: exitHelper,
    offset: ["end 0.7", "end 0.5"],
  });
  const { scrollYProgress: headerExit } = useScroll({
    target: exitHelper,
    offset: ["start end", "end 0.5"],
  });
  const { scrollYProgress: elementProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "97%"]);
  const y = useTransform(elementProgress, [0, 1], ["20vh", "0vh"]);
  const exitY = useTransform(headerExit, [0, 1], ["0vh", "-15vh"]);

  return (
    <>
      <motion.div
        // style={{ opacity, y }}
        ref={elementRef}
        className={
          "flex gap-3  will-change-transform w-fit md:stick top-[0vh] z-1 mx-auto inset-x-0 flex-col justify-start items-center pt-[20vh] lg:pt-[30vh]  " +
          (isMobile ? " " : " ")
        }
      >
        <motion.div className="flex flex-col gap-2 z-[100] lg:gap-3 2xl:gap-4 justify-center h-full items-center ">
          <Title />
          <Description />
        </motion.div>
      </motion.div>
      <PricingButton />
      <div ref={exitHelper} className="md:h-[1vh] w-full " />
    </>
  );
};

const Title = ({}) => {
  return (
    <TextReveal duration={0.9} threshold={10}>
      <motion.h3 className="text-4xl font-semibold text-center text-neutral-content pb-4  leading-none tracking-wide uppercase sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl">
        Modul de lucru
      </motion.h3>
    </TextReveal>
  );
};

export default Header;

const Description = () => {
  return (
    <motion.span className="  w-full flex flex-row flex-wrap justify-center opacity-70 px-2 max-w-3xl 2xl:max-w-4xl">
      <SplitLinesAnimation
        initialDelay={0.1}
        duration={1}
        once={true}
        margin={15}
        text="Înainte de a trece la lopată și săpăligă, analizăm dimensiunile și forma
        spațiului tău verde. Apoi, ascultăm cu atenție dorințele tale și începem
        proiectarea grădinii. Suntem consultanții peisagiști pe care te poți
        baza pentru a avea propriul tău colț de natură, în armonie cu nevoile
        tale personale sau profesionale."
        className="text-center md:text-lg lg:text-xl xl:text-2xl  2xl:text-3xl text-neutral-content font-light leading-snug tracking-wider text-base"
      />
    </motion.span>
  );
};
