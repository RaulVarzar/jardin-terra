import { useSplitLines } from "../hooks/useSplitLines";
import { motion, useInView } from "framer-motion";

// This component takes a text, measures the lines dinamically and animates each line on the screen. Needs the useSplitLines hook to work

const SplitLinesAnimation = ({
  text,
  initialDelay = 0, // Delay before starting the animation
  enterFromTop = false,
  exitToTop = false,
  duration = 0.6, // Duration of each animation
  exitDuration = 0.4,
  exitDelay = 0,
  stagger = 0.1, // Stagger between each line of text
  once = false, // If set to true, the animation will only run the first time the user scrolls to the element
  margin = 10, // Percentage of the viewport from the bottom that the element has to cover for it to be visible
  className = "",
  ...props
}) => {
  const [lines, ref] = useSplitLines(text);
  const isInView = useInView(ref, { margin: `0px 0px -${margin}% 0px`, once });

  return (
    <motion.div className={`relative w-full h-full  ${className}`} {...props}>
      <div ref={ref} className="invisible w-full">
        {text}
      </div>

      <ul className="  w-full absolute top-0 left-0">
        {lines.map((line, i) => (
          <motion.li className="overflow-hidden" key={i}>
            <motion.p
              initial={{ opacity: 0, y: enterFromTop ? "-120%" : "120%" }}
              animate={isInView && { opacity: 1, y: 0 }}
              exit={{
                opacity: 0.6,
                y: exitToTop ? "-120%" : "120%",
                transition: {
                  delay: exitDelay + i * stagger * 0.75,
                  duration: exitDuration,
                },
              }}
              transition={{
                delay: initialDelay + i * stagger,
                duration,
                ease: [0.75, 0, 0.25, 1],
              }}
            >
              {line}
            </motion.p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SplitLinesAnimation;
