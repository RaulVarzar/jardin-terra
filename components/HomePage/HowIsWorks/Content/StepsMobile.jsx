import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import SplitLinesAnimation from "../../../utils/SplitLinesAnimation";

const Steps = ({ steps, activeStep }) => {
  return (
    <div className="h-full relative lg:w-7/12 grid items-center max-lg:px-4 lg:pr-8  gap-4 my-auto max-h-[960px]">
      {steps.map((step, i) => (
        <Step
          activeStep={activeStep}
          step={step}
          steps={steps}
          key={i}
          id={i}
        />
      ))}
    </div>
  );
};

export default Steps;

const Step = ({ step, id, activeStep }) => {
  const { title, content } = step;
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
      className={`flex flex-col  col-start-1 row-start-1 z-0 w-full  ${
        activeStep >= id + 1 ? "" : ""
      }  `}
    >
      <AnimatePresence>
        {activeStep === id + 1 && (
          <motion.div className="flex-col flex gap-2  w-full z-0 md:gap-3 lg:gap-4 xl:gap-6">
            <div className="flex flex-row">
              {/* <Index id={id} /> */}
              <Title text={title} />
            </div>
            <Description text={content} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Index = ({ id }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.7, 0, 0.3, 1],
      }}
      className=" text-7xl font-normal leading-none mt-1 opacity-60"
    >
      0{id + 1}
    </motion.span>
  );
};

export const Title = ({ text }) => {
  return (
    <SplitLinesAnimation
      text={text}
      duration={1.2}
      stagger={0.1}
      initialDelay={0.15}
      exitDuration={0.4}
      exitDelay={0.1}
      exitToTop
      className={
        "text-2xl min-w-full leading-none w-full md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl uppercase font-black text-neutral-content"
      }
    />
  );
};

export const Description = ({ text }) => {
  return (
    <SplitLinesAnimation
      text={text}
      duration={1}
      stagger={0.12}
      initialDelay={0.3}
      exitDuration={0.4}
      exitToTop
      className={
        "max-w-3xl xl:max-w-4xl relative w-full brightness-75 text-base md:text-md xl:text-lg 3xl:text-xl tracking-wide leading-snug text-neutral-content font-light"
      }
    />
  );
};
