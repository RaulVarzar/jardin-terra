import { motion, useMotionTemplate, useTransform } from "framer-motion";

const RoundedBottom = ({ scrollProgress }) => {
  const clipPathRoundness = useTransform(
    scrollProgress,
    [0, 0.4, 0.95],
    [70, 35, 0]
  );
  const clipPathOffset = useTransform(scrollProgress, [0, 1], [20, 0]);
  const clipPath = useMotionTemplate`ellipse(65% ${clipPathRoundness}% at 50% ${clipPathOffset}%)`;

  return (
    <motion.div
      style={{ clipPath }}
      className="z-40 absolute w-full -bottom-[0%] translate-y-full  "
    >
      <div className=" z-40 w-full h-32 bg-primary-content sm:h-72 "></div>
    </motion.div>
  );
};

export default RoundedBottom;
