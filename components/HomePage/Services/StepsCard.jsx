import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

export const StepsCard = ({ steps }) => {
  const [selectedTopic, setSelectedTopic] = useState(0);

  function handleDecrease() {
    if (selectedTopic === 0) return;
    setSelectedTopic((prev) => prev - 1);
  }

  function handleIncrease() {
    if (selectedTopic === steps.steps.length - 1) return;
    setSelectedTopic((prev) => prev + 1);
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: "0" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center w-full max-w-4xl gap-3 px-2 py-3 mx-auto text-center md:gap-8 md:py-6 sm:px-10 backdrop-brightness-115 rounded-xl"
    >
      <h3 className="text-sm font-black tracking-wider uppercase opacity-25 md:text-lg xl:text-2xl text-neutral-content">
        {steps.title}
      </h3>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTopic}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex flex-col gap-2 overflow-hidden text-neutral-content"
        >
          <motion.h6 className="mx-auto font-medium leading-tight tracking-wide text-md text-balance md:tracking-wider md:text-xl 2xl:text-2xl w-fit">
            {steps.steps[selectedTopic].title}
          </motion.h6>
          <motion.span className="block pl-4 text-sm font-light leading-snug text-balance md:text-md opacity-70">
            {steps.steps[selectedTopic].content}
          </motion.span>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-row items-center gap-0.5">
        <button
          className={
            "py-1.5 px-3 text-xl md:text-2xl lg:text-3xl " +
            (selectedTopic === 0 && " opacity-20")
          }
          onClick={handleDecrease}
        >
          <GoChevronLeft />
        </button>
        <span className="px-4 py-2 text-lg lg:text-xl backdrop-brightness-125">
          {selectedTopic + 1}
        </span>
        <button
          className={
            "py-1.5 px-3 text-xl md:text-2xl lg:text-3xl " +
            (selectedTopic === steps.steps.length - 1 && " opacity-30")
          }
          onClick={handleIncrease}
        >
          <GoChevronRight />
        </button>
      </div>
    </motion.div>
  );
};
