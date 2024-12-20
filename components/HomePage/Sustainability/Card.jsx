import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RiEarthLine } from "react-icons/ri";

const Card = ({ item }) => {
  const textRef = useRef(null);

  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", " end 0.9"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  // const textY = useTransform(textScrollProgress, [0.3, 1], ["30px", "0px"]);
  // const textOpacity = useTransform(textScrollProgress, [0, 1], [0.6, 1]);

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

  return (
    <div className="sticky top-[25vh] w-full flex h-[75vh] justify-center items-center">
      <motion.div
        style={{ scale }}
        ref={cardRef}
        className="flex origin-top flex-col items-center bg-secondary rounded-2xl min-h-[50vh] max-w-screen-2xl justify-center py-12 shadow-md  px-4 xl:px-6 2xl:px-20 gap-2 mx-auto md:gap-4 xl:gap-12 3xl:gap-16"
      >
        {/* <motion.img
          ref={ref}
          src={`images/sustenabilitate/${item.image}`}
          className="w-full max-w-lg rounded-2xl"
        /> */}
        <span className="text-8xl">
          <RiEarthLine />
        </span>
        <div
          ref={textRef}
          className="flex flex-col items- justify-center gap-3 lg:gap-6 2xl:gap-8 text-center text-neutral-content"
        >
          <motion.h3 className=" text-xl font-semibold leading-tight tracking-wider uppercase sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            {item.title}
          </motion.h3>
          <motion.p className="text-base w-10/12 font-light mx-auto leading-normal md:tracking-wider opacity-65 md:text-lg 2xl:text-lg max-w-5xl">
            {item.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
