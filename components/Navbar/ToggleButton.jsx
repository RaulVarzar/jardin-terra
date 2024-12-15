import { motion } from "framer-motion";

const ToggleButton = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className="flex flex-col items-end w-12 px-2 md:w-20 gap-3 md:px-4 py-4 md:py-8 cursor-pointer bg-secondary-content  md:hover:bg-opacity-65 rounded-full bg-opacity-0 transition-all duration-300"
    >
      <motion.span
        animate={
          menuOpen ? { scaleX: 0.9, rotate: -40, y: "300%" } : { scaleX: 1 }
        }
        transition={{
          delay: 0.2,
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="w-full h-0.5 bg-neutral-content rounded-full "
      ></motion.span>
      <motion.span
        animate={
          menuOpen
            ? { scaleX: 0.9, rotate: 40, y: "-350%" }
            : { scaleX: 0.8, x: "10%" }
        }
        transition={{
          delay: 0.2,
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="w-full h-0.5 bg-neutral-content rounded-full "
      ></motion.span>
    </div>
  );
};

export default ToggleButton;
