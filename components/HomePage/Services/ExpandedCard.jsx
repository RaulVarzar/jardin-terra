import { motion } from "framer-motion";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { StepsCard } from "./StepsCard";
import { BsChevronContract } from "react-icons/bs";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

const ExpandedCard = ({ item, setSelectedId, layoutId }) => {
  // Pause and resume scroll
  const lenisInstance = useLenis();
  useEffect(() => {
    lenisInstance.stop();
    return () => {
      lenisInstance.start();
    };
  }, []);

  const { title, photo, descriptions, steps } = item;

  const filtered = descriptions.slice(1, descriptions.length); //arrayExceptfirstValue

  return (
    <motion.div
      layoutId={layoutId}
      className="relative group z-50 grid  w-full h-full lg:grid-rows-1 p-4 max-lg:flex max-lg:flex-col cursor-pointer max-sm:place-self-end items-center rounded-t-2xl max-h-[95dvh] sm:rounded-2xl xl:rounded-3xl md:p-6 xl:p-8 grid-cols-7 overflow-hidden  bg-secondary negative-shadow "
    >
      <motion.span
        onClick={() => setSelectedId(null)}
        className="text-2xl rotate-45 md:text-3xl z-50 absolute top-4 lg:text-4xl right-4 p-3  md:p-4  transition-colors duration-200 text-base-content  hover:text-error hover:brightness-125 hover:scale-95"
      >
        <BsChevronContract />
      </motion.span>
      <motion.div
        layoutId={photo}
        className="z-10 w-full h-full relative col-span-3 max-lg:h-1/3 lg:row-span-1 rounded-2xl lg:rounded-3xl overflow-hidden"
      >
        <Image
          src={`/images/${photo}.jpg`}
          alt="project-img"
          fill={true}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 80vw, 100vw "
        />
      </motion.div>

      <div className="relative z-20 flex flex-col justify-center h-full col-span-4 sm:gap-2 px-1 py-4 sm:py-6 md:py-8 overflow-hidden lg:row-span-1 md:px-5 xl:px-12">
        <motion.h1
          layoutId={title}
          className="p-0 pb-4 my-0 text-2xl font-semibold uppercase leading-none md:text-4xl xl:text-5xl text-neutral-content"
        >
          {title}
        </motion.h1>
        <motion.h3
          layoutId={descriptions[0].content}
          layout="size"
          className="text-sm font-normal leading-none tracking-tight md:leading-tight md:tracking-wider xl:text-base opacity-100 text-neutral-content"
        >
          {descriptions[0].content}
        </motion.h3>
        <div className="flex flex-col gap-12  pt-1 pb-4 overflow-y-auto ">
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
                  delay: 0.25 + i * 0.15,
                  ease: "easeInOut",
                }}
                className="flex flex-col gap-2"
              >
                <h3 className="text-base font-semibold leading-none tracking-wide md:text-lg xl:text-xl 2xl:text-3xl text-neutral-content">
                  {description.title}
                </h3>
                <h5
                  className={
                    "text-sm font-normal  leading-none tracking-tight md:leading-tight md:tracking-wider xl:text-base  text-neutral-content " +
                    (description.title.length > 0 && " pl-4")
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
