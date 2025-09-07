import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import ModalContent from "./ModalContent";
import MagneticButton from "../../../MagneticButton";
import { MdAttachMoney } from "react-icons/md";
import { FadeIn } from "../../../utils/animations.jsx";

const PricingButton = () => {
  const [open, setOpen] = useState(false);
  const isMobile = false;
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div className="grid place-items-center relative mt-8 mb-12">
      <FadeIn delay={0.1} duration={1.1} offset={70} threshold={0.1}>
        <MagneticButton amount={[18, 12]} magnify={1.1}>
          <motion.button
            animate={{ width: hovering ? "auto" : "fit-content" }} // or px values
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            layoutId="one"
            className="relative overflow-hidden flex flex-row gap-2 items-center text-neutral-content px-6 py-3 md:px-12 md:py-6 bg-accent-content shadow-sm rounded-full cursor-pointer"
            onHoverStart={() => setHovering(true)}
            onHoverEnd={() => setHovering(false)}
            onClick={() => setOpen(true)}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              key={open}
              className="text-base md:text-md 2xl:text-lg font-normal tracking-wider z-10 transition-colors duration-500  text-neutral-content"
            >
              Cum stabilim costurile
            </motion.span>
          </motion.button>
        </MagneticButton>
      </FadeIn>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed z-[9999] top-0 left-0 flex w-full h-full place-content-center place-items-center">
            <motion.div
              className="relative overflow-hidden z-[999] px-3"
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
