import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Steps = ({ steps, activeStep, progress }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["25vh", "0vh"]);

  return (
    <motion.div
      ref={ref}
      className="h-screen flex flex-row  gap-x-4 kg:gap-x-8 2xl:gap-x-12 w-1/2 items-center justify-start sticky top-0 "
    >
      <motion.div
        style={{ y }}
        className="grid will-change-transform max-w-5xl w-fit place-content-center h-screen"
      >
        {steps.map((step, i) => (
          <Step progress={progress} step={step} steps={steps} key={i} id={i} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Steps;

const Step = ({ step, steps, progress, id }) => {
  const { title, content } = step;
  const divider = 1 / steps.length;
  const opacity = useTransform(
    progress,
    [
      id * divider - 0.01,
      id * divider + 0.1,
      id * divider + 0.2,
      (id + 1) * divider,
    ],
    [id > 0 ? 0 : 1, 1, 1, id < steps.length - 1 ? 0 : 1]
  );
  const blur = useTransform(
    progress,
    [(id + 1) * divider - 0.05, (id + 1) * divider],
    [0, id < steps.length - 1 ? 5 : 0]
  );
  const y = useTransform(
    progress,
    [id * divider - 0.01, (id + 1) * divider],
    ["0vh", "-3vh"]
  );

  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      className={`flex flex-col place-self-center gap-4 h-fit z-[${id}] `}
      style={{
        gridRow: 1,
        gridColumn: 1,
        opacity,
        filter,
      }}
    >
      <Title text={title} />
      <Description text={content} />
    </motion.div>
  );
};

export const Title = ({ text }) => {
  const titleVariants = {
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.7, 0, 0.3, 1],
      },
    },
    hidden: {
      y: "100%",
      transition: {
        duration: 0.5,
        delay: 0,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };
  return (
    <motion.div className="flex items-end row-span-6 w-full">
      <motion.div className="overflow-hidden w-full">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl text-left leading-none md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-wide uppercase text-base-content"
        >
          <AnimatePresence mode="wait">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, filter: "blur(3px)" }}
              transition={{
                duration: 0.4,
                ease: [0.7, 0, 0.3, 1],
              }}
              key={"activeStep"}
            >
              {text}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export const Description = ({ text }) => {
  const contentVariants = {
    visible: {
      opacity: 0.8,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 1.4,
        ease: [0.7, 0, 0.3, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: "5%",
      filter: "blur(5px)",
      transition: {
        duration: 0.4,
        delay: 0,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  return (
    <motion.div className="row-span-6">
      <motion.p
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        // style={{ y }}
        className="text-sm pl-2 text-left flex sm:text-sm lg:text-base 2xl:text-md 3xl:text-xl  text-balance tracking-wide font-extralight text-base-content opacity-80 w-full"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
