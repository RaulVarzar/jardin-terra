import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { TextFadeIn, TextReveal } from "../../../utils/animations";
import { isMobile } from "react-device-detect";

const Card = ({ item, id, numberOfCards, scrollYProgress }) => {
  const { title, description, image, color } = item;

  const textRef = useRef(null);
  const ref = useRef(null);

  const { scrollYProgress: cardProgress } = useScroll({
    target: ref,
    offset: ["start end", "start"],
  });

  const { scrollYProgress: cardExitProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });

  const start = id / numberOfCards;
  const end = (id + 1) / numberOfCards;

  const moveUp = useTransform(scrollYProgress, [start, end], ["0vh", "-12vh"]);
  const scaleOut = useTransform(scrollYProgress, [start, end], [1, 0.9]);
  const opacityOut = useTransform(scrollYProgress, [start + 0.28, end], [1, 0]);

  const clipPathLeftRight = useTransform(
    cardProgress,
    [0, 0.55],
    isMobile ? [15, 0] : [5, 0]
  );
  const borderRadius = useTransform(cardProgress, [0, 0.3], ["2vw", "2vw"]);
  const clipPath = useMotionTemplate`inset(0% ${clipPathLeftRight}% 0% ${clipPathLeftRight}% round ${borderRadius})`;

  return (
    <motion.div
      ref={ref}
      className={`sticky w-full  origin-top top-[15vh] pt-24 px-2 sm:px-6 lg:px-10 2xl:px-16 flex justify-center items-center  mx-auto  `}
    >
      <motion.div
        // style={{ clipPath }}
        style={{ y: moveUp, scale: scaleOut, opacity: opacityOut }}
        className={`${color} flex-col flex shadow-md origin-top relative gap-y-6 lg:flex-row max-w-screen-3xl w-full items-center
           mx-auto min-h-[60vh] 2xl:min-h-[50vh] rounded-2xl  py-6 xl:py-16 px-5 md:px-8 lg:px-12 xl:px-20 2xl:px-32 gap-2 md:gap-4 xl:gap-12 3xl:gap-16  `}
      >
        <CardImage link={image} progress={cardProgress} />
        <div
          ref={textRef}
          className="flex flex-col w-full max-w-5xl items-start justify-center gap-3 lg:gap-4 2xl:gap-5 text-neutral-content "
        >
          <TextReveal duration={1.5} threshold={12}>
            <motion.h3 className=" text-xl  font-semibold uppercase leading-none tracking-normal sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-7xl text-center  lg:text-start  w-full ">
              {title}
            </motion.h3>
          </TextReveal>
          <TextFadeIn duration={1.3} threshold={12}>
            <motion.p className="text-sm max-sm:px-3 w-11/12 font-light leading-tight md:tracking-wide lg:text-left text-center text-balance  opacity-65 md:text-xl 2xl:text-2xl max-w-4xl">
              {description}
            </motion.p>
          </TextFadeIn>
        </div>

        {/* <span className="text-8xl">
          <RiEarthLine />
        </span> */}
      </motion.div>
    </motion.div>
  );
};

export default Card;

export const CardImage = ({ link, progress }) => {
  const variants = {
    visible: {
      filter: "blur(0px)",
      transition: { duration: 1.2, delay: 0, ease: [0.65, 0, 0.25, 1] },
    },
    hidden: {
      filter: "blur(8px)",
      transition: { duration: 1.4, delay: 0, ease: [0.65, 0, 0.25, 1] },
    },
  };

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { amount: 0.55 });

  const clipPathLeftRight = useTransform(
    progress,
    [0, 0.55],
    isMobile ? [15, 0] : [10, 0]
  );
  const clipPathTopBottom = useTransform(progress, [0, 1], [5, 0]);

  const borderRadius = isMobile ? 16 : 32;

  const clipPath = useMotionTemplate`inset(${clipPathTopBottom}% ${clipPathLeftRight}% ${clipPathTopBottom}% ${clipPathLeftRight}% round ${borderRadius}px)`;

  return (
    <motion.div
      ref={imageRef}
      className="w-full aspect-square xl:aspect-5/4  h-fit max-w-xl mx-auto rounded-2xl overflow-hidden"
    >
      <motion.img
        variants={variants}
        initial="hidden"
        // style={{ clipPath }}
        animate={imageInView ? "visible" : "hidden"}
        src={`images/sustenabilitate/${link}`}
        className="object-cover  h-full w-full"
      />
    </motion.div>
  );
};
