import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { BiMessageSquareDots } from "react-icons/bi";
import MagneticButton from "../../MagneticButton";
import { ScaleIn, TextFadeIn, TextReveal } from "../../utils/animations";

const ContactSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.2 end", "0.9 end"],
  });
  const y = useTransform(scrollYProgress, [0, 0.8], ["10vh", "0vh"]);
  const scale = useTransform(scrollYProgress, [0, 0.8], ["93%", "100%"]);

  return (
    <div
      id="contact"
      className="flex flex-col items-center bg-base-300 justify-center pt-[10vh] gap-6 relative z-[10] "
    >
      <motion.div
        ref={containerRef}
        style={{ y }}
        className="flex items-center justify-center w-full min-h-[75vh] md:min-h-[65vh] px-2 md:px-4 lg:px-8 py-8 md:py-20 gap-y-10 gap-x-8 flex-col lg:grid-cols-2  md:gap-x-12 xl:gap-16  rounded-3xl md:rounded-4xl overflow-hidden "
      >
        <div className="flex flex-col justify-center gap-4">
          <TextReveal duration={1.3}>
            <h3 className="text-3xl sm:text-4xl font-bold leading-none text-center md:tracking-wide md:text-6xl xl:text-7xl text-neutral-content">
              Ai mai multe intrebări?
            </h3>
          </TextReveal>
          <TextFadeIn duration={1.5}>
            <h5 className="max-w-6xl text-base leading-tight font-normal text-center lg:text-3xl text-balance text-base-content opacity-70">
              Vrem să te cunoaștem, să aflăm mai multe despre spațiul tău verde
              și visul în care dorești să se transforme.
            </h5>
          </TextFadeIn>
        </div>
        <div className="flex flex-col items-center w-full gap-y-1">
          <ContactButton />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;

export const ContactButton = () => {
  return (
    <MagneticButton magnify={1.15} amount={[8, 4]}>
      <ScaleIn duration={1}>
        <motion.button
          href="/contact"
          className="flex items-center gap-6 px-6 py-4 md:py-8 tracking-wide uppercase  rounded-full shadow-md text-md md:text-lg xl:text-2xl md:px-12 xl:px-20 font-medium bg-base-content group text-base-200 "
        >
          Trimite-ne un mesaj
          <span className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            <BiMessageSquareDots />
          </span>
        </motion.button>
      </ScaleIn>
    </MagneticButton>
  );
};
