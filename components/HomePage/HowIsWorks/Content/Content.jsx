"use client";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import useScreenWidth from "../../../utils/useScreenWidth";

import { STEPS } from "../../../utils/data";

import Tree from "./Tree";
import Steps from "./StepsMobile";
import RoundedTop from "./RoundedTop";
import ProgressBar from "./ProgressBar";

const Content = () => {
  const isMobile = useScreenWidth();

  const stepsRef = useRef(null);

  // const { scrollYProgress: enterProgress } = useScroll({
  //   target: stepsRef,
  //   offset: ["start end", "start 0.5"],
  // });

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start", "end"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: stepsRef,
    offset: ["end", "end 0.2"],
  });

  const opacity = useTransform(exitProgress, [0, 1], [1, 0]);

  // const visible = useInView(stepsRef, { margin: "1000% 0% -50% 0%" });
  const visible = true;
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepValue = 1 / STEPS.length;
    const newStep = (latest / stepValue).toFixed(1);
    if (activeStep != newStep && newStep < STEPS.length) {
      setActiveStep(newStep);
    }
  });

  return (
    <>
      <motion.div
        style={{ opacity }}
        className="w-full origin-bottom max-w-screen-3xl mx-auto flex flex-col md:flex-row  items-start justify-center"
      >
        <Tree
          activeStep={activeStep}
          showSteps={visible || isMobile}
          progress={scrollYProgress}
        >
          <ProgressBar
            progress={scrollYProgress}
            numberOfSteps={STEPS.length}
            activeStep={Math.floor(activeStep)}
          />
        </Tree>

        <div ref={stepsRef} className="mt-24 md:mt-[20vh]">
          <Steps progress={scrollYProgress} steps={STEPS} />
        </div>
      </motion.div>
    </>
  );
};

export default Content;
