import { Blur, FadeIn, FromBottom, FromLeft } from "../../utils/animations";
import { motion } from "framer-motion";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import CloseButton from "../../CloseButton";
import { useState } from "react";
import { StepsCard } from "./StepsCard";

const ExpandedProjectCard = ({ project, setSelectedId }) => {
  useLockBodyScroll();

  const { title, photo, descriptions, steps } = project;

  return (
    <motion.div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex p-4 sm:p-12 backdrop-blur-xl backdrop-brightness-75 ">
      <motion.div
        layoutId={project}
        className="relative z-50 grid  w-full h-full lg:grid-rows-1 p-4 max-lg:flex max-lg:flex-col cursor-pointer border-1 items-center rounded-2xl grid-cols-7 overflow-hidden border-neutral-content bg-[#1b2220] border-opacity-15 "
      >
        <div className="z-10 w-full h-full col-span-3 max-lg:h-1/3 lg:row-span-1">
          <Blur delay={0.2} duration={0.8} className="w-full h-full">
            <img
              src={`/images/${photo}.jpg`}
              className="object-cover w-full h-full rounded-lg brightness-85 group-hover:brightness-100"
              alt="project-img"
            />
          </Blur>
        </div>

        <CloseButton action={() => setSelectedId(null)} />

        <div className="relative z-20 flex flex-col justify-center h-full col-span-4 gap-2 px-3 py-8 overflow-hidden lg:row-span-1 md:px-5 xl:px-12">
          <FromLeft
            delay={0.4}
            duration={1.2}
            className="p-0 pb-4 my-0 text-2xl font-semibold leading-none md:text-4xl xl:text-6xl text-neutral-content"
          >
            {title}
          </FromLeft>
          <div className="flex flex-col gap-12 px-2 py-4 overflow-y-auto md:px-4 ">
            <div className="flex flex-col gap-3 ">
              {descriptions.map((description, i) => (
                <FromLeft delay={0.7 + i * 0.5} duration={1.1}>
                  <h3 className="text-lg font-semibold leading-none tracking-wide md:text-xl xl:text-3xl opacity-90 text-neutral-content">
                    {description.title}
                  </h3>
                  <h5 className="text-sm font-normal leading-tight tracking-wider xl:text-base opacity-70 text-neutral-content">
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

export default ExpandedProjectCard;
