"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import { TextFadeIn, TextReveal } from "../../utils/animations";
import Button from "./Button";

const ContactSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.2 end", "0.9 end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["5vh", "0vh"]);

  return (
    <div
      id="contact"
      className="flex flex-col items-center bg-accent-content justify-center gap-6 relative z-10 pb-[15vh] "
    >
      <motion.div
        ref={containerRef}
        style={{ y }}
        className="flex items-center justify-center w-full md:min-h-[25vh] px-2 md:px-4 lg:px-8 py-8 md:py-20 gap-y-10 gap-x-8 flex-col lg:flex-row lg:grid-cols-2  md:gap-x-12 xl:gap-16 overflow-hidden "
      >
        <div className="flex flex-col justify-center gap-4 max-w-4xl">
          <TextReveal duration={1.3} delay={0.1}>
            <h3 className="text-6xl sm:text-6xl font-bold leading-none text-center md:tracking-wide md:text-7xl xl:text-7xl text-neutral-content">
              Ai mai multe intrebări?
            </h3>
          </TextReveal>
          <TextFadeIn duration={1.5} delay={0.5}>
            <h5 className="max-w-6xl text-lg leading-tight font-normal text-center sm:text-2xl lg:text-3xl text-balance text-neutral-content opacity-70">
              Vrem să te cunoaștem, să aflăm mai multe despre spațiul tău verde
              și visul în care dorești să se transforme.
            </h5>
          </TextFadeIn>
        </div>
        <div className="flex flex-col items-center w-fit gap-y-1 max-w-2xl  ">
          <Button />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
