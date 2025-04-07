"use client";
import { AnimatePresence, motion } from "framer-motion";
import { LuLeaf } from "react-icons/lu";
import { useLenis } from "lenis/react";

export const NavbarLink = ({ hovering, setHovering, content, closeNavbar }) => {
  const lenisInstance = useLenis();

  const handleClick = (targetElement) => {
    if (targetElement) {
      const scrollToOptions = {
        offset: 0,
        lerp: 0.1,
        duration: 2,
        easing: (t) => {
          return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
        },
        immediate: false,
        lock: true,
        force: false,
      };
      lenisInstance.scrollTo(targetElement, scrollToOptions);
      closeNavbar();
    }
  };

  const { title, link, id } = content;

  const variants = {
    initial: { opacity: 0, y: "110%" },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + custom * 0.06,
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: "110%",
      transition: {
        delay: 0.3 - id * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => setHovering(id)}
      onMouseLeave={() => setHovering(null)}
      onClick={() => handleClick(link)}
      className="relative overflow-hidde px-1 py-3 lg:py-4 flex flex-row items-center cursor-pointer"
    >
      <motion.div
        className="overflow-hidden flex flex-row items-center gap-4  w-fit"
        animate={
          hovering && hovering != id
            ? { filter: "blur(2px)", opacity: 0.6 }
            : hovering && hovering === id
            ? { filter: "blur(0px)", scale: 1.03, x: -48 }
            : { filter: "blur(0px)", opacity: 1 }
        }
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <motion.span
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={id}
          className="flex items-center h-full leading-none text-neutral-content kanit opacity-95 active:scale-90 hover:opacity-100  tracking-wider text-2xl md:text-4xl lg:text-6xl"
        >
          {title}
        </motion.span>
      </motion.div>
      <AnimatePresence mode="popLayout">
        {hovering === id && (
          <motion.div
            layoutId="links"
            exit={{ opacity: 0 }}
            className="absolute right-0 text-xl sm:text-2xl lg:text-3xl text-base-content"
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: "0%",
              opacity: 1,
            }}
            transition={{ duration: 0.3, delay: 0, ease: [0.75, 0, 0.5, 1] }}
          >
            <LuLeaf />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
