import { motion, useInView } from "framer-motion";
import PricingButton from "./PricingButton";
import { useRef } from "react";

const SubHeader = ({ expandedCard, openModal, showSteps }) => {
  return (
    <motion.div className="flex flex-col justify-start px-2 md:px-4 xl:px-6 md:gap-1 xl:gap-2">
      <SubTitle showSteps={showSteps} />
      <PricingButton
        expanded={expandedCard}
        setExpanded={openModal}
        showSteps={showSteps}
      />
    </motion.div>
  );
};

export default SubHeader;

const SubTitle = ({ showSteps }) => {
  const subTitleVariants = {
    hidden: {
      y: "0%",
      opacity: 0,
      filter: "blur(5px)",
      transition: { delay: 0.3, duration: 1.2, ease: [0.45, 0, 0.15, 1] },
    },
    visible: {
      y: 0,
      filter: "blur(0px)",
      opacity: 0.7,
      transition: { delay: 0.5, duration: 1.2, ease: [0.45, 0, 0.15, 1] },
    },
    exit: {
      y: "0%",
      opacity: 0,
      filter: "blur(5px)",
      transition: { delay: 0, duration: 0.3, ease: [0.45, 0, 0.15, 1] },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <motion.p
      ref={ref}
      variants={subTitleVariants}
      initial="hidden"
      animate={isInView && !showSteps ? "visible" : "exit"}
      className="pb-4 text-sm text-left text-neutral-content font-light leading-normal tracking-wider opacity-70 max-w-3xl md:text-base xl:text-md text-balance 2xl:text-lg"
    >
      Înainte de a trece la lopată și săpăligă, analizăm dimensiunile și forma
      spațiului tău verde. Apoi, ascultăm cu atenție dorințele tale și începem
      proiectarea grădinii. Suntem consultanții peisagiști pe care te poți baza
      pentru a avea propriul tău colț de natură, în armonie cu nevoile tale
      personale sau profesionale.
    </motion.p>
  );
};
