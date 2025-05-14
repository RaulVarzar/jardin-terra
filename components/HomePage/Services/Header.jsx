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
    offset: ["start center", "0.8 end"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ["0.85 end", "0.95 end"],
  });

  const exitOpacity = useTransform(exitProgress, [0, 1], ["100%", "0%"]);
  const exitScale = useTransform(exitProgress, [0, 1], ["100%", "96%"]);
  const exitY = useTransform(
    totalProgress,
    [0, 0.9, 1],
    ["10vh", "-3vh", "-8vh"]
  );

  return (
    <div
      ref={sectionRef}
      className="min-h-[180vh] border- border-warning flex items-start relative "
    >
      <motion.div
        style={{ opacity: exitOpacity, scale: exitScale, y: exitY }}
        className=" pt-[5vh] pb-[5vh] min-h-screen -mt-[90vh] will-change-transform sticky top-0 flex flex-col items-center justify-center gap-4 lg:gap-6 2xl:gap-8 mx-auto -z-0 w-screen "
      >
        <TextReveal duration={1}>
          <motion.h3 className=" font-bold text-5xl leading-none px-24 tracking-wide text-center sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-neutral-content">
            SERVICIILE NOASTRE
          </motion.h3>
        </TextReveal>
        <TextFadeIn duration={0.8} threshold={5}>
          <motion.div className="max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-8 z-10 ">
            <CharacterReveal progress={revealProgress} />
          </motion.div>
        </TextFadeIn>
      </motion.div>
    </div>
  );
};

export default Header;
