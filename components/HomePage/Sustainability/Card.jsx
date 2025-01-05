import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RiEarthLine } from "react-icons/ri";

const Card = ({ item, id }) => {
  const textRef = useRef(null);

  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.2", "end -0.4"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const lastY = useTransform(scrollYProgress, [0, 1], ["0vh", "25vh"]);

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
    <motion.div
      ref={cardRef}
      style={id < 2 ? { y } : { y: lastY }}
      className={`relative w-full flex  justify-center items-center`}
    >
      <motion.div
        className={`flex origin-top flex-row w-full h-[45vh] min-h-[540px] items-center justify-evenly py-12 xl:py-16 px-4 xl:px-6 2xl:px-20 gap-2 md:gap-4 xl:gap-12 3xl:gap-16 bg-${item.color}`}
      >
        <div
          ref={textRef}
          className="flex flex-col w-full max-w-5xl items-start justify-start h-full gap-3 lg:gap-6 2xl:gap-8 text-start text-neutral-content "
        >
          <motion.h3 className=" text-xl font-bold leading-none tracking-wide sm:text-xl xl:text-5xl 2xl:text-6xl 3xl:text-6xl  max-w-2xl text-balance">
            {item.title}
          </motion.h3>
          <motion.p className="text-base  font-light leading-normal md:tracking-wider opacity-65 md:text-lg 2xl:text-lg max-w-4xl">
            {item.description}
          </motion.p>
        </div>

        <div className="aspect-5/4 2xl:aspect-video  w-full h-full max-w-xl rounded-lg overflow-hidden">
          <motion.img
            src={`images/sustenabilitate/${item.image}`}
            className="object-cover  h-full "
          />
        </div>

        {/* <span className="text-8xl">
          <RiEarthLine />
        </span> */}
      </motion.div>
    </motion.div>
  );
};

export default Card;
