import { useSplitLines } from "../hooks/useSplitLines";
import { motion } from "framer-motion";

const SplitLinesAnimation = ({
  text,
  initialDelay = 0,
  duration = 0.6,
  stagger = 0.1,
  className,
}) => {
  const [lines, ref] = useSplitLines(text);

  return (
    <motion.div className={`relative w-full h-full  ${className}`}>
      <div ref={ref} className="invisible w-full">
        {text}
      </div>
      <ul className=" text-neutral-content w-full absolute top-0 left-0">
        {lines.map((line, i) => (
          <motion.li className="overflow-hidden" key={i}>
            <motion.p
              initial={{ opacity: 0, y: "120%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: "120%",
                transition: {
                  delay: (i * stagger) / 1.5,
                  duration: duration / 1.25,
                  ease: [0.75, 0, 0.2, 1],
                },
              }}
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
