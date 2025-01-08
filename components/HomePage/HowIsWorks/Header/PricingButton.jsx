import { motion } from "framer-motion";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { LuInfo } from "react-icons/lu";

const buttonVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1.1, duration: 1, ease: [0.5, 0, 0.2, 1] },
  },
  exit: {
    y: 10,
    opacity: 0,
    transition: { delay: 0.25, duration: 0.35, ease: [0.5, 0, 0.2, 1] },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 0.3, ease: [0.5, 0, 0.2, 1] },
  },
};

const PricingButton = ({ expanded, setExpanded }) => {
  const [hovering, setHovering] = isMobile ? [true, null] : useState(false);

  return (
    <motion.div
      layoutId="toggle"
      onClick={setExpanded}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onHoverEnd={!isMobile && (() => setHovering(false))}
      onHoverStart={!isMobile && (() => setHovering(true))}
      className="text-base-content origin-left w-fit my-4 bg-secondary-content  transition-colors duration-300   overflow-hidden  rounded-full cursor-pointer group "
    >
      <motion.div
        animate={
          !expanded
            ? {
                opacity: 0.8,
                y: "0%",
                transition: {
                  duration: 0.4,
                  delay: 0.35,
                  ease: "easeInOut",
                },
              }
            : { opacity: 0, y: "150%", transition: { duration: 0.01 } }
        }
        layout
        className="flex flex-row items-center relative text-neutral-content  px-6 py-3  md:px-6 lg:py-6 lg:px-8 "
      >
        <motion.span
          animate={
            hovering
              ? { width: "110%", height: "auto", x: -45 }
              : { width: 10, height: 10, x: 0 }
          }
          transition={{ duration: 0.4, delay: 0, ease: [0.5, 0, 0.15, 1] }}
          className="text-lg xl:text-xl origin-left aspect-square z-0 absolute left-6 lg:left-10"
        >
          <span
            className={
              "rounded-full  w-full h-full absolute top-0 left-0 " +
              (isMobile ? " bg-secondary" : "bg-neutral-content")
            }
          ></span>
        </motion.span>

        <motion.div
          animate={hovering ? { x: -30 } : { x: 0 }}
          transition={{ duration: 0.4, delay: 0, ease: [0.6, 0, 0.2, 1] }}
          className="flex flex-row items-center ml-10"
        >
          <motion.h3
            layout
            className={
              "text-sm md:text-base 2xl:text-md font-normal tracking-wider z-10 transition-colors duration-400 delay-100 " +
              (!isMobile && hovering
                ? " text-base-100"
                : !isMobile && !hovering
                ? " text-neutral-content"
                : isMobile && " text-neutral-content opacity-85")
            }
          >
            Cum stabilim costurile?
          </motion.h3>

          <motion.span
            animate={hovering ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.6, 0, 0.2, 1] }}
            className={
              "text-lg xl:text-xl w-0 ml-4 z-10 " +
              (isMobile ? " text-neutral-content opacity-85" : " text-base-100")
            }
          >
            <LuInfo />
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PricingButton;
