import { useState } from "react";
import {
  AnimatePresence,
  motion,
  progress,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { STEPS } from "../../utils/data";

const stepsVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: 0.1,
      ease: [0.75, 0, 0.25, 1],
    },
  },
  hidden: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.7, 0, 0.3, 1],
    },
  },
};

const Cards = ({ scrollYProgress, visible }) => {
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest.toFixed(2));
    const stepValue = 1 / STEPS.length;
    const newStep = Math.trunc(latest / stepValue);
    if (activeStep != newStep || newStep >= 3.8) {
      setActiveStep(newStep);
    }
  });

  return (
    <motion.div className="flex flex-col  md:flex-col items-center w-screen justify-start gap-4 lg:px-12  h-[95vh] md:h-screen xl:gap-6 px-3 py-4 md:py-16  xl:py-12  xl:px-12">
      <div className="w-full h-36 md:h-60 lg:h-72 xl:h-80 2xl:h-96 ">
        <Tree activeStep={activeStep} visible={visible} progress={progress} />
      </div>
      <motion.div
        variants={stepsVariants}
        animate={visible ? "visible" : "hidden"}
        className="flex flex-col gap-2  md:gap-4 lg:gap-6  max-w-screen-xl  w-full items-center justify-start"
      >
        {STEPS.map((step, i) => (
          <Step
            step={step}
            key={i}
            id={i}
            activeStep={activeStep}
            progress={scrollYProgress}
            numberOfSteps={STEPS.length}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Cards;

export const Step = ({ step, activeStep, id, progress, numberOfSteps }) => {
  const divider = 1 / numberOfSteps;
  const y = useTransform(
    progress,
    [id * divider + 0.03, (id + 1) * divider],
    ["-100%", "0%"]
  );

  return (
    <div className=" flex flex-col overflow-hidden relative bg-secondary-content w-full bg-opacity-75 gap-0 px-4 md:px-5 rounded-sm md:rounded-md lg:px-8 xl:px-10 2xl:px-16 py-2.5 sm:py-3 md:py-4 xl:py-6   justify-center items-start ">
      {/* PROGRESS BAR */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full bg-accent"
      />
      {/*  */}

      <div className="flex z-10 flex-row items-center justify-between w-full">
        <div className="flex flex-row justify-between w-full items-center">
          <h3 className="text-base uppercase leading-none font-bold text-balance tracking-wide sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-content ">
            {step.title}
          </h3>
          <div className="flex justify-center size-6 md:size-12 items-center">
            <AnimatePresence mode="wait">
              {activeStep > id && <CheckMark checked={activeStep > id} />}
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              {activeStep <= id && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="font-bold text-base-content text-xl sm:text-2xl md:text-5xl"
                >
                  {id + 1}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeStep == id && (
          <motion.div
            key="text"
            initial="closed"
            animate="active"
            exit="closed"
            variants={{ active: { height: "auto" }, closed: { height: 0 } }}
            transition={{ duration: 0.8, ease: [0.75, 0, 0.25, 1], delay: 0.1 }}
            className="h-full  mx-auto max-w-6xl px-1.5 md:px-3 xl:px-5 font-light overflow-hidden text-xs lg:tracking-wide sm:text-lg xl:text-xl text-neutral-content"
          >
            <p className="py-2 text-pretty tracking-wide leading-4 sm:leading-5 md:leading-tight opacity-80">
              {step.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Tree = ({ activeStep, visible, progress }) => {
  const variants = {
    hidden: {
      opacity: 0.3,
      y: "-130%",
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, delay: 0.6, ease: [0.75, 0, 0.25, 1] },
    },
  };
  const pathVariants = {
    incomplete: {
      opacity: 0.6,
      filter: "saturate(0%)brightness(15%)",
      scale: 1,
      transition: { duration: 0.4, delay: 0.1, ease: "easeIn" },
    },
    complete: {
      opacity: 1,
      scale: 1.05,
      filter: "saturate(100%)brightness(100%)",
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="auto"
      height="auto"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      variants={variants}
      animate={visible ? "visible" : "hidden"}
    >
      <motion.path
        variants={pathVariants}
        animate={activeStep > 0 ? "complete" : "incomplete"}
        d="M42.26,58.186c-.26,.34-.5,.69-.73,1.06-1.44,2.51-2.3,5.33-2.64,8.22-15.8-4.7-18.75-8.59-17.45-26.75,17.2,5.65,21.1,7.9,20.82,17.47Z"
        className="fill-[#3d5327] "
      />
      <motion.path
        variants={pathVariants}
        animate={activeStep > 1 ? "complete" : "incomplete"}
        d="M74.28,55.256c-14.88,11.13-16.41,10.82-27.02,1.19l-.01-.11c2.88-1.97,5.64-4.1,7.88-6.79,6.07-3.03,10.51-1.3,19.15,5.71Z"
        className="fill-[#4e6f44]"
      />
      <motion.path
        variants={pathVariants}
        animate={activeStep > 2 ? "complete" : "incomplete"}
        d="M58.59,37.546c-.45,2.19-1.05,4.34-2.2,6.35-.33,.51-.66,1.03-1,1.55-15.89-4.72-18.86-8.59-17.57-26.79,18.03,5.93,21.45,8.11,20.77,18.89Z"
        className="fill-[#3e5332] "
      />

      <motion.path
        variants={pathVariants}
        animate={activeStep > 3 ? "complete" : "incomplete"}
        d="M82.53,24.226c-5.35,14.93-6.59,15.42-18.66,13.56l-.16-.2c.03-.16,.04-.31,.06-.47,.07-.83,.14-1.8,.23-2.81,3.35-9.53,6.49-11.26,18.53-10.08Z"
        className="fill-[#3b502b]"
      />

      <path
        d="M67.37,20.916c-2.18,1.86-2.32,4.92-2.79,7.58-.21,1.62-.41,3.8-.58,5.81-.09,1.01-.16,1.98-.23,2.81-.02,.16-.03,.31-.06,.47-.41,3.16-1.74,6.18-3.59,8.72-.31,.43-.64,.84-.99,1.24-2.24,2.69-5,4.82-7.88,6.79-1.79,1.24-3.63,2.41-5.43,3.61-.65,.41-1.21,.9-1.7,1.46-.93,1.05-1.6,2.32-2.14,3.62-.24,.55-.45,1.11-.65,1.67-.82,2.3-1.99,5.55-2.59,7.92-.75,2.75-1.41,5.6-2.24,8.55-.04,.23-.41,.25-.47,.02-.93-3.2-1.24-6.66-.84-10.02,.34-2.89,1.2-5.71,2.64-8.22,.23-.37,.47-.72,.73-1.06,1.7-2.28,4.07-4.07,6.5-5.26,4.65-2.29,7.6-6.91,10.33-11.18,.34-.52,.67-1.04,1-1.55,1.15-2.01,1.75-4.16,2.2-6.35,.69-3.35,1.03-6.79,2.4-10,1.22-2.83,2.85-6.54,6.24-7.08,.24,0,.36,.31,.14,.45Z"
        className="fill-[#4D3C38]"
      />
    </motion.svg>
  );
};

export const CheckMark = () => {
  return (
    <motion.span className="h-5 md:h-10">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg-snoweb svg-theme-light"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.8,
            transition: {
              duration: 0.8,
              delay: 0.8,
              ease: [0.75, 0, 0.25, 1],
            },
          }}
          d="M12.3,55.4,33.8,76.9,87.7,23.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-slate-200 fill-none stroke-[12px] sm:stroke-[10px]"
        />
      </motion.svg>
    </motion.span>
  );
};
