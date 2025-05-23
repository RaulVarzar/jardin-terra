import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";

const ToggleButton = ({ menuOpen, toggleMenu }) => {
  return (
    <MagneticButton amount={[3, 3]}>
      <div
        onClick={toggleMenu}
        className={
          "relative max-sm:scale-[0.7] origin-right size-20 gap-3 md:px-4 py-4 md:py-8 cursor-pointer   rounded-full  transition-all duration-300  " +
          (menuOpen
            ? " bg-secondary bg-opacity-100"
            : " bg-opacity-0 hover:bg-opacity-100 bg-secondary")
        }
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={
            menuOpen
              ? { scaleX: 1, rotate: -45, y: "300%", x: "0%" }
              : { scaleX: 1.2 }
          }
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="w-10 absolute top-8 left-5 h-0.5 bg-neutral-content  rounded-full "
        ></motion.span>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={
            menuOpen
              ? { scaleX: 1, rotate: 45, y: "-300%" }
              : { scaleX: 1, x: "10%" }
          }
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="w-10 absolute top-11 left-5 h-0.5 bg-neutral-content  rounded-full "
        ></motion.span>
      </div>
    </MagneticButton>
  );
};

export default ToggleButton;
