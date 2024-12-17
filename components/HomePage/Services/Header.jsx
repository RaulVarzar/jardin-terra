import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import TextReveal from "./TextReveal";

const Header = () => {
  const contentVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(2px)",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.5,
        delay: 0,
      },
    },
    visible: {
      opacity: 1,

      filter: "blur(0px)",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.7,
        delay: 0.1,
      },
    },
  };

  const sectionRef = useRef(null);
  const scrollableRef = useRef(null);

  const showContent = useInView(sectionRef, { margin: "0% 0% -80% 0%" });

  const { scrollYProgress } = useScroll({
    target: scrollableRef,
    offset: ["start end", "end "],
  });

  const { scrollYProgress: enterProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start"],
  });
  const titleY = useTransform(enterProgress, [0, 0.75], ["40vh", "0vh"]);
  const titleOpacity = useTransform(enterProgress, [0.1, 0.5], ["0%", "100%"]);

  const titleScale = useTransform(enterProgress, [0, 0.75], ["95%", "100%"]);

  const { scrollYProgress: exitProgress } = useScroll({
    target: scrollableRef,
    offset: ["end", "end start"],
  });

  const exitOpacity = useTransform(exitProgress, [0.4, 0.8], ["100%", "0%"]);
  const exitY = useTransform(exitProgress, [0.15, 0.8], ["0vh", "-12vh"]);

  return (
    <>
      <div ref={sectionRef} className="sticky top-0 flex flex-col h-screen z-0">
        <motion.div
          style={{ opacity: exitOpacity, y: exitY }}
          className="sticky top-0 -mt-[100vh] flex flex-col items-center justify-center h-screen gap-4 lg:gap-6 2xl:gap-8 mx-auto  w-screen "
        >
          <motion.div
            className="overflow-hidden"
            style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
          >
            <motion.h3 className=" font-bold text-5xl leading-none px-24 tracking-wide text-center sm:text-5xl lg:text-7xl xl:text-8xl  text-neutral-content">
              SERVICIILE NOASTRE
            </motion.h3>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
            className="max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-8 z-10 "
          >
            <TextReveal progress={scrollYProgress} />
          </motion.div>
        </motion.div>
      </div>
      <div
        ref={scrollableRef}
        className="h-[400vh]" // SET HEADER HEIGTH FOR TEXT REVEAL ANIMATION
      />
    </>
  );
};

export default Header;
