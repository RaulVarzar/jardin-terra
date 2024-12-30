import { motion } from "framer-motion";

const titleVariants = {
  hidden: {
    y: "100%",
    transition: { duration: 0.5, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
  visible: {
    y: "0%",
    transition: { duration: 0.9, delay: 0.3, ease: [0.45, 0, 0.15, 1] },
  },
  exit: {
    y: "100%",
    transition: { duration: 0.3, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
};

const Header = ({ visible }) => {
  return (
    <div className="overflow-hidden max-w-4xl 2xl:max-w-5xl text-neutral-content">
      <motion.h3
        variants={titleVariants}
        initial="hidden"
        animate={visible ? "visible" : "exit"}
        className="text-3xl font-semibold text-center  leading-none tracking-wide uppercase sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl"
      >
        Modul de lucru
      </motion.h3>
    </div>
  );
};

export default Header;
