import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { RxChevronDown } from "react-icons/rx";

const PRICING = [
  {
    title: "Dimensiunea spațiului",
    description:
      "Costurile proiectării unui spațiu verde sunt direct proporționale cu dimensiunea sa.",
  },
  {
    title: "Complexitatea designului",
    description:
      "Dacă proiectul implică elemente de design complexe, cum ar fi construcții de teren, aplicații de apă, scări sau alte elemente decorative, costurile vor fi diferite.",
  },
  {
    title: "Materialele utilizate",
    description:
      "Costurile pentru materialele utilizate în proiectare pot varia considerabil în funcție de cantitatea, calitatea dar și disponibilitatea acestora pe piață. Pentru stabilirea costurilor etapelor de proiectare, este recomandat să cunoaștem și prețurile furnizorilor de servicii și materie primă, pentru a avea un buget total al activității de amenajare sau reamenajare a spațiului.",
  },
];

const PricingCollapse = () => {
  const [active, setActive] = useState(null);
  function handleSelect(id) {
    if (id != active) {
      setActive(id);
    } else {
      setActive(null);
    }
  }

  return (
    <motion.div className="mx-auto w-full gap-0.5 flex flex-col md:w-7/12 ">
      {PRICING.map((item, i) => (
        <AccordionItem
          key={item.title}
          i={i + 1}
          item={item}
          active={active}
          setActive={() => handleSelect(i + 1)}
        />
      ))}
    </motion.div>
  );
};

const AccordionItem = ({ i, item, active, setActive }) => {
  const textVariants = {
    hidden: {
      opacity: 1,
      filter: "blur(2px)",
      y: "20%",
      height: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  const isActive = active === i;
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(2px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay: 0.8 + i * 0.25 }}
      className="flex flex-col gap-1 py-1.5 md:py-2 xl:py-3 "
    >
      <motion.div
        onClick={() => setActive(isActive ? null : i)}
        className={
          "flex flex-row cursor-pointer md:hover:scale-[1.01]  items-center transition-all duration-300 justify-between  " +
          (isActive ? " opacity-100" : "opacity-50 hover:opacity-90")
        }
      >
        <motion.h1 className="text-lg  font-medium text-neutral-content leading-tight sm:text-xl md:text-2xl lg:text-3xl">
          {item.title}
        </motion.h1>
        <motion.span
          initial="closed"
          animate={isActive ? "active" : "inactive"}
          variants={{
            active: {
              rotate: 180,
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            },
            inactive: {
              rotate: 0,
              transition: { duration: 0.5, ease: [0.32, 0, 0.655, 1] },
            },
          }}
          className="text-3xl lg:text-4xl    text-neutral-content"
        >
          <RxChevronDown />
        </motion.span>
      </motion.div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="text"
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden w-11/12 py-0 leading-snug md:w-10/12 pl-2 md:pl-5"
            variants={textVariants}
          >
            <motion.p className="text-sm italic  max-md:leading-tight opacity-70 sm:text-base font-light md:text-lg  text-neutral-content">
              {item.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PricingCollapse;
