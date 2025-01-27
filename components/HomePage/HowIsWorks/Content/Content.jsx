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
    offset: isMobile ? ["start end", "end 0.8"] : ["start end", "end 0.9"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: stepsRef,
    offset: ["end", "end 0.2"],
  });

  const sectionScale = useTransform(exitProgress, [0, 1], ["100%", "90%"]);

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
        style={{ scale: sectionScale }}
        className="w-full sticky top-0 lg:h-screen z-10 overflow-clip flex flex-col md:flex-row  items-center gap-y-4 justify-center "
      >
        {!isMobile && (
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
        )}
        <Steps
          progress={scrollYProgress}
          activeStep={activeStep}
          steps={STEPS}
          showSteps={visible || isMobile}
        />
      </motion.div>

      <div
        ref={stepsRef}
        className={"w-0 " + (isMobile ? " h-full" : " h-[150vh]")}
      />
    </>
  );
};

export default Content;
