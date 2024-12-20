import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import PricingButton from "./PricingButton";
import Header from "./Header";
import Tree from "./Tree";
import ModalCard from "./ModalCard";
import { isMobile } from "react-device-detect";
import Steps from "./Steps";
import { STEPS } from "../../utils/data";
import SubHeader from "./SubHeader";

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
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.65", "1 end"],
  });
  const [expandedCard, setExpandedCard] = useState(null);

  const showSteps = useInView(stepsRef, { margin: "1000% 0% -35% 0%" });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepValue = 1 / STEPS.length;
    const newStep = (latest / stepValue).toFixed(1);
    if (activeStep != newStep && newStep < STEPS.length) {
      setActiveStep(newStep);
    }
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: stepsRef,
    offset: ["end", "end 0.5"],
  });

  const scale = useTransform(exitProgress, [0, 1], ["0%", "40000%"]);

  return (
    <>
      <div className=" sticky top-0 w-fit z-50">
        <motion.div
          id="mod-de-lucru"
          animate={showSteps ? { x: "-33%" } : { x: "0%" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.45, 0, 0.15, 1] }}
          ref={sectionRef}
          className="flex flex-row w-fit flex-nowrap sticky top-0 -mt-[50vh] items-center  mx-auto justify-center h-fit"
        >
          <motion.div className="w-[50vw]  flex 2xl:pr-24 sticky gap-3 top-0 flex-col h-screen justify-center items-end">
            <motion.div className="flex max-w-4xl flex-col justify-end items-end">
              <Header showSteps={showSteps} />
              <SubHeader
                openModal={() => setExpandedCard(true)}
                expandedCard={expandedCard}
                showSteps={showSteps}
              />
            </motion.div>
          </motion.div>

          <motion.div className="w-[49vw] z-50 px-8 md:px-12 xl:px-16 sticky top-0 flex h-screen  items-center justify-center">
            <Tree activeStep={activeStep} />
          </motion.div>

          <Steps
            progress={scrollYProgress}
            steps={STEPS}
            activeStep={Math.trunc(activeStep)}
          />
        </motion.div>

        <AnimatePresence>
          {expandedCard && (
            <ModalCard closeCard={() => setExpandedCard(false)} />
          )}
        </AnimatePresence>

        <motion.div
          style={{ scale, height: "1vh", width: "1vh", y: "25vh" }}
          className="absolute inset-x-0  bottom-0 left-[50vw] -translate-x-1/2 rounded-full bg-secondary"
        />
      </div>
      <div ref={stepsRef} className="h-[250vh] relative" />
    </>
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
