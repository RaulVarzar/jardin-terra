import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Steps = ({ steps }) => {
  return (
    <motion.div className="flex flex-col max-w-5xl grow  gap-8 px-3 md:px-10 2xl:px-12  items-start">
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

const Step = ({ step, id }) => {
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
  const ref = useRef(null);
  const visible = useInView(ref, { margin: "1000% 0% -14% 0%" });
  const elementRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.92]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [4, 0, 0, 7]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      ref={elementRef}
      className="flex flex-col  will-change-transform origin-top sm:origin-top-left items-start min-h-[50vh] sm:min-h-[60vh] justify-start place-self-start  h-fit pt-24"
      style={{
        opacity,
        filter,
        scale,
      }}
    >
      <div
        ref={ref}
        className="flex flex-col sm:flex-row gap-x-4 text-center sm:text-left "
      >
        <Index id={id} visible={visible} />
        <div className="flex-col flex gap-2 md:gap-3 xl:gap-4">
          <Title text={title} visible={visible} />
          <Description text={content} visible={visible} />
        </div>
      </div>
    </motion.div>
  );
};

export const Index = ({ id, visible }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={visible && { opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.7, 0, 0.3, 1],
      }}
      className=" text-7xl font-light leading-none mt-1 opacity-60"
    >
      0{id + 1}
    </motion.span>
  );
};

export const Title = ({ text, visible }) => {
  const titleVariants = {
    visible: (custom) => ({
      y: 0,
      transition: {
        duration: 1.2,
        delay: custom * 0.08,
        ease: [0.7, 0, 0.3, 1],
      },
    }),
    hidden: {
      y: "110%",
    },
  };

  return (
    <motion.div className="text-4xl flex flex-col gap-x-2 leading-none  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-wide uppercase text-neutral-content">
      {text.split("\n").map((line, index) => (
        <div key={index} className="overflow-hidden ">
          <motion.p
            variants={titleVariants}
            initial="hidden"
            animate={visible && "visible"}
            custom={index}
            key={index}
          >
            {line.split("").map((char, i) => (
              <motion.span key={i}>{char}</motion.span>
            ))}
          </motion.p>
        </div>
      ))}
    </motion.div>
  );
};

export const Description = ({ text, visible }) => {
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: "5%",
      filter: "blur(5px)",
      transition: {
        duration: 0.4,
        ease: [0.7, 0, 0.3, 1],
      },
    },
    visible: {
      opacity: 0.7,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  return (
    <motion.div className="">
      <motion.p
        variants={contentVariants}
        initial="hidden"
        animate={visible && "visible"}
        className="text-sm px-4 sm:px-0 flex sm:text-sm lg:text-base 2xl:text-md 3xl:text-xl max-md:leading-tight max-w-4xl  text-balance tracking-wide font-extralight text-neutral-content w-full"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
