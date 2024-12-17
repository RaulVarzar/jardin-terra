import { motion } from "framer-motion";

import { useLockBodyScroll } from "@uidotdev/usehooks";
import PricingCollapse from "./PricingCollapse";

import { TfiClose } from "react-icons/tfi";
import { GiReceiveMoney } from "react-icons/gi";

const ModalCard = ({ closeCard }) => {
  useLockBodyScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="fixed  z-[1000] bottom-0 left-0 right-0   grid h-[100dvh] px-0 overflow-y-auto sm:px-8 place-content-end sm:place-content-center backdrop-blur-xl backdrop-brightness-75 "
    >
      <motion.div
        className="relative z-[1000] max-h-[95vh] flex h-fit flex-col justify-center items-center max-w-5xl gap-2 md:gap-8 px-8 pt-10 pb-10 md:pt-20  md:pb-16 md:px-6  bg-secondary-content  max-sm:rounded-t-2xl sm:rounded-2xl "
        layoutId="toggle"
      >
        <div
          onClick={closeCard}
          className="text-xl absolute top-6 right-6 md:top-8 transition-colors duration-300 sm:text-2xl md:right-8 text-base-content cursor-pointer lg:text-3xl p-0 hover:text-error"
        >
          <TfiClose />
        </div>

        <div className="flex flex-col items-center md:flex-row gap-x-6 gap-y-2 lg:gap-8 w-full md:w-9/12">
          <motion.span
            initial={{ opacity: 0, scale: 0.3, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.4, ease: "circInOut" }}
            className="text-neutral-content py-1 text-4xl md:text-5xl xl:text-6xl"
          >
            <GiReceiveMoney />
          </motion.span>
          <motion.h5
            initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full md:w-11/12 text-base leading-none tracking-wide text-center md:text-left text-balanc md:leading-snug md:text-lg lg:text-xl xl:text-2xl font-semibold  text-neutral-content opacity-80"
          >
            La Jardin Terra, fiecare proiect este unic și are o ofertă de preț
            personalizată. Costurile pentru proiectarea spațiilor verzi sunt
            stabilite în funcție de diferite elemente, precum:
          </motion.h5>
        </div>
        <PricingCollapse />
      </motion.div>
    </motion.div>
  );
};

export default ModalCard;
