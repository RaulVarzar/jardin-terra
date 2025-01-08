import { motion, useMotionTemplate, useTransform } from "framer-motion";

const RoundedTop = ({ scrollProgress }) => {
  const clipPathRoundness = useTransform(scrollProgress, [0, 1], [10, 70]);
  const clipPathOffset = useTransform(scrollProgress, [0, 1], [110, 105]);
  const clipPath = useMotionTemplate`ellipse(65% ${clipPathRoundness}% at 50% ${clipPathOffset}%)`;

  return (
    <motion.div
      style={{ clipPath }}
      className="z-[1000] absolute w-full top-[0%] -translate-y-full "
    >
      <div className=" z-40 w-full bg-secondary h-[20vh]"></div>
    </motion.div>
  );
};

export default RoundedTop;
