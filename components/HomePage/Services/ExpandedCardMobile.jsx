import { motion } from "framer-motion";
import { StepsCard } from "./StepsCard";
import { BsChevronContract } from "react-icons/bs";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

const ExpandedCard = ({ item, setSelectedId, layoutId }) => {
  const lenisInstance = useLenis();
  // useEffect(() => {
  //   lenisInstance.stop();
  //   return () => {
  //     lenisInstance.start();
  //   };
  // }, []);

  const { title, photo, descriptions, steps } = item;

  const filtered = descriptions.slice(1, descriptions.length); //arrayExceptfirstValue

  return (
    <motion.div
      layoutId={layoutId}
      className="relative group z-50 grid grid-rows-7 w-full h-full  p-4 grid-cols-1 rounded-2xl bg-secondary "
    >
      <CloseButton closeCard={() => setSelectedId(null)} />

      <motion.div
        layoutId={photo}
        className="z-10 w-full  relative  row-span-2  rounded-2xl lg:rounded-3xl overflow-hidden"
      >
        <Image
          src={`/images/${photo}.webp`}
          alt="project-img"
          fill={true}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 80vw, 100vw "
        />
      </motion.div>

      <div className="relative fade-edge z-20 flex flex-col  sm:gap-2 px-2 pt-8 pb-4 sm:py-6 md:py-12  w-full  row-span-5 md:px-5 xl:px-12 overflow-y-auto">
        <motion.h1
          layoutId={title}
          className="p-0 pb-4 my-0 text-2xl font-semibold uppercase leading-none md:text-4xl xl:text-5xl text-neutral-content"
        >
          {title}
        </motion.h1>
        <motion.h3
          layoutId={descriptions[0].content}
          layout="size"
          className="text-sm font-light leading-tight tracking-tight md:leading-tight md:tracking-wider xl:text-base opacity-100 text-neutral-content"
        >
          {descriptions[0].content}
        </motion.h3>
        <div className="flex flex-col gap-12  pt-1 pb-4 ">
          <div className="flex flex-col gap-1 md:gap-2 ">
            {filtered.map((description, i) => (
              <motion.div
                key={description.content}
                variants={{
                  hidden: { filter: "blur(3px)", opacity: 0 },
                  visible: { filter: "blur(0px)", opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.25 + i * 0.05,
                  ease: "easeInOut",
                }}
                className="flex flex-col gap-2"
              >
                <h3 className="text-base font-semibold leading-none tracking-wide md:text-lg xl:text-xl 2xl:text-3xl text-neutral-content">
                  {description.title}
                </h3>
                <h5
                  className={
                    "text-sm font-extralight   leading-tight tracking-tight md:leading-tight md:tracking-wider xl:text-base  text-neutral-content " +
                    (description.title.length > 0 && " pl-2")
                  }
                >
                  {description.content}
                </h5>
              </motion.div>
            ))}
          </div>

          {steps.steps.length > 0 && <StepsCard steps={steps} />}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandedCard;

export const CloseButton = ({ closeCard }) => {
  return (
    <motion.span
      onClick={closeCard}
      className="text-3xl rotate-45 md:text-3xl z-50 cursor-pointer absolute top-4 lg:text-4xl right-4 p-3  md:p-4  transition-colors duration-200 text-base-content  hover:text-error hover:brightness-125 hover:scale-95"
    >
      <BsChevronContract />
    </motion.span>
  );
};
