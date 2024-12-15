import { Blur, FromLeft, Reveal } from "../../utils/animations";
import { motion } from "framer-motion";
import { BiExpandAlt } from "react-icons/bi";

const Card = ({ item, setSelectedId }) => {
  const { title, photo, descriptions } = item;

  return (
    <motion.div
      layoutId={item}
      onClick={() => setSelectedId(item)}
      layout="position"
      className="grid relative hover:scale-[1.01] bg-secondary hover:bg-secondary-content group transition duration-300 group max-lg:grid-rows-7 lg:grid-cols-7 w-[95vw]  max-h-[960px] place-self-center h-full xl:w-[85vw] 3xl:w-[80vw] max-w-screen-2xl p-2 md:p-4 xl:p-6  cursor-pointer rounded-2xl  "
    >
      <div className="z-10 h-full overflow-hidden max-sm:row-span-3 sm:max-lg:row-span-4 lg:col-span-3 rounded-xl ">
        <Blur delay={0.7} duration={0.8} className="w-full h-full">
          <img
            src={`/images/${photo}.jpg`}
            className="object-cover object-center w-full h-full"
            alt="project-img"
          />
        </Blur>
      </div>

      <div className="z-20 flex flex-col justify-center gap-6 px-3 py-8 mx-auto overflow-auto lg:gap-8 md:px-5 xl:px-12 max-sm:row-span-4 sm:max-lg:row-span-3 lg:col-span-4 ">
        <div className="flex flex-col gap-1 xl:gap-2">
          <Reveal delay={0.3} duration={1.2}>
            <h1 className="p-0 pb-4 text-pretty  uppercase my-0 text-2xl font-black leading-none  h-fit md:text-3xl xl:text-4xl 2xl:text-5xl text-neutral-content">
              {title}
            </h1>
          </Reveal>
          <FromLeft delay={0.9} duration={1}>
            <h3 className="text-sm max-sm:line-clamp-6 font-light leading-tight tracking-wide md:tracking-wider sm:text-base text-balance md:text-md xl:text-lg opacity-70 text-neutral-content">
              {descriptions[0].content}
            </h3>
          </FromLeft>
        </div>

        <span className="text-2xl md:text-3xl z-50 absolute top-4  right-4 p-3 transition duration-300 md:p-4   text-base-content brightness-85 group-hover:brightness-125 group-hover:scale-110">
          <BiExpandAlt />
        </span>
      </div>
    </motion.div>
  );
};

export default Card;
