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
      className=" mx-auto justify-center flex flex-row gap-2 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-3 w-60 md:w-80 xl:w-96"
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
      className="bg-neutral overflow-hidden h-1.5 rounded-full relative w-full"
    >
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-secondary-content absolute left-0 top-0 origin-left"
      />
    </div>
  );
};

export default ProgressBar;
