import { AnimatePresence, motion, useTransform } from "framer-motion";
import ProgressBar from "./ProgressBar";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0,
      ease: [0.7, 0, 0.3, 1],
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      delay: 0,
      ease: [0.7, 0, 0.3, 1],
    },
  },
};

const Tree = ({ activeStep, showSteps, children }) => {
  return (
    <motion.div className="sticky top-0  md:h-screen max-w-3xl flex flex-col gap-12 max-md:w-full  px-2 max-md:pt-6 md:px-12 md:w-1/2 xl:px-16  items-center justify-center ">
      <AnimatePresence>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="w-full max-w-3xl relative h-40 md:h-80 lg:h-96 xl:h-[80vh] 2xl:h-[75vh] "
        >
          <SVG activeStep={activeStep} />
        </motion.div>
      </AnimatePresence>
      {children}
    </motion.div>
  );
};

export default Tree;

export const SVG = ({ activeStep }) => {
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
      filter: "saturate(0%)brightness(45%)",
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
      viewBox="15 20 70 60"
      className=" absolute top-0 left-0 right-0 mx-auto w-9/12  md:w-full h-full"
      preserveAspectRatio="xMidYMid meet"
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
