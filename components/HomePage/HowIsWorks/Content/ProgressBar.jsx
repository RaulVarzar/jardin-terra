import { motion, useTransform } from "framer-motion";

const variants = {
  visible: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.8, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
  exit: {
    y: -15,
    filter: "blur(10px)",
    opacity: 0,
    transition: { duration: 0.6, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
};

const ProgressBar = ({ progress, numberOfSteps, activeStep }) => {
  const divider = 1 / numberOfSteps;

  return (
    <motion.div
      variants={variants}
      initial="exit"
      exit="exit"
      animate="visible"
      className=" w-60 2xl:w-80 absolute mx-auto bottom-8 inset-x-0 justify-center flex flex-row gap-2 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-3"
    >
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

const ProgressBarDot = ({ i, divider, activeStep, progress }) => {
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

export default ProgressBar;
