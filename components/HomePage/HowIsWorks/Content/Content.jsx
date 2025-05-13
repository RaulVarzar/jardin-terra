"use client";
import { useRef, useState } from "react";
import {
  motion,
  useInView,
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
    offset: ["start 0.25", "0.96 end "],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: stepsRef,
    offset: ["end 0.8", "end 0.5"],
  });

  const opacity = useTransform(exitProgress, [0, 1], [1, 0]);

  const visible = useInView(stepsRef, { margin: "1000% 0% -70% 0%" });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepValue = 1 / STEPS.length;
    const newStep = Math.floor(latest / stepValue);

    if (activeStep != newStep) {
      setActiveStep(newStep);
    }
  });

  return (
    <>
      <motion.div
        style={{ opacity }}
        className="w-full origin-bottom max-w-screen-3xl  mx-auto flex flex-col lg:flex-row  items-start justify-center"
      >
        <Tree
          activeStep={activeStep}
          showSteps={visible || isMobile}
          progress={scrollYProgress}
        ></Tree>

        <div ref={stepsRef} className="lg:mt-[15vh] pt-[10vh] ">
          <Steps progress={scrollYProgress} steps={STEPS} />
        </div>
      </motion.div>
      {visible && (
        <ProgressBar
          progress={scrollYProgress}
          numberOfSteps={STEPS.length}
          activeStep={Math.floor(activeStep)}
        />
      )}
    </>
  );
};

export default Content;
