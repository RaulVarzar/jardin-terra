import { motion } from "framer-motion";

const ProgressBar = ({ isVisible, width }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      key={isVisible}
      className="absolute left-0 right-0 flex items-center justify-start h-2 mx-auto bg-opacity-50 rounded-md bg-base-300 max-w-80 xl:max-w-xl bottom-10"
    >
      <motion.div
        style={{ width }}
        className="absolute z-50 h-1 rounded-full bg-neutral-content "
      ></motion.div>
    </motion.div>
  );
};

export default ProgressBar;
