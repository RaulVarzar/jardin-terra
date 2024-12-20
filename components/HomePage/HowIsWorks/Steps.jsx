import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useTransform,
} from "framer-motion";
import { LuPencilRuler } from "react-icons/lu";

const Steps = ({ steps, activeStep, progress }) => {
  return (
    <motion.div className="h-screen flex flex-row  gap-x-4 kg:gap-x-8 2xl:gap-x-12 w-[48vw]  items-center justify-start sticky top-0 ">
      <motion.div className="grid max-w-5xl w-fit place-content-stretch h-full">
        {steps.map((step, i) => {
          const divider = 1 / steps.length;
          const opacity = useTransform(
            progress,
            [
              i * divider - 0.01,
              i * divider + 0.02,
              i * divider + 0.15,
              (i + 1) * divider,
            ],
            [i > 0 ? 0 : 1, 1, 1, i < steps.length - 1 ? 0 : 1]
          );
          const blur = useTransform(
            progress,
            [(i + 1) * divider - 0.05, (i + 1) * divider],
            [0, i < steps.length - 1 ? 5 : 0]
          );
          const y = useTransform(
            progress,
            [i * divider - 0.01, (i + 1) * divider],
            ["0vh", "-3vh"]
          );

          const filter = useMotionTemplate`blur(${blur}px)`;

          return (
            <motion.div
              className={`grid grid-rows-12 gap-4 h-full z-[${i}]`}
              style={{
                gridRow: 1,
                gridColumn: 1,
                opacity,
                filter,
                y,
              }}
            >
              <Title text={step.title} />
              <Description text={step.content} />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        //   variants={ProgressBarVariants}
        //   initial="hidden"
        //   animate={visible ? "visible" : "hidden"}
        className=" h-60 2xl:h-80 justify-center flex flex-col gap-2 sm:gap-1 lg:gap-2 xl:gap-3 2xl:gap-3"
      >
        {steps.map((step, i) => (
          <ProgressBar
            key={i}
            id={i}
            progress={progress}
            numberOfSteps={steps.length}
            activeStep={activeStep}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Steps;

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
          className="text-2xl text-right leading-none md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium tracking-wide uppercase text-base-content"
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
      opacity: 1,
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
        className="text-sm text-right flex sm:text-sm lg:text-base 2xl:text-md 3xl:text-xl  text-balance tracking-wide font-extralight text-base-content opacity-80 w-full"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

const ProgressBar = ({ id, progress, numberOfSteps, activeStep }) => {
  const divider = 1 / numberOfSteps;
  const scaleY = useTransform(
    progress,
    [id * divider, (id + 1) * divider],
    [0, 1]
  );

  return (
    <div
      className={
        "bg-base-300 overflow-hidden w-3 rounded-full relative transition-all duration-500 " +
        (activeStep === id ? " h-28" : " h-3")
      }
    >
      <motion.div
        style={{ scaleY }}
        className="w-full h-full bg-primary-content absolute left-0 top-0 origin-top"
      />
    </div>
  );
};
