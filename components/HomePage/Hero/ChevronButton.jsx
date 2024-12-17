import { motion } from "framer-motion";
import MagneticButton from "../../MagneticButton";

const ChevronButton = ({ goToSection }) => {
  return (
    <MagneticButton magnify={1.1}>
      <motion.div
        whileInView={{
          y: [8, 0, 8],
          opacity: [0.5, 1, 1, 0.5],
        }}
        transition={{
          ease: "easeInOut",
          duration: 2.5,
          repeat: Infinity,
        }}
        className="flex justify-center w-full mx-auto cursor-pointer"
        onClick={() => goToSection("skills")}
      >
        <svg
          height="30"
          width="50"
          className="scale-75 opacity-40 w-fit md:scale-100"
        >
          <line
            x1="0"
            y1="3"
            x2="25"
            y2="17"
            // strokeLinecap="round"
            className="stroke-[4px]  stroke-base-content"
          />
          <line
            x1="23"
            y1="17"
            x2="50"
            y2="3"
            // strokeLinecap="round"
            className="stroke-[4px] stroke-base-content"
          />
        </svg>
      </motion.div>
    </MagneticButton>
  );
};

export default ChevronButton;
