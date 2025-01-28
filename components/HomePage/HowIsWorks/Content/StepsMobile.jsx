import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Steps = ({ steps }) => {
  return (
    <motion.div className="flex flex-col max-w-5xl grow  gap-8 px-3 md:px-18 2xl:px-12 items-start">
      {steps.map((step, i) => (
        <Step
          // progress={progress}
          step={step}
          steps={steps}
          key={i}
          id={i}
        />
      ))}
    </motion.div>
  );
};

export default Steps;

const Step = ({ step, steps, id, activeStep }) => {
  const { title, content } = step;
  // const divider = 1 / steps.length;
  // const opacity = useTransform(
  //   progress,
  //   [
  //     id * divider - 0.01,
  //     id * divider + 0.1,
  //     id * divider + 0.2,
  //     (id + 1) * divider,
  //   ],
  //   [id > 0 ? 0 : 1, 1, 1, id < steps.length - 1 ? 0 : 1]
  // );
  // const blur = useTransform(
  //   progress,
  //   [(id + 1) * divider - 0.05, (id + 1) * divider],
  //   [0, id < steps.length - 1 ? 5 : 0]
  // );
  // const y = useTransform(
  //   progress,
  //   [id * divider - 0.01, (id + 1) * divider],
  //   ["0vh", "-3vh"]
  // );

  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [4, 0, 0, 7]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      ref={elementRef}
      className="flex flex-col will-change-transform origin-top-left items-start min-h-[60vh] justify-start place-self-start  h-fit pt-24"
      style={{
        // gridRow: 1,
        // gridColumn: 1,
        opacity,
        filter,
      }}
      // animate={
      //   Math.floor(activeStep) === id
      //     ? { y: "0%", opacity: 1, scale: 1 }
      //     : {
      //         y: `${(id - Math.floor(activeStep)) * 100}%`,
      //         opacity: 0.5,
      //         scale: 0.96,
      //       }
      // }
      // transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
    >
      <div className="flex flex-row gap-x-4">
        <span className=" text-7xl font-light leading-none mt-1 opacity-60">
          0{id + 1}
        </span>
        <div className="flex-col flex gap-2 md:gap-3 xl:gap-4">
          <Title text={title} />
          <Description text={content} />
        </div>
      </div>
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
      y: "120%",
      transition: {
        duration: 0.5,
        delay: 0,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };
  return (
    <motion.div className="flex items-end w-full">
      <motion.div className="overflow-hidden w-full">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="text-2xl text-left leading-none md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-wide uppercase text-neutral-content"
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
      opacity: 0.7,
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
    <motion.div className="">
      <motion.p
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="text-sm text-left flex sm:text-sm lg:text-base 2xl:text-md 3xl:text-xl max-md:leading-tight max-w-4xl  text-balance tracking-wide font-extralight text-neutral-content w-full"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
