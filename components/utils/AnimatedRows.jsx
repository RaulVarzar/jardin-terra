import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

//ANIMATE EACH ROW INDIVIDUALLY (RESPONSIVE)
export default function AnimatedRows({
  initialDelay = 0,
  duration = 0.6,
  stagger = 0.05,
  className,
  children,
}) {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const words = Array.from(containerRef.current.querySelectorAll(".word"));
    const grouped = [];

    words.forEach((word) => {
      const top = word.offsetTop;
      let line = grouped.find((line) => Math.abs(line.top - top) < 5);
      if (!line) {
        line = { top, words: [] };
        grouped.push(line);
      }
      line.words.push(word.textContent);
    });

    setLines(grouped.map((line) => line.words.join(" ")));
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="relative flex justify-center items-center w-full"
    >
      {/* Measurement Container (invisible) */}
      <div
        ref={containerRef}
        className={`w-full text-balance invisible ${className}`}
        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
      >
        {children.split(" ").map((word, i) => (
          <span
            key={i}
            className="word inline-block mr-1"
            style={{
              whiteSpace: "nowrap", // ensures word stays together
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <motion.div className="absolute top-0 left-0 w-full">
        {lines.map((line, i) => (
          <motion.div key={i} className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: "120%" }}
              animate={isInView && { opacity: 1, y: 0 }}
              exit={{
                opacity: 0.6,
                y: "120%",
                transition: { delay: 0, duration: 1.5 },
              }}
              transition={{
                delay: initialDelay + i * stagger,
                duration,
                ease: [0.75, 0, 0.2, 1],
              }}
              className={`will-change-transform ${className}`}
            >
              {line}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
