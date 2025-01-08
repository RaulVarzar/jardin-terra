import { AnimatePresence, motion, useTransform } from "framer-motion";
import PricingButton from "./PricingButton";
import ModalCard from "./ModalCard";
import { useState } from "react";

const titleVariants = {
  hidden: {
    y: "50%",
    filter: "blur(10px)",
    opacity: 0,
    transition: { duration: 0.5, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
  visible: {
    y: "0%",
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.9, delay: 0.3, ease: [0.45, 0, 0.15, 1] },
  },
  exit: {
    y: "-70%",
    filter: "blur(10px)",
    opacity: 0,
    transition: { duration: 0.6, delay: 0, ease: [0.45, 0, 0.15, 1] },
  },
};

export const Header = ({ visible }) => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <div className=" flex sticky gap-3 w-fit -mt-[120vh] bg-green-95 z-50 mx-auto inset-x-0  top-0 flex-col h-screen justify-center items-center">
        <AnimatePresence>
          {visible && (
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-2 lg:gap-3 2xl:gap-4 justify-center  h-screen items-center   relative"
            >
              <Title />
              <Description />
              <PricingButton
                opened={openModal}
                setExpanded={() => setOpenModal(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {openModal && <ModalCard closeCard={() => setOpenModal(false)} />}
      </AnimatePresence>
    </>
  );
};

const Title = ({}) => {
  return (
    <motion.div className="overflow-hidden max-w-4xl 2xl:max-w-5xl text-neutral-content">
      <motion.h3
        // variants={titleVariants}
        // initial="hidden"
        // animate="visible"
        // exit="exit"
        className="text-3xl font-semibold text-center  leading-none tracking-wide uppercase sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl"
      >
        Modul de lucru
      </motion.h3>
    </motion.div>
  );
};

export default Header;

const Description = ({}) => {
  const subTitleVariants = {
    hidden: {
      y: 15,
      opacity: 0,
      filter: "blur(5px)",
      transition: { delay: 0.3, duration: 1.2, ease: [0.45, 0, 0.15, 1] },
    },
    visible: {
      y: 0,
      filter: "blur(0px)",
      opacity: 0.7,
      transition: { delay: 0.6, duration: 1.2, ease: [0.45, 0, 0.15, 1] },
    },
    exit: {
      y: 15,
      opacity: 0,
      filter: "blur(5px)",
      transition: { delay: 0, duration: 0.5, ease: [0.45, 0, 0.15, 1] },
    },
  };

  return (
    <motion.p
      // variants={subTitleVariants}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
      className=" text-sm text-center  text-neutral-content font-light leading-snug tracking-wider px-6  opacity-70 max-w-3xl md:text-base xl:text-md text-balance 2xl:text-lg"
    >
      Înainte de a trece la lopată și săpăligă, analizăm dimensiunile și forma
      spațiului tău verde. Apoi, ascultăm cu atenție dorințele tale și începem
      proiectarea grădinii. Suntem consultanții peisagiști pe care te poți baza
      pentru a avea propriul tău colț de natură, în armonie cu nevoile tale
      personale sau profesionale.
    </motion.p>
  );
};
