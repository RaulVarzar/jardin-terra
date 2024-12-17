import { Blur, Reveal } from "../../utils/animations";
import { motion } from "framer-motion";
import { BiExpandAlt } from "react-icons/bi";

const Card = ({ item, setSelectedId, layoutId }) => {
  const { title, photo, descriptions } = item;

  return (
    <motion.div
      layoutId={layoutId}
      onClick={() => setSelectedId(item.id)}
      className="grid relative bg-secondary transition-colors duration-300 hover:bg-secondary-content group  group max-lg:grid-rows-7 lg:grid-cols-7 z-50  max-h-[960px]  h-full w-[96vw] xl:w-[80vw] 3xl:w-[75vw] max-w-screen-2xl p-2 md:p-4 xl:p-6  cursor-pointer rounded-2xl  "
    >
      <motion.span
        // layoutId={layoutId + "button"}
        className="text-2xl md:text-3xl z-50 absolute max-lg:bottom-4 lg:top-4  right-4 p-3 transition duration-300 md:p-4   text-base-content brightness-85 group-hover:brightness-125 group-hover:scale-110"
      >
        <BiExpandAlt />
      </motion.span>

      <div className="z-10 h-full overflow-hidden max-sm:row-span-3 sm:max-lg:row-span-4 lg:col-span-3 rounded-xl ">
        <Blur delay={0.7} duration={1.5} className="w-full h-full">
          <motion.img
            layoutId={photo}
            src={`/images/${photo}.jpg`}
            className="object-cover object-center w-full h-full"
            alt="project-img"
          />
        </Blur>
      </div>

      <div className="z-20 flex flex-col justify-start lg:justify-center gap-6 px-3 py-8 mx-auto overflow-auto lg:gap-8 md:px-5 xl:px-12 max-sm:row-span-4 sm:max-lg:row-span-3 lg:col-span-4 ">
        <div className="flex flex-col gap-1 xl:gap-2">
          <Reveal delay={0.3} duration={1.2}>
            <motion.h1
              layoutId={title}
              className="p-0 pb-4 max-md:text-pretty md:text-balance uppercase my-0 text-2xl font-black leading-none md:text-3xl h-fit lg:text-4xl  2xl:text-5xl text-neutral-content"
            >
              {title}
            </motion.h1>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            viewport={{ once: true }}
          >
            <motion.h3
              layoutId={descriptions[0].content}
              className="text-sm max-sm:line-clamp-6 font-light  leading-tight tracking-wide md:tracking-wider sm:text-base text-balance md:text-md xl:text-lg opacity-70 text-neutral-content"
            >
              {descriptions[0].content}
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
