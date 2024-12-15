import { Blur, FromLeft } from "../../utils/animations";
import { motion } from "framer-motion";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { StepsCard } from "./StepsCard";
import { BsChevronContract } from "react-icons/bs";

const ExpandedCard = ({ item, setSelectedId }) => {
  useLockBodyScroll();

  const { title, photo, descriptions, steps } = item;

  return (
    <motion.div className="fixed z-[1000] top-0 bottom-0 left-0 right-0 flex p-2 sm:p-12 backdrop-blur-xl backdrop-brightness-75 lg:p-16 2xl:p-24">
      <motion.div
        layoutId={item}
        className="relative group z-50 grid  w-full h-full lg:grid-rows-1 p-4 max-lg:flex max-lg:flex-col cursor-pointer items-center rounded-2xl grid-cols-7 overflow-hidden  bg-accent 0 negative-shadow "
      >
        <button
          onClick={() => setSelectedId(null)}
          className="text-2xl rotate-45 md:text-3xl z-50 absolute top-4 lg:text-4xl right-4 p-3 transition duration-300 md:p-4   text-base-content brightness-85 hover:text-error hover:brightness-125 hover:scale-95"
        >
          <BsChevronContract />
        </button>
        <div className="z-10 w-full h-full col-span-3 max-lg:h-1/3 lg:row-span-1">
          <Blur delay={0.2} duration={0.8} className="w-full h-full">
            <img
              src={`/images/${photo}.jpg`}
              className="object-cover w-full h-full rounded-lg "
              alt="project-img"
            />
          </Blur>
        </div>

        <div className="relative z-20 flex flex-col justify-center h-full col-span-4 gap-2 px-2 py-8 overflow-hidden lg:row-span-1 md:px-5 xl:px-12">
          <FromLeft
            delay={0.4}
            duration={1.2}
            className="p-0 pb-4 my-0 text-2xl font-semibold leading-none md:text-4xl xl:text-6xl text-neutral-content"
          >
            {title}
          </FromLeft>
          <div className="flex flex-col gap-12 px-0 py-4 overflow-y-auto md:px-4 ">
            <div className="flex flex-col gap-4 md:gap-8 ">
              {descriptions.map((description, i) => (
                <FromLeft
                  key={description.title}
                  delay={0.7 + i * 0.5}
                  duration={1.1}
                  className="flex flex-col gap-1"
                >
                  <h3 className="text-base font-semibold leading-none tracking-wide md:text-lg xl:text-xl 2xl:text-3xl opacity-90 text-neutral-content">
                    {description.title}
                  </h3>
                  <h5 className="text-sm font-normal leading-none tracking-tight md:leading-tight md:tracking-wider xl:text-base opacity-70 text-neutral-content">
                    {description.content}
                  </h5>
                </FromLeft>
              ))}
            </div>

            {steps.steps.length > 0 && <StepsCard steps={steps} />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedCard;
