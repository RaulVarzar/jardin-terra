import { Blur, FromLeft, Reveal } from "../../utils/animations";
import { motion } from "framer-motion";
import { MdOpenInFull } from "react-icons/md";

const Card = ({ item, setSelectedId }) => {
  const { title, photo, descriptions } = item;

  return (
    <motion.div
      layoutId={item}
      onClick={() => setSelectedId(item)}
      layout="position"
      className="grid  backdrop-brightness-125 hover:backdrop-brightness-150 transition duration-300 group max-lg:grid-rows-7 lg:grid-cols-7 w-[95vw]  max-h-[960px] place-self-center h-full xl:w-[85vw] 3xl:w-[80vw] max-w-screen-2xl p-2 md:p-4 xl:p-6 negative-shado cursor-pointer rounded-2xl  "
    >
      <div className="z-10 h-full overflow-hidden max-sm:row-span-2 sm:max-lg:row-span-3 lg:col-span-3 rounded-xl ">
        <Blur delay={0.5} duration={0.5} className="w-full h-full">
          <img
            src={`/images/${photo}.jpg`}
            className="object-cover object-center w-full h-full"
            alt="project-img"
          />
        </Blur>
      </div>

      <div className="z-20 flex flex-col justify-center gap-6 px-3 py-8 mx-auto overflow-auto lg:gap-8 md:px-5 xl:px-12 max-sm:row-span-5 sm:max-lg:row-span-4 lg:col-span-4 ">
        <div className="flex flex-col gap-1 xl:gap-2">
          <Reveal delay={0.3} duration={1.2}>
            <h1 className="p-0 pb-4 text-pretty uppercase my-0 text-2xl font-black leading-none  h-fit md:text-3xl xl:text-4xl 2xl:text-5xl text-neutral-content">
              {title}
            </h1>
          </Reveal>
          <FromLeft delay={0.9} duration={1}>
            <h3 className="text-sm max-sm:line-clamp-6 font-light leading-tight tracking-wide md:tracking-wider sm:text-base text-balance md:text-md xl:text-lg opacity-70 text-neutral-content">
              {descriptions[0].content}
            </h3>
          </FromLeft>
        </div>

        <button className="z-50 absolute top-4 flex flex-row right-4 p-3 gap-3 items-center text-base font-light tracking-wider transition duration-300 rounded-md  md:p-4   text-base-content brightness-65 group-hover:brightness-150 ">
          {/* Citește mai mult */}
          <span className="text-2xl md:text-3xl">
            <MdOpenInFull />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
