import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { STEPS } from "../../../utils/data";

import Tree from "./Tree";
import Steps from "./Steps";
import RoundedTop from "./RoundedTop";
import ProgressBar from "./ProgressBar";

const Content = () => {
  const stepsRef = useRef(null);

  const { scrollYProgress: enterProgress } = useScroll({
    target: stepsRef,
    offset: ["start end", "start 0.5"],
  });

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.5", "end start"],
  });

  const visible = useInView(stepsRef, { margin: "1000% 0% -50% 0%" });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepValue = 1 / STEPS.length;
    const newStep = (latest / stepValue).toFixed(1);
    if (activeStep != newStep && newStep < STEPS.length) {
      setActiveStep(newStep);
    }
  });

  return (
    <div className="relative -mt-[100vh]  w-full ">
      <motion.div className="sticky w-full z-50 top-0">
        <motion.div
          initial={{ marginTop: "100vh" }}
          animate={visible ? { marginTop: "0vh" } : { marginTop: "100vh" }}
          transition={{ duration: 0.8, ease: [0.33, 0.01, 0.15, 1.0] }}
          className="bg-secondary absolute top-0 w-full z-10"
        >
          <RoundedTop scrollProgress={enterProgress} />
          <div className="w-full h-screen z-50 flex flex-col md:flex-row  items-center gap-y-4 justify-center  mx-auto max-w-screen-3xl">
            <Tree activeStep={activeStep} showSteps={visible} />
            <Steps
              progress={scrollYProgress}
              steps={STEPS}
              showSteps={visible}
            />
          </div>
          <ProgressBar
            progress={scrollYProgress}
            numberOfSteps={STEPS.length}
            activeStep={Math.trunc(activeStep)}
          />
        </motion.div>
      </motion.div>

      <div ref={stepsRef} className="h-[250vh] mt-[120vh] w-0" />
    </div>
  );
};

export default Content;
