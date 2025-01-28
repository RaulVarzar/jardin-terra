import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { FadeIn, TextFadeIn, TextReveal } from "../../utils/animations";
import CharacterReveal from "./CharacterReveal";

const Header = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0.45 end", "start"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ["start", "0.8 start"],
  });

  const exitOpacity = useTransform(exitProgress, [0.7, 1], ["100%", "0%"]);

  return (
    <div className="lg:min-h-[65vh] flex items-end relative ">
      <motion.div
        style={{ opacity: exitOpacity }}
        ref={sectionRef}
        id="servicii"
        className=" pt-[15vh] pb-[5vh]  flex flex-col items-center justify-end gap-4 lg:gap-6 2xl:gap-8 mx-auto  w-screen "
      >
        <TextReveal duration={1}>
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
