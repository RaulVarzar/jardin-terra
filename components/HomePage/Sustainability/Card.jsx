import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { RiEarthLine } from "react-icons/ri";
import { TextFadeIn, TextReveal } from "../../utils/animations";
import { isMobile } from "react-device-detect";

const Card = ({ item, id, numberOfCards, scrollYProgress }) => {
  const { title, description, image, color } = item;

  const textRef = useRef(null);
  // const cardRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: cardRef,
  //   offset: ["start 0.2", "end -0.4"],
  // });
  // const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  // const lastY = useTransform(scrollYProgress, [0, 1], ["0vh", "25vh"]);

  // const descriptionScale = useTransform(textScrollProgress, [0.3, 1], [0.8, 1]);
  // const descriptionOpacity = useTransform(
  //   textScrollProgress,
  //   [0.7, 1],
  //   [0.5, 1]
  // );
  // const descriptionY = useTransform(
  //   textScrollProgress,
  //   [0.5, 1],
  //   ["70px", "0px"]
  // );
  // id = 0  0   0.33
  // id = 2  0.33 0.66
  // id = 2 0.66 1.00

  const start = id / numberOfCards;
  const end = (id + 1) / numberOfCards;

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, 1 - 0.05 * (numberOfCards - id - 1)]
  );

  const moveUp = useTransform(
    scrollYProgress,
    [start, end + 0.1],
    ["0vh", "-25vh"]
  );

  // console.log(id, 1 - 0.06 * (numberOfCards - id - 1), numberOfCards - id - 1);
  // console.log(scrollYProgress.current);

  return (
    <motion.div
      className={`sticky h-screen origin-top top-0 px-2 sm:px-6  lg:px-10 grid place-content-center w-full mx-auto  ${color}`}
    >
      <motion.div
        style={{ y: moveUp }}
        className={`flex origin-top relative flex-col gap-y-6 lg:flex-row w-full items-center
           mx-auto h-full rounded-2xl xl:rounded-3xl   py-6 xl:py-16 px-2 md:px-4 xl:px-6 2xl:px-20 gap-2 md:gap-4 xl:gap-12 3xl:gap-16  `}
      >
        <CardImage link={image} />
        <div
          ref={textRef}
          className="flex flex-col w-full max-w-5xl items-start justify-center gap-3 lg:gap-4 2xl:gap-5  text-neutral-content "
        >
          <TextReveal duration={1.5} threshold={12}>
            <motion.h3 className=" text-xl  font-bold uppercase leading-none tracking-wide sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-center  lg:text-start  w-full text-balance">
              {title}
            </motion.h3>
          </TextReveal>
          <TextFadeIn duration={1.3} threshold={12}>
            <motion.p className="text-sm  font-light leading-normal md:tracking-wider lg:text-left text-center text-balance  opacity-65 md:text-xl 2xl:text-2xl max-w-4xl">
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

export const CardImage = ({ link }) => {
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

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "0.8 end"],
  });

  const clipPathLeftRight = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [15, 0] : [10, 0]
  );
  const clipPathTopBottom = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const borderRadius = isMobile ? 20 : 32;

  const clipPath = useMotionTemplate`inset(${clipPathTopBottom}% ${clipPathLeftRight}% ${clipPathTopBottom}% ${clipPathLeftRight}% round ${borderRadius}px)`;

  return (
    <motion.div
      ref={imageRef}
      className="aspect-square md:aspect-5/4  w-full h-fit max-w-5xl mx-auto  overflow-hidden"
    >
      <motion.img
        variants={variants}
        initial="hidden"
        style={{ clipPath }}
        animate={imageInView ? "visible" : "hidden"}
        src={`images/sustenabilitate/${link}`}
        className="object-cover  h-full w-full"
      />
    </motion.div>
  );
};
