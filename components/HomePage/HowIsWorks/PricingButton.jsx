import { motion } from "framer-motion";

import { LuInfo } from "react-icons/lu";

const PricingButton = ({ expanded, setExpanded }) => {
  return (
    <motion.div
      layoutId="toggle"
      onClick={setExpanded}
      className=" text-base-content bg-accent px-8 py-3 md:px-10 overflow-hidden md:py-4 mx-auto text-base font-light rounded-lg cursor-pointer   md:text-md xl:text-lg w-fit group "
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
        <span className="text-2xl md:text-3xl">
          <LuInfo />
        </span>
        <motion.h3 className="text-base md:text-lg uppercase font-medium tracking-wide ">
          Cum stabilim costurile?
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default PricingButton;
