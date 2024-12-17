import { motion } from "framer-motion";
import { useRef } from "react";

const titleVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    transition: { delay: 0, duration: 0.8, ease: [0.7, 0, 0.3, 1] },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, duration: 1.3, ease: [0.7, 0, 0.3, 1] },
  },
};

const subTitleVariants = {
  hidden: { y: "0%", opacity: 0, filter: "blur(5px)" },
  visible: {
    y: 0,
    filter: "blur(0px)",
    opacity: 0.7,
    transition: { delay: 1, duration: 1.4, ease: [0.7, 0, 0.3, 1] },
  },
};

const Header = ({ showHeader }) => {
  const headerRef = useRef(null);

  return (
    <motion.div
      ref={headerRef}
      className="flex flex-col items-center max-w-4xl  mx-auto   pb-12 text-center px-6 2xl:max-w-5xl text-neutral-content"
    >
      <div className="overflow-hidden">
        <motion.h3
          variants={titleVariants}
          initial="hidden"
          animate={showHeader ? "visible" : ""}
          className="text-3xl font-black tracking-wider uppercase sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl"
        >
          Modul de lucru
        </motion.h3>
      </div>

      <motion.p
        variants={subTitleVariants}
        initial="hidden"
        animate={showHeader ? "visible" : "hidden"}
        className="pt-2 text-sm font-normal leading-tight tracking-wider opacity-50 max-w-3xl md:text-lg xl:text-xl text-balance 2xl:text-2xl"
      >
        Înainte de a trece la lopată și săpăligă, analizăm dimensiunile și forma
        spațiului tău verde. Apoi, ascultăm cu atenție dorințele tale și începem
        proiectarea grădinii. Suntem consultanții peisagiști pe care te poți
        baza pentru a avea propriul tău colț de natură, în armonie cu nevoile
        tale personale sau profesionale.
      </motion.p>
    </motion.div>
  );
};

export default Header;
