import { motion } from "framer-motion";

import { LuInfo } from "react-icons/lu";

const buttonVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { delay: 1.2, duration: 1, ease: [0.7, 0, 0.25, 1] },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 0.3, ease: [0.7, 0, 0.25, 1] },
  },
};

const PricingButton = ({ expanded, setExpanded, showHeader }) => {
  return (
    <motion.div
      layoutId="toggle"
      onClick={setExpanded}
      variants={buttonVariants}
      initial="hidden"
      animate={showHeader ? "visible" : "hidden"}
      className=" text-base-content bg-accent px-4 sm:px-6 md:px-8 py-3 lg:px-10 overflow-hidden md:py-4 mx-auto rounded-lg cursor-pointer    group "
    >
      <motion.div
        animate={
          !expanded
            ? {
                opacity: 1,
                y: "0%",
                transition: {
                  duration: 0.4,
                  delay: 0.35,
                  ease: "easeInOut",
                },
              }
            : { opacity: 0, y: "150%", transition: { duration: 0.01 } }
        }
        className="flex flex-row items-center  gap-6"
      >
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate={showHeader ? "visible" : "hidden"}
          className="text-2xl md:text-3xl"
        >
          <LuInfo />
        </motion.span>
        <motion.h3
          variants={textVariants}
          initial="hidden"
          animate={showHeader ? "visible" : "hidden"}
          className="text-sm sm:text-base md:text-lg text-neutral-content uppercase font-medium tracking-wide "
        >
          Cum stabilim costurile?
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default PricingButton;
