import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "./Header";
import Tree from "./Tree";
import ModalCard from "./ModalCard";
import { isMobile } from "react-device-detect";
import Steps from "./Steps";
import { STEPS } from "../../utils/data";
import SubHeader from "./SubHeader";
import PricingButton from "./PricingButton";
import RoundedTop from "./RoundedTop";

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
    offset: ["start end", "end"],
  });
  const [expandedCard, setExpandedCard] = useState(null);

  const showHeader = useInView(sectionRef, { margin: "1000% 0% 10% 0%" });

  const showSteps = useInView(sectionRef, { margin: "1000% 0% -60% 0%" });

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
    offset: ["end 1.15", "end 0.65"],
  });

  const circleSize = useTransform(exitProgress, [0, 0.85], [0, 125]);

  const { scrollYProgress: roundedTopProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.4"],
  });

  return (
    // remove the section to make sticky
    <section className="relative">
      <div id="mod-de-lucru" className="relative w-full h-0.5" />

      <motion.div
        ref={sectionRef}
        className="sticky  top-0 z-[100] h-screen flex flex-col"
      >
        <HeaderSection
          setExpanded={() => setExpandedCard(true)}
          visible={showHeader && !showSteps}
          expanded={expandedCard}
          progress={roundedTopProgress}
        />
        {showHeader && (
          <motion.div className=" sticky  w-full  top-[0vh] -mt-[100vh] h-screen -z-[50]">
            <motion.div
              initial={{ marginTop: "100vh" }}
              animate={
                showSteps ? { marginTop: "0vh" } : { marginTop: "100vh" }
              }
              transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
              className="bg-secondary absolute top-0 w-full"
            >
              <RoundedTop scrollProgress={roundedTopProgress} />
              <div className="w-full flex xl:gap-8 2xl:gap-12 3xl:gap-24 flex-row items-center  mx-auto max-w-screen-3xl">
                <Tree activeStep={activeStep} showSteps={showSteps} />
                {/* <div className="h-2 w-2 rounded-full bg-primary-content "></div> */}
                <Steps
                  progress={scrollYProgress}
                  steps={STEPS}
                  activeStep={Math.trunc(activeStep)}
                />
              </div>
              <ProgressBar
                progress={scrollYProgress}
                numberOfSteps={STEPS.length}
                activeStep={Math.trunc(activeStep)}
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
      <div ref={stepsRef} className="h-[200vh] relative -mt-[35vh]" />
      <AnimatePresence>
        {expandedCard && <ModalCard closeCard={() => setExpandedCard(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default Sustainability;

export const HeaderSection = ({ visible, setExpanded, expanded, progress }) => {
  const opacity = useTransform(progress, [0.2, 1], [1, 0.4]);
  const scale = useTransform(progress, [0.2, 1], [1, 0.96]);

  return (
    <div className=" flex sticky gap-3 w-fit -mt-[120vh]  z-[10] mx-auto inset-x-0  top-0 flex-col h-screen justify-center items-center">
      <AnimatePresence>
        {visible && (
          <motion.div
            style={{ opacity, scale }}
            className="flex flex-col gap-2 lg:gap-3 2xl:gap-4 justify-center  items-center   relative"
          >
            <Header />
            <SubHeader />
            <PricingButton expanded={expanded} setExpanded={setExpanded} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProgressBar = ({ progress, numberOfSteps, activeStep }) => {
  const divider = 1 / numberOfSteps;

  return (
    <motion.div className=" w-60 2xl:w-80 absolute mx-auto bottom-8 inset-x-0 justify-center flex flex-row gap-2 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-3">
      {Array(numberOfSteps)
        .fill("")
        .map((step, i) => (
          <ProgressBarDot
            key={i}
            i={i}
            divider={divider}
            progress={progress}
            activeStep={activeStep}
          />
        ))}
    </motion.div>
  );
};

export const ProgressBarDot = ({ i, divider, activeStep, progress }) => {
  const scaleX = useTransform(
    progress,
    [i * divider, (i + 1) * divider],
    [0, 1]
  );
  return (
    <div
      key={i}
      className={
        "bg-base-300 overflow-hidden h-2.5 rounded-full relative transition-all duration-500 " +
        (activeStep === i ? " w-28" : " w-2.5")
      }
    >
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-primary-content absolute left-0 top-0 origin-left"
      />
    </div>
  );
};
