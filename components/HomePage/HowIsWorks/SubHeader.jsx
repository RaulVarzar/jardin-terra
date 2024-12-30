import { motion } from "framer-motion";

const SubHeader = ({ visible }) => {
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
      variants={subTitleVariants}
      initial="hidden"
      animate={visible ? "visible" : "exit"}
      className=" text-sm text-center  text-neutral-content font-light leading-snug tracking-wider px-0  opacity-70 max-w-3xl md:text-base xl:text-md text-balance 2xl:text-lg"
    >
      Înainte de a trece la lopată și săpăligă, analizăm dimensiunile și forma
      spațiului tău verde. Apoi, ascultăm cu atenție dorințele tale și începem
      proiectarea grădinii. Suntem consultanții peisagiști pe care te poți baza
      pentru a avea propriul tău colț de natură, în armonie cu nevoile tale
      personale sau profesionale.
    </motion.p>
  );
};

export default SubHeader;
