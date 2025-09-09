"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import { TextFadeIn, TextReveal } from "../../utils/animations";
import Button from "./Button";

const ContactSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 0.55"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "0vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["97%", "100%"]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.9],
    ["brightness(0.2)", "brightness(1)"]
  );

  return (
    <>
      <div ref={containerRef} id="contact" className="relative h-0"></div>
      <div className="flex flex-col items-center bg-accent rounded-b-3xl min-h-[45vh] py-12 justify-center gap-6 bottom-0 sticky -z-0  ">
        <motion.div
          style={{ y, scale, filter }}
          className="flex items-center justify-center w-full px-2 md:px-4 lg:px-8 py-8 md:py-20 gap-y-10 gap-x-8 flex-col lg:flex-row lg:grid-cols-2  md:gap-x-12 xl:gap-16 overflow-hidden "
        >
          <div className="flex flex-col justify-center gap-4 max-w-3xl 2xl:max-w-4xl">
            <TextReveal duration={1.3} delay={0.1}>
              <h3 className="text-5xl md:text-6xl font-bold leading-none text-center md:tracking-wide lg:text-7xl xl:text-7xl text-neutral-content">
                Ai mai multe intrebări?
              </h3>
            </TextReveal>
            <TextFadeIn duration={1.5} delay={0.5}>
              <h5 className="max-w-6xl text-lg leading-tight font-normal text-center sm:text-2xl lg:text-3xl text-balance text-neutral-content opacity-70">
                Vrem să te cunoaștem, să aflăm mai multe despre spațiul tău
                verde și visul în care dorești să se transforme.
              </h5>
            </TextFadeIn>
          </div>
          <div className="flex flex-col items-center px-3 sm:px-1 w-fit gap-y-1 max-w-2xl md:min-w-96  ">
            <Button />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactSection;
