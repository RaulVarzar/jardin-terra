import { useSplitLines } from "../hooks/useSplitLines";
import { motion, useInView } from "framer-motion";

// This component takes a text, measures the lines dinamically and animates each line on the screen. Needs the useSplitLines hook to work

const SplitLinesAnimation = ({
  text,
  initialDelay = 0, // Delay before starting the animation
  duration = 0.6, // Duration of each animation
  stagger = 0.1, // Stagger between each line of text
  once = false, // If set to true, the animation will only run the first time the user scrolls to the element
  margin = 10, // Percentage of the viewport from the bottom that the element has to cover for it to be visible
  className,
}) => {
  const [lines, ref] = useSplitLines(text);
  const isInView = useInView(ref, { margin: `-${margin}%`, once });

  return (
    <motion.div className={`relative w-full h-full  ${className}`}>
      <div ref={ref} className="invisible w-full">
        {text}
      </div>
      <ul className="  w-full absolute top-0 left-0">
        {lines.map((line, i) => (
          <motion.li className="overflow-hidden" key={i}>
            <motion.p
              initial={{ opacity: 0, y: "120%" }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{
                delay: initialDelay + i * stagger,
                duration,
                ease: [0.75, 0, 0.2, 1],
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
