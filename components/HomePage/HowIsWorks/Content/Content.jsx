import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import useScreenWidth from "../../../utils/useScreenWidth";

import { STEPS } from "../../../utils/data";

import Tree from "./Tree";
import Steps from "./StepsMobile";
import RoundedTop from "./RoundedTop";

const Content = () => {
  const isMobile = useScreenWidth();

  const stepsRef = useRef(null);

  const { scrollYProgress: enterProgress } = useScroll({
    target: stepsRef,
    offset: ["start end", "start 0.5"],
  });

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: isMobile ? ["start 0.8", "end 0.65"] : ["start 0.5", "end start"],
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
    <div className="relative lg:-mt-[100vh] w-full ">
      <motion.div className="lg:sticky w-full z-50 top-0">
        <motion.div
          initial={!isMobile && { marginTop: "100vh" }}
          animate={
            visible || isMobile ? { marginTop: "0vh" } : { marginTop: "100vh" }
          }
          transition={{ duration: 0.8, ease: [0.33, 0.01, 0.15, 1.0] }}
          className={" lg:absolute top-0 w-full z-10 " + (isMobile ? "" : "")}
        >
          {!isMobile && <RoundedTop scrollProgress={enterProgress} />}
          <div
            className={
              "w-full lg:h-screen z-50  flex flex-col md:flex-row  items-center gap-y-4 justify-center " +
              (!isMobile && " bg-accent")
            }
          >
            {!isMobile && (
              <Tree activeStep={activeStep} showSteps={visible || isMobile} />
            )}
            <Steps
              progress={scrollYProgress}
              activeStep={activeStep}
              steps={STEPS}
              showSteps={visible || isMobile}
            />
          </div>
        </motion.div>
      </motion.div>
      <div
        ref={stepsRef}
        className={
          "w-0 " +
          (isMobile ? " h-full absolute top-0 " : " h-[100vh] mt-[120vh]")
        }
      />
    </div>
  );
};

export default Content;
