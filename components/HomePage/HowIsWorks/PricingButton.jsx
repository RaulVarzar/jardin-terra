import { motion } from "framer-motion";

import { LuInfo } from "react-icons/lu";

const buttonVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, duration: 1.2, ease: [0.7, 0, 0.25, 1] },
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: { delay: 0, duration: 0.35, ease: [0.7, 0, 0.3, 1] },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 0.3, ease: [0.7, 0, 0.25, 1] },
  },
};

const PricingButton = ({ expanded, setExpanded }) => {
  return (
    <motion.div
      layoutId="toggle"
      onClick={setExpanded}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-base-content origin-left w-fit my-4 bg-secondary hover:bg-secondary-content transition-colors duration-300 px-4 py-3  md:px-6   overflow-hidden lg:py-4 lg:px-8 rounded-full cursor-pointer    group "
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
        className="flex flex-row items-center  gap-4 text-neutral-content"
      >
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg xl:text-xl "
        >
          <LuInfo />
        </motion.span>
        <motion.h3
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-sm xl:text-base font-normal tracking-wider"
        >
          Cum stabilim costurile?
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default PricingButton;
