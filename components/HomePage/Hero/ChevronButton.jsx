import { motion } from "framer-motion";
import MagneticButton from "../../MagneticButton";
import { useLenis } from "lenis/react";

const ChevronButton = ({ opacity }) => {
  const lenisInstance = useLenis();

  const handleClick = (targetElement) => {
    if (targetElement) {
      const scrollToOptions = {
        offset: 0,
        lerp: 0.1,
        duration: 1.5,
        easing: (t) => {
          return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
        },
        immediate: false,
        lock: true,
        force: false,
      };
      lenisInstance.scrollTo(targetElement, scrollToOptions);
    }
  };

  return (
    <motion.div
      initial={{ y: "200%", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 1.2, duration: 1.2, ease: "easeInOut" },
      }}
      style={{ opacity }}
      className="mx-auto"
    >
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
          onClick={() => handleClick("#servicii")}
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
    </motion.div>
  );
};

export default ChevronButton;
