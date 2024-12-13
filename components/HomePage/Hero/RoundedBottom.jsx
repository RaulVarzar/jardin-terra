import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const RoundedBottom = ({ scrollProgress }) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 300,
    mass: 0.1,
  });

  //   const amount = useTransform(smoothVelocity, [-700, 0, 700], [25, 0, 35], {
  //     clamp: true,
  //   });

  const clipPathRoundness = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [100, 65, 0]
  );
  const clipPathOffset = useTransform(scrollProgress, [0, 1], [20, 0]);
  const clipPath = useMotionTemplate`ellipse(65% ${clipPathRoundness}% at 50% ${clipPathOffset}%)`;

  return (
    <motion.div style={{ clipPath }} className="z-40 sticky -bottom-[100%] ">
      <div className=" z-50 w-full h-32 bg-accent sm:h-72"></div>
    </motion.div>
  );
};

export default RoundedBottom;
