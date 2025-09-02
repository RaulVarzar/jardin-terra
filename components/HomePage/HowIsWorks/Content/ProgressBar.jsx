import { AnimatePresence, motion, useTransform } from "framer-motion";

const variants = {
  visible: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.8, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
  exit: {
    y: 15,
    filter: "blur(10px)",
    opacity: 0,
    transition: { duration: 0.6, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
};

const ProgressBar = ({ progress, numberOfSteps }) => {
  const divider = 1 / numberOfSteps;

  return (
    <motion.div
      variants={variants}
      initial="exit"
      exit="exit"
      animate="visible"
      className="fixed bottom-4 inset-x-0  mx-auto max-w-screen-3xl md:bottom-6 w-full px-3 md:px-6 xl:px-12 justify-center flex flex-row gap-2 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-3 "
    >
      {Array(numberOfSteps)
        .fill("")
        .map((step, i) => (
          <ProgressBarDot key={i} i={i} divider={divider} progress={progress} />
        ))}
    </motion.div>
  );
};

const ProgressBarDot = ({ i, divider, progress }) => {
  const scaleX = useTransform(
    progress,
    [i * divider, (i + 1) * divider],
    [0, 1]
  );
  return (
    <motion.div
      key={i}
      className="bg-neutral overflow-hidden h-1.5 rounded-full relative w-full"
    >
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-secondary-content absolute  left-0 top-0 origin-left"
      />
    </motion.div>
  );
};

export default ProgressBar;
