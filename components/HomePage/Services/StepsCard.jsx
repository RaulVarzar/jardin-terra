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

  console.log(selectedTopic * (100 / steps.steps.length));

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center w-full gap-2 mt-10"
    >
      {/* <h3 className="text-sm font-semibold text-center  tracking-wide uppercase opacity-35 md:text-lg xl:text-xl text-neutral-content">
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
          <motion.span className="block pl-4 text-sm font-light text-center leading-snug text-balance md:text-md opacity-70">
            {steps.steps[selectedTopic].content}
          </motion.span>
        </motion.div>
      </AnimatePresence> */}
      <div class=" w-full flex flex-col gap-2 relative h-fit ">
        {/* <Navigation
          selectedTopic={selectedTopic}
          handleDecrease={() => handleDecrease()}
          handleIncrease={() => handleIncrease()}
          totalSteps={steps.steps.length}
        /> */}
        <div className=" w-full flex flex-col items-center overflow-hidden ">
          <motion.div className="flex flex-nowrap gap-0 justify-stretch w-7/12 ">
            {steps.steps.map((step, i) => (
              <Stack
                key={i}
                step={step}
                id={i}
                selectedTopic={selectedTopic}
                stepsLength={steps.steps.length}
                makeActive={(id) => setSelectedTopic(id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Stack = ({ id, step, selectedTopic, stepsLength, makeActive }) => {
  return (
    <motion.div
      // exit={{ y: "-100%", opacity: 0 }}
      // initial={{ opacity: 1 }}
      // animate={
      //   {
      //     // y: selectedTopic < id ? 0 : "-115%",
      //     // top: (id - selectedTopic) * 6,
      //     // scale: 1 - (id - selectedTopic) * 0.01,
      //     // opacity: selectedTopic == id ? 1 : 0,
      //   }
      // }
      transition={{ duration: 0.8, ease: [0.6, 0, 0.3, 1] }}
      // style={{
      //   gridRow: 1,
      //   gridColumn: 1,
      //   zIndex: -id,
      // }}
      animate={{ x: `-${selectedTopic * 100}%` }}
      onClick={() => makeActive(id)}
      className=" w-full min-w-64 md:min-w-72 xl:w-full  flex-col flex-none h-full flex gap-3 md:gap-4 xl:gap-5 cursor-pointer"
    >
      <div className="flex flex-row items-center">
        <div
          className={
            "w-full h-0.5 bg-base-content " + (id === 0 && " opacity-0")
          }
        />
        <span className="size-12 grid place-content-center aspect-square rounded-full border border-base-content">
          {id + 1}
        </span>
        <div
          className={
            "w-full h-0.5 bg-base-content " +
            (id === stepsLength - 1 && " opacity-0")
          }
        ></div>
      </div>

      <motion.div
        animate={
          selectedTopic === id
            ? { opacity: 1, filter: "blur(0px)", scale: 1 }
            : { opacity: 0.2, filter: "blur(2px)", scale: 0.95 }
        }
        transition={{ duration: 0.9 }}
        className="flex flex-col gap-4 rounded-2xl  text-center h-full "
      >
        <span className="text-xl xl:text-2xl  uppercase font-normal text-neutral-content leading-tight">
          {step.title}
        </span>
        <p className="text-sm opacity-85 font-extralight leading-snug text-neutral-content px-2 sm:px-4 lg:px-8">
          {step.content}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const Navigation = ({
  handleDecrease,
  selectedTopic,
  handleIncrease,
  totalSteps,
}) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <button
        className={
          "py-1.5 px-0.5 text-xl md:text-2xl lg:text-3xl " +
          (selectedTopic === 0 && " opacity-20")
        }
        onClick={handleDecrease}
      >
        <GoChevronLeft />
      </button>
      {/* <span className=" text-lg lg:text-2xl font-medium w-8  text-center">
        {selectedTopic + 1}
      </span> */}
      <button
        className={
          "py-1.5 px-0.5 text-xl md:text-2xl lg:text-3xl " +
          (selectedTopic === totalSteps - 1 && " opacity-30")
        }
        onClick={handleIncrease}
      >
        <GoChevronRight />
      </button>
    </div>
  );
};
