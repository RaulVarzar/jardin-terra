import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { FadeIn, TextFadeIn, TextReveal } from "../../utils/animations";
import CharacterReveal from "./CharacterReveal";

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

  const showContent = useInView(sectionRef, { margin: "0% 0% -10% 0%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0.7 end", "0.2 start"],
  });

  // const { scrollYProgress: enterProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "start"],
  // });
  // const titleY = useTransform(enterProgress, [0, 0.75], ["40vh", "0vh"]);
  // const titleOpacity = useTransform(enterProgress, [0.1, 0.5], ["0%", "100%"]);
  // const titleScale = useTransform(enterProgress, [0, 0.75], ["95%", "100%"]);

  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ["start", "0.8 start"],
  });

  const exitOpacity = useTransform(exitProgress, [0.7, 1], ["100%", "0%"]);
  // const exitY = useTransform(exitProgress, [0.45, 0.8], ["0vh", "-10vh"]);

  return (
    <div className="min-h-[80vh] flex items-end relative ">
      <motion.div
        style={{ opacity: exitOpacity }}
        ref={sectionRef}
        id="servicii"
        className=" py-[5vh] flex flex-col items-center justify-end gap-4 lg:gap-6 2xl:gap-8 mx-auto  w-screen "
      >
        <TextReveal duration={0.8}>
          <motion.h3 className=" font-bold text-5xl leading-none px-24 tracking-wide text-center sm:text-5xl lg:text-7xl xl:text-8xl  text-neutral-content">
            SERVICIILE NOASTRE
          </motion.h3>
        </TextReveal>
        <TextFadeIn duration={0.8} threshold={5}>
          <motion.div className="max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-8 z-10 ">
            <CharacterReveal progress={scrollYProgress} />
          </motion.div>
        </TextFadeIn>
      </motion.div>
    </div>
  );
};

export default Header;
