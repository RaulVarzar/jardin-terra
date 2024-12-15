import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ step, i }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.4 "],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["20vh", "0vh"]);
  //   const blur = useTransform(scrollYProgress, [0.95, 1], ['0px', '5px']);
  const filter = useTransform(
    scrollYProgress,
    [0.99, 1],
    ["blur(0px)", `blur(0px)`]
  );

  const textY = useTransform(scrollYProgress, [0.4, 1], ["10vh", "0vh"]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 1], ["20%", "100%"]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.9],
    ["0%", "100%"]
  );
  const titleY = useTransform(scrollYProgress, [0.2, 0.9], ["8vh", "0vh"]);
  const titleScale = useTransform(scrollYProgress, [0.2, 0.5], ["20%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0.6, 1], ["4px", "30px"]);

  const imgScale = useTransform(scrollYProgress, [0.5, 1], ["90%", "100%"]);
  const imgOpacity = useTransform(scrollYProgress, [0.3, 0.8], ["20%", "100%"]);

  return (
    <motion.div
      style={{ scale, filter, y, borderRadius }}
      ref={sectionRef}
      className="flex flex-col md:flex-row min-h-[70vh] items-center md:min-h-[60vh] bg-base-300 shadow-2xl gap-4 border-1 border-opacity-10 border-neutral-content  w-full md:gap-6 px-3 py-4 md:py-16 overflow-hidden max-w-8xl xl:py-12  xl:px-12"
    >
      <motion.img
        style={{ scale: imgScale, opacity: imgOpacity }}
        src={`/images/how-it-works/${step.image}`}
        className="object-cover rounded-xl max-w-72 mx-auto md:max-w-80 max-h-96 2xl:max-w-[400px] aspect-video md:aspect-square z-50"
        alt={step.image}
      />

      <div className="flex flex-col h-full min-h-full gap-2 self-stetch md:gap-6 grow">
        <motion.div
          style={{
            opacity: titleOpacity,
            y: titleY,
            scale: titleScale,
            originX: "400px",
          }}
          className="flex flex-col h-full gap-0 grow"
        >
          <motion.span
            className={
              "font-semibold text-sm sm:text-base md:text-md leading-none text-neutral-content opacity-70"
            }
          >
            Pasul {i + 1}
          </motion.span>
          <motion.h3
            className={
              "text-lg leading-none font-bold  lg:text-2xl  w-fit sm:text-lg md:text-xl  2xl:text-6xl text-neutral-content "
            }
          >
            {step.title}
          </motion.h3>
        </motion.div>
        <div className="flex flex-col h-full gap-2 px-2 max-md:row-span-5">
          <motion.p
            style={{ y: textY, opacity: textOpacity }}
            className="h-full py-2 overflow-y-auto text-sm leading-none sm:text-md xl:text-lg text-neutral-content"
          >
            {step.content}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
