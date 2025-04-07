import { AnimatePresence, motion, useTransform } from "framer-motion";

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
      className=" mx-auto  fixed bottom-4 md:bottom-6 w-full px-3 md:px-6 xl:px-12 justify-center flex flex-row gap-2 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-3 "
    >
      <AnimatePresence>
        {activeStep < numberOfSteps && (
          <>
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
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProgressBarDot = ({ i, divider, activeStep, progress }) => {
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.65, delay: 0, ease: [0.65, 0, 0.25, 1] },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.5, delay: 0, ease: [0.65, 0, 0.25, 1] },
    },
  };

  const scaleX = useTransform(
    progress,
    [i * divider, (i + 1) * divider],
    [0, 1]
  );
  return (
    <motion.div
      variants={variants}
      exit="exit"
      initial="exit"
      animate="visible"
      key={i}
      className="bg-neutral overflow-hidden h-1.5 rounded-full relative w-full"
    >
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-secondary-content absolute left-0 top-0 origin-left"
      />
    </motion.div>
  );
};

export default ProgressBar;
