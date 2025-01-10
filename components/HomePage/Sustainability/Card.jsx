import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RiEarthLine } from "react-icons/ri";

const Card = ({ item, id }) => {
  const { title, description, image } = item;

  const textRef = useRef(null);
  // const cardRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: cardRef,
  //   offset: ["start 0.2", "end -0.4"],
  // });
  // const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  // const lastY = useTransform(scrollYProgress, [0, 1], ["0vh", "25vh"]);

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
    <motion.div className="sticky top-[20vh] sm:top-[30vh] xl:top-[40vh] px-4 sm:px-6 lg:px-10">
      <motion.div
        className={`flex origin-top max-w-screen-3xl flex-col md:flex-row w-full mx-auto h-fit md:h-[45vh] rounded-2xl xl:rounded-3xl shadow-md min-h-[540px] items-center justify-evenly py-6 xl:py-16 px-6 xl:px-6 2xl:px-20 gap-2 md:gap-4 xl:gap-12 3xl:gap-16 bg-${item.color}`}
      >
        <div
          ref={textRef}
          className="flex flex-col w-full max-w-5xl items-start justify-start h-full gap-3 lg:gap-6 2xl:gap-8  text-neutral-content "
        >
          <motion.h3 className=" text-xl font-bold uppercase leading-none tracking-wide sm:text-xl xl:text-5xl 2xl:text-6xl 3xl:text-6xl text-center md:text-start max-w-3xl text-balance">
            {title}
          </motion.h3>
          <motion.p className="text-sm  font-light leading-normal md:tracking-wider md:text-left text-center text-balance  opacity-65 md:text-lg 2xl:text-lg max-w-4xl">
            {description}
          </motion.p>
        </div>

        <CardImage link={image} />
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
      scale: 1,
      y: 0,
      transition: { duration: 1.2, delay: 0, ease: [0.45, 0, 0.15, 1] },
    },
    hidden: {
      filter: "blur(12px)",
      scale: 1.05,
      y: 15,
      transition: { duration: 1.4, delay: 0, ease: [0.45, 0, 0.15, 1] },
    },
  };

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { amount: 0.8 });

  return (
    <div
      ref={imageRef}
      className="aspect-5/4 2xl:aspect-video  w-full h-full max-w-xl rounded-2xl overflow-hidden"
    >
      <motion.img
        variants={variants}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        src={`images/sustenabilitate/${link}`}
        className="object-cover  h-full "
      />
    </div>
  );
};
