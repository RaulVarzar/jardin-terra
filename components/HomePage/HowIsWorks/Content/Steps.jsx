import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useTransform,
} from "framer-motion";

const Steps = ({ steps, showSteps, progress }) => {
  return (
    <motion.div className="h-fit md:h-screen flex flex-row gap-x-4 pt-[20vh] xl:pt-[25vh] 3xl:pt-[30vh] lg:gap-x-8 2xl:gap-x-12 md:w-1/2 px-3 md:px-10 2xl:px-16 items-start md:items-start">
      <AnimatePresence>
        {showSteps && (
          <motion.div className="flex flex-col gap-0 justify-center h-fit  max-w-5xl px-2 w-fit ">
            {steps.map((step, i) => (
              <Step
                progress={progress}
                step={step}
                steps={steps}
                key={i}
                id={i}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Steps;

const Step = ({ step, steps, progress, id }) => {
  const { title, content } = step;
  const divider = 1 / steps.length;
  const scaleY = useTransform(
    progress,
    [id * divider, (id + 1) * divider],
    [0, 1]
  );

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

  const filter = useMotionTemplate`blur(${blur}px)`;

  const isActive =
    progress.current > id * divider && progress.current < (id + 1) * divider;

  return (
    <div className="flex flex-row gap-4 lg:gap-5 2xl:gap-6">
      <div className="flex flex-col items-center ">
        <div className="rounded-full border-base-content border-opacity-50 relative overflow-clip border-2 size-16 aspect-square grid place-content-center text-xl transition-colors duration-500 delay-300 ">
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 left-0 w-full h-full bg-base-content opacity-50 origin-top "
          />
          <span className="tabular-nums  text-neutral-content opacity-60">
            {id + 1}
          </span>
        </div>
        {id < steps.length - 1 && (
          <div className="w-0.5 h-full grow bg-base-content" />
        )}
      </div>
      <motion.div
        className={`flex flex-col items-start  justify-start place-self-start gap-2 h-fit pb-8 pt-4 z-[${id}] `}
      >
        <Title text={title} isActive={isActive} />
        <AnimatePresence mode="popLayout">
          {isActive && <Description text={content} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export const Title = ({ text, isActive }) => {
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
    <motion.div
      className={
        "overflow-hidden w-full transition-all duration-500 " +
        (!isActive && " opacity-75 brightness-50")
      }
    >
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="text-lg text-left leading-none md:text-xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-medium tracking-wide uppercase text-neutral-content"
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
  );
};

export const Description = ({ text }) => {
  const containerVariants = {
    visible: {
      height: "auto",
      transition: {
        duration: 0.8,
        delay: 0,
        ease: [0.7, 0, 0.3, 1],
      },
    },
    hidden: {
      height: 0,
      transition: {
        duration: 0.6,
        delay: 0,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  const textVariants = {
    visible: {
      opacity: 0.65,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0,
        ease: [0.7, 0, 0.3, 1],
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(5px)",
      transition: {
        duration: 0.7,
        delay: 0,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="overflow-clip p-0"
    >
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="text-sm text-left flex sm:text-sm lg:text-base 2xl:text-md 3xl:text-lg leading-tight text-balance  tracking-wide font-extralight text-neutral-content opacity-65 w-full"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
