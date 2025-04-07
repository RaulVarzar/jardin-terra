"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import PricingButton from "./PricingButton";
import ModalCard from "./ModalCard";
import { useRef, useState } from "react";
import { TextReveal, WordReveal } from "../../../utils/animations.jsx";
import useScreenWidth from "../../../utils/useScreenWidth";

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
  const [openModal, setOpenModal] = useState(null);
  const isMobile = useScreenWidth();

  const { scrollYProgress } = useScroll({
    target: exitHelper,
    offset: ["start 0.42", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "97%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <>
      <motion.div
        id="mod-de-lucru"
        style={{ opacity, scale, y }}
        className={
          "flex gap-3 w-fit md:sticky  top-[0vh]  z-20 mx-auto inset-x-0 flex-col justify-start items-center pt-[30vh] " +
          (isMobile ? " min-h-[40vh]" : "min-h-[40vh]")
        }
      >
        <AnimatePresence>
          <motion.div className="flex flex-col  gap-2 z-[100] lg:gap-3 2xl:gap-4 justify-center h-full items-center relative">
            <Title />
            <Description />
            <PricingButton
              opened={openModal}
              setExpanded={() => setOpenModal(true)}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div ref={exitHelper} className="h-0" />

      <AnimatePresence>
        {openModal && <ModalCard closeCard={() => setOpenModal(false)} />}
      </AnimatePresence>
    </>
  );
};

const Title = ({}) => {
  return (
    <TextReveal duration={1.6} threshold={10}>
      <motion.h3 className="text-3xl font-semibold text-center text-neutral-content  leading-none tracking-wide uppercase sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl">
        Modul de lucru
      </motion.h3>
    </TextReveal>
  );
};

export default Header;

const Description = () => {
  return (
    <motion.span className=" text-sm text-center  w-full flex flex-row flex-wrap justify-center text-neutral-content font-light leading-snug tracking-wider px-6  opacity-70 max-w-3xl md:text-base xl:text-lg text-balance 2xl:text-xl">
      <WordReveal duration={2} delay={0.7} staggerDelay={0.03}>
        Înainte de a trece la lopată și săpăligă, analizăm dimensiunile și forma
        spațiului tău verde. Apoi, ascultăm cu atenție dorințele tale și începem
        proiectarea grădinii. Suntem consultanții peisagiști pe care te poți
        baza pentru a avea propriul tău colț de natură, în armonie cu nevoile
        tale personale sau profesionale.
      </WordReveal>
    </motion.span>
  );
};
