import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import ModalContent from "./ModalContent";

const PricingButton = () => {
  const [open, setOpen] = useState(false);
  const isMobile = false;
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div className="grid place-items-center relative">
      <motion.button
        className="relative overflow-hidden w-fit px-6 py-3 md:px-12 md:py-6 my-4 bg-secondary shadow-sm transition-colors duration-300  rounded-full cursor-pointer group "
        layoutId="one"
        onClick={() => setOpen(true)}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          key={open}
          className={clsx(
            "text-sm md:text-base 2xl:text-md font-normal tracking-wider z-10 transition-colors duration-400 delay-100",
            {
              "text-base-100": !isMobile && hovering,
              "text-neutral-content": !isMobile && !hovering,
              "text-neutral-content opacity-85": isMobile,
            }
          )}
        >
          Cum stabilim costurile
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed z-[9999] top-0 left-0 flex w-full h-full place-content-center place-items-center">
            <motion.div
              className="relative overflow-hidden z-[999] "
              layoutId="one"
            >
              <ModalContent />
            </motion.div>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full cursor-pointer  backdrop-blur-sm backdrop-brightness-50"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PricingButton;
