import { useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import PricingButton from "./PricingButton";
import Header from "./Header";
import Cards from "./Cards";
import ModalCard from "./ModalCard";

const stepsVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0,
      ease: [0.75, 0, 0.25, 1],
    },
  },
  hidden: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.6,
      delay: 0,
      ease: [0.7, 0, 0.3, 1],
    },
  },
};

const Sustainability = () => {
  const sectionRef = useRef(null);
  const headerHelper = useRef(null);
  const stepsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["0.05 start", "0.95 end"],
  });

  const [expandedCard, setExpandedCard] = useState(null);

  const showHeader = useInView(headerHelper, { margin: "0% 0% -65% 0%" });
  const showSteps = useInView(stepsRef, { margin: "1000% 0% -100% 0%" });

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col justify-center h-fit text-accent"
    >
      <motion.div className="flex flex-col   sticky top-0 -mt-[100vh] gap-1  min-h-screen justify-center items-center">
        <Header showHeader={showHeader} />
        <PricingButton
          expanded={expandedCard}
          showHeader={showHeader}
          setExpanded={() => setExpandedCard(true)}
        />
      </motion.div>
      <div className="relative">
        {expandedCard && <ModalCard closeCard={() => setExpandedCard(false)} />}
      </div>

      <div ref={headerHelper} className="h-[30vh] md:h-[40vh] " />

      <motion.div
        variants={stepsVariants}
        animate={showSteps ? "visible" : "hidden"}
        className="sticky overflow-hidden flex items-end md:items-end md:justify-end -mt-[100vh] top-0  h-screen "
      >
        <Cards scrollYProgress={scrollYProgress} visible={showSteps} />
      </motion.div>

      <div ref={stepsRef} className="h-[500vh]"></div>
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
