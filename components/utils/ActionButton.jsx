import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link.js";

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
    transition: { delay: 0.2, duration: 0.35, ease: [0.5, 0, 0.2, 1] },
  },
};

const ActionButton = ({
  href = "",
  text = "Click Me",
  icon: Icon,
  buttonColor = "bg-secondary-content",
  textColor = "text-neutral-content",
  className = "",
  ...props
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      onHoverEnd={() => setHovering(false)}
      onHoverStart={() => setHovering(true)}
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      whileHover="hover"
      className={`text-base-content origin-center w-fit ${buttonColor} overflow-hidden rounded-full cursor-pointer shadow-md group ${className}`}
      {...props}
    >
      <Link
        href={href}
        className={`flex flex-row items-center relative ${textColor} overflow-hidden px-6 py-3 md:px-6 lg:py-6 lg:px-8`}
      >
        {/* Expanding background circle */}
        <motion.span
          variants={{
            hidden: { width: 10, height: 10, x: 0 },
            hover: { width: "110%", height: "auto", x: -45 },
          }}
          transition={{ duration: 0.4, delay: 0, ease: [0.5, 0, 0.15, 1] }}
          className="origin-left aspect-square z-0 absolute left-6 lg:left-10 bg-neutral-content rounded-full"
        />

        {/* Text + Icon */}
        <motion.div
          variants={{
            visible: { x: 0 },
            hover: { x: -30 },
          }}
          transition={{ duration: 0.4, delay: 0, ease: [0.6, 0, 0.2, 1] }}
          className="flex flex-row items-center ml-10"
        >
          <motion.h3
            layout
            className={
              "text-sm md:text-base 2xl:text-md font-normal tracking-wider z-10 transition-colors duration-400 delay-100 " +
              (hovering ? " text-base-100" : ` ${textColor}`)
            }
          >
            {text}
          </motion.h3>

          {Icon && (
            <motion.span
              animate={hovering ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
              transition={{
                duration: 0.4,
                delay: 0.05,
                ease: [0.6, 0, 0.2, 1],
              }}
              className="text-lg xl:text-xl w-0 ml-4 text-base-100 z-10"
            >
              <Icon />
            </motion.span>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ActionButton;
