import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll } from "framer-motion";
import PricingButton from "./PricingButton";
import Header from "./Header";
import Cards from "./Cards";
import ModalCard from "./ModalCard";
import { isMobile } from "react-device-detect";

const stepsVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 1,
    y: "100%",
    transition: {
      duration: 0,
      delay: 1.5,
    },
  },
};

const Sustainability = () => {
  const stepsRef = useRef(null);
  const headerHelper = useRef(null);
  const exitOffset = isMobile ? -75 : -60;

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["0.03 start", "1 end"],
  });

  const [expandedCard, setExpandedCard] = useState(null);

  const showHeader = useInView(headerHelper, {
    margin: `0% 0% ${exitOffset}% 0%`,
  });
  const showSteps = useInView(stepsRef, { margin: "1000% 0% -100% 0%" });

  return (
    <div className="relative flex  flex-col justify-center h-fit text-accent bg-base-20">
      <motion.div
        initial={{ y: "100%", transition: { duration: 0.1, delay: 2 } }}
        animate={
          showHeader
            ? { y: "0%", opacity: 1, transition: { duration: 0.7, delay: 0.2 } }
            : showSteps
            ? {
                y: "-100%",
                opacity: 1,
                transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] },
              }
            : {
                y: "100%",
                opacity: 0,
                transition: { duration: 0, delay: 0.4 },
              }
        }
        className={
          "flex flex-col sticky top-0 z-50 -mt-[130vh] transition-colors duration-1000  gap-1 min-h-screen justify-center items-center " +
          ((showHeader || showSteps) && " bg-base-20")
        }
      >
        <Header showHeader={showHeader} showSteps={showSteps} />
        <PricingButton
          expanded={expandedCard}
          showHeader={showHeader}
          setExpanded={() => setExpandedCard(true)}
        />
      </motion.div>

      <AnimatePresence>
        {expandedCard && <ModalCard closeCard={() => setExpandedCard(false)} />}
      </AnimatePresence>

      <div ref={headerHelper} className="h-1 -mt-[50vh] w-full "></div>
      <motion.div
        variants={stepsVariants}
        animate={showSteps ? "visible" : "hidden"}
        initial="hidden"
        className="sticky overflow-hidden flex -mt-[100vh] top-0 h-[100dvh]"
      >
        <Cards scrollYProgress={scrollYProgress} visible={showSteps} />
      </motion.div>

      <div ref={stepsRef} className="h-[500vh] "></div>
    </div>
  );
};

export default Sustainability;

export const ProgressBar = () => {
  return (
    <div className="fixed flex gap-2 items-center font-medium flex-row  bottom-8 inset-x-0 mx-auto w-fit text-2xl text-base-content">
      {STEPS.map((step) => (
        <span
          key={step.title}
          className="w-12 relative md:w-20 xl:w-24 h-2 rounded-xl overflow-hidden bg-neutral-content bg-opacity-20"
        >
          <span className="absolute left-0 w-1/2 bg-base-content h-full top-0"></span>
        </span>
      ))}
    </div>
  );
};
