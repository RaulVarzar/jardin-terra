import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { FadeIn, TextFadeIn, TextReveal } from "../../utils/animations";
import CharacterReveal from "./CharacterReveal";

const Header = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress: totalProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "0.95 end"],
  });

  const { scrollYProgress: revealProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.3", "0.8 end"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ["0.8 end", "end 1.1"],
  });

  const exitOpacity = useTransform(exitProgress, [0, 1], ["100%", "0%"]);
  const exitScale = useTransform(exitProgress, [0, 1], ["100%", "96%"]);
  const exitY = useTransform(totalProgress, [0, 1], ["10vh", "-3vh"]);

  const isInView = useInView(sectionRef, { margin: "0% 0% -70% 0%" });

  return (
    <motion.div ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className=" flex items-start relative h-[180vh] md:h-[220vh]"
      >
        <motion.div
          style={{ opacity: exitOpacity, scale: exitScale, y: exitY }}
          className=" pt-[5vh] pb-[5vh] min-h-screen -mt-[90vh] will-change-transform sticky top-0 flex flex-col items-center justify-center gap-4 lg:gap-6 2xl:gap-8 mx-auto -z-0 w-screen "
        >
          <TextReveal duration={1}>
            <motion.h3 className=" font-bold text-5xl leading-none tracking-wide text-center sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-neutral-content">
              SERVICIILE NOASTRE
            </motion.h3>
          </TextReveal>
          <TextFadeIn duration={0.8} threshold={5}>
            <motion.div className="max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-8">
              <CharacterReveal progress={revealProgress} />
            </motion.div>
          </TextFadeIn>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
