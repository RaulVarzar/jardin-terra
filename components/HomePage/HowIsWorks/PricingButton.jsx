import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { LuInfo } from "react-icons/lu";

const buttonVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 0.5, duration: 1, ease: [0.7, 0, 0.25, 1] },
  },
  exit: {
    scaleX: 1,
    opacity: 0,
    transition: { delay: 0, duration: 0.25, ease: [0.7, 0, 0.3, 1] },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 0.3, ease: [0.7, 0, 0.25, 1] },
  },
};

const PricingButton = ({ expanded, setExpanded, showSteps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });
  return (
    <motion.div
      layoutId="toggle"
      onClick={setExpanded}
      variants={buttonVariants}
      initial="hidden"
      animate={isInView && !showSteps ? "visible" : "exit"}
      ref={ref}
      className=" text-base-content origin-left w-fit bg-secondary hover:bg-secondary-content transition-colors duration-300 px-4 sm:px-6 md:px-6 py-3 lg:px-8 overflow-hidden md:py-4 rounded-lg cursor-pointer    group "
    >
      <motion.div
        animate={
          !expanded
            ? {
                opacity: 0.8,
                y: "0%",
                transition: {
                  duration: 0.4,
                  delay: 0.35,
                  ease: "easeInOut",
                },
              }
            : { opacity: 0, y: "150%", transition: { duration: 0.01 } }
        }
        className="flex flex-row items-center  gap-6 text-neutral-content"
      >
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl "
        >
          <LuInfo />
        </motion.span>
        <motion.h3
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-base uppercase font-medium tracking-wide"
        >
          Cum stabilim costurile?
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default PricingButton;
