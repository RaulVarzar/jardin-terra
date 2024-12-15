import { motion } from "framer-motion";

import { LuInfo } from "react-icons/lu";

const Pricing = ({ expanded, setExpanded }) => {
  return (
    <motion.div
      layoutId="toggle"
      onClick={setExpanded}
      className="flex flex-row items-center origin-top-right text-base-content border border-base-content border-opacity-60 hover:border-opacity-85  hover:brightness-150 gap-6 px-8 py-3 md:px-10 md:py-4 mx-auto text-base font-light rounded-lg cursor-pointer   md:text-md xl:text-lg w-fit group "
    >
      <motion.span layout="position" className="text-2xl md:text-3xl">
        <LuInfo />
      </motion.span>
      <motion.h3
        layout="position"
        className="text-base md:text-lg uppercase font-medium tracking-wide "
      >
        Cum stabilim costurile?
      </motion.h3>
    </motion.div>
  );
};

export default Pricing;
