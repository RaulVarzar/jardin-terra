import { motion } from 'framer-motion';

const ProgressBar = ({ isVisible, width, opacity }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      key={isVisible}
      className="absolute left-0 right-0 flex items-center justify-start h-1 mx-auto rounded-md max-w-80 xl:max-w-xl bg-base-content bottom-10"
    >
      <motion.div
        style={{ width, opacity: opacity }}
        className="absolute z-50 h-0.5 rounded-full bg-neutral-content"
      ></motion.div>
    </motion.div>
  );
};

export default ProgressBar;
