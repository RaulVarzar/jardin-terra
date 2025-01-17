import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RiEarthLine } from "react-icons/ri";

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

  // console.log(id, 1 - 0.06 * (numberOfCards - id - 1), numberOfCards - id - 1);
  // console.log(scrollYProgress.current);

  return (
    <motion.div
      // style={{ paddingTop: id * 50 }}
      className="sticky top-[20vh] origin-top xl:top-[30vh] h-fit px-4 sm:px-6 lg:px-10 min-h-[60vh] grid place-content-center "
    >
      <motion.div
        style={{ scale, translateY: id * 30 }}
        className={`flex origin-top relative max-w-screen-2xl flex-col lg:flex-row w-full mx-auto h-full min-h-[60vh] rounded-2xl xl:rounded-3xl shadow-lg  items-center justify-evenly py-6 xl:py-16 px-6 xl:px-6 2xl:px-20 gap-2 md:gap-4 xl:gap-12 3xl:gap-16 translate-y-8 ${color}`}
      >
        <CardImage link={image} />
        <div
          ref={textRef}
          className="flex flex-col w-full max-w-5xl items-start justify-center h-full gap-3 lg:gap-6 2xl:gap-8  text-neutral-content "
        >
          <motion.h3 className=" text-xl font-bold uppercase leading-none tracking-wide sm:text-xl xl:text-5xl 2xl:text-6xl 3xl:text-6xl text-center md:text-start max-w-3xl text-balance">
            {title}
          </motion.h3>
          <motion.p className="text-sm  font-light leading-normal md:tracking-wider lg:text-left text-center text-balance  opacity-65 md:text-lg 2xl:text-lg max-w-4xl">
            {description}
          </motion.p>
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
