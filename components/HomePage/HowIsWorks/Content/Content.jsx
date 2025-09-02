"use client";
import { useRef, useState } from "react";
import {
  AnimatePresence,
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
import { useScrollSteps } from "../../../hooks/useScrollSteps";

const Content = () => {
  const isMobile = useScreenWidth();

  const stepsRef = useRef(null);
  const contentRef = useRef(null);
  const { step } = useScrollSteps({ steps: 4, ref: stepsRef });

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.12", "end"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: stepsRef,
    offset: ["end 0.95", "end 0.5"],
  });

  const opacity = useTransform(exitProgress, [0, 1], [1, 0]);
  const scale = useTransform(exitProgress, [0, 1], [1, 0.92]);

  const visible = useInView(contentRef, { amount: 0.96 });

  return (
    <section ref={stepsRef} className="relative flex flex-row h-[400vh]">
      <motion.div
        style={{ opacity, scale }}
        ref={contentRef}
        className="w-full sticky top-0 h-screen max-w-screen-3xl  mx-auto flex flex-col lg:flex-row   items-start justify-center"
      >
        <Tree steps={STEPS} scrollProgress={scrollYProgress} />

        <Steps activeStep={step} steps={STEPS} />
      </motion.div>
      <AnimatePresence>
        {visible && (
          <ProgressBar
            progress={scrollYProgress}
            numberOfSteps={STEPS.length}
          />
        )}{" "}
      </AnimatePresence>
    </section>
  );
};

export default Content;
