import { Blur } from "../../utils/animations";
import { motion } from "framer-motion";
import { BiExpandAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import AnimatedRows from "../../utils/AnimatedRows";
import MagneticButton from "../../MagneticButton";
import Image from "next/image";

const Card = ({ item, setSelectedId, layoutId }) => {
  const { id, title, photo, descriptions } = item;

  return (
    <motion.div
      layoutId={layoutId}
      layout="size"
      className="grid relative bg-accent-content h-auto shadow-lg group max-lg:grid-rows-7 lg:grid-cols-7 z-50  w-[90vw] xl:w-[85vw] 3xl:w-[80vw]  max-w-screen-xl pb-8 p-3 md:p-4 lg:p-4  rounded-2xl lg:rounded-3xl "
    >
      <ExpandButton setSelectedId={() => setSelectedId(item.id)} />

      <div className="-z-[10] touch-none h-full w-full overflow-hidden max-sm:row-span-3 sm:max-lg:row-span-4 lg:row-span-1 lg:col-span-3 2xl:col-span-4 rounded-[12px]  md:rounded-[20px] lg:rounded-[16px] ">
        <Blur delay={0.7} duration={1.5} className="w-full h-full">
          <motion.div layoutId={photo} className="w-full h-full relative">
            <Image
              src={`/images/${photo}.webp`}
              alt="project-img"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 80vw, 100vw"
              className="undraggable"
              loading="lazy"
            />
          </motion.div>
        </Blur>
      </div>

      <div className="z-0 touch-pan-y flex flex-col justify-start lg:justify-center gap-6 px-1 py-6 mx-auto overflow-auto lg:gap-8 sm:py-8 md:px-5 xl:px-12 max-sm:row-span-4 sm:max-lg:row-span-3 lg:col-span-4 xl:col-span-3">
        <div className="flex flex-col md:gap-1 xl:gap-2">
          <motion.h1
            // initial={{ opacity: 0, filter: "blur(5px)" }}
            // whileInView={{ opacity: 0.8, filter: "blur(0px)" }}
            // transition={{
            //   duration: 1,
            //   delay: 0.1,
            //   ease: [0.76, 0, 0.24, 1],
            // }}
            // viewport={{ once: true }}
            layoutId={title}
            layout="size"
            className="p-0 pb-2 sm:pb-4 max-md:text-pretty md:text-balance uppercase my-0 text-2xl font-bold leading-none md:text-3xl h-fit lg:text-4xl  2xl:text-5xl text-neutral-content"
          >
            <AnimatedRows duration={1.5} stagger={0.1}>
              {title}
            </AnimatedRows>
          </motion.h1>

          <motion.div className="opacity-80">
            <AnimatedRows
              // layoutId={descriptions[0].content}
              // layout="size"
              duration={1.5}
              stagger={0.1}
              className="text-sm max-sm:line-clamp-6 font-light leading-tight md:leading-snug md:tracking-wider sm:text-base text-balance md:text-md xl:text-lg text-neutral-content"
            >
              {descriptions[0].content}
            </AnimatedRows>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

export const ExpandButton = ({ setSelectedId }) => {
  return (
    <motion.span
      onClick={setSelectedId}
      className="text-2xl md:text-3xl z-50  absolute max-lg:bottom-2  rounded-full right-6 lg:top-4 xl:top-4 xl:right-5  transition duration-300   text-base-content hover:brightness-150 2xl:scale-110"
    >
      <MagneticButton magnify={1.05} amount={[6, 6]}>
        <span className="w-full h-full hover:bg-secondary z-50 flex items-center justify-center p-4 md:p-4  rounded-full">
          <AiOutlinePlus />
        </span>
      </MagneticButton>
    </motion.span>
  );
};
