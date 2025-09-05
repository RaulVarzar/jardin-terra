import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ACCORDION_ITEMS = [
  {
    title: "Designul ecologic",
    content:
      "Se referă la proiectarea spațiilor verzi într-un mod care să utilizeze resursele naturale cât mai eficient și să minimizeze producerea de deșeuri.",
  },
  {
    title: "Gestionarea durabilă a apelor",
    content:
      "Utilizarea practicilor de gestionare a apei care reduc pierderea, îmbunătățesc calitatea apei și susțin biodiversitatea. Pentru a avea o grădină sustenabilă, folosim solul și apa în mod eficient, cu ajutorul unor tehnici precum irigarea prin picurare și mulcirea pentru reducerea evaporării apei.",
  },
  {
    title: "Utilizarea plantelor native",
    content:
      "Alegerea plantelor care se adaptează la clima și solul local poate reduce necesitatea de a folosi îngrășăminte și pesticide.",
  },
  {
    title: "Reciclarea și compostarea",
    content:
      "Reciclarea deșeurilor de grădină și compostarea acestora poate reduce cantitatea de deșeuri care ajung la groapa de gunoi și poate furniza îngrășăminte naturale pentru grădină.",
  },
  {
    title: "Tehnici ecologice de control al dăunătorilor",
    content:
      "Controlul dăunătorilor prin metode ecologice, precum atragerea de insecte benefice, poate reduce necesitatea utilizării de pesticide.",
  },
  {
    title:
      "Creșterea și cultivarea legumelor, fructelor și plantelor medicinale",
    content:
      "Acestea pot reduce necesitatea de a cumpără produse de la magazin și constituie o sursă de hrană și medicamente naturale",
  },
  {
    title: "Utilizarea energiei regenerabile",
    content:
      "Panourile solare sau energia eoliană, ca surse de energie regenerabilă, pot reduce necesitatea de a folosi energie electrică din surse neregenerabile.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.7, 0, 0.3, 1] },
  },
};

const Accordion = () => {
  const [activeItems, setActiveItems] = useState([]);
  const toggleActive = (index) => {
    setActiveItems(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // collapse if already open
          : [...prev, index] // expand if closed
    );
  };

  return (
    <div className="flex 2xl:max-w-screen-2xl  3xl:max-w-screen-3xl flex-col xl:flex-row gap-8 md:gap-10 xl:gap-12 w-full  items-center lg:items-start py-2 md:py-16 xl:py-24 mx-auto">
      <SectionTitle />

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full mt-[2vh] relative h-full flex flex-col max-w-7xl"
      >
        {ACCORDION_ITEMS.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isActive={activeItems.includes(index)}
            onClick={() => toggleActive(index)}
          />
        ))}
      </motion.ul>
    </div>
  );
};

const SectionTitle = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: "10%", filter: "blur(6px)" }}
      animate={visible && { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.7, 0, 0.35, 1] }}
      className="max-xl:px-1 text-pretty max-w-2xl xl:sticky top-[15vh] text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl"
    >
      <h1 className="inline  lg:pt-24 text-balance font-bold text-neutral-content text-center lg:text-right  max-w-4xl tracking-wide leading-tight uppercase">
        Există mai multe elemente cheie în proiectarea unui spațiu verde
      </h1>
      <div className="relative inline">
        <span className="absolute top-0 left-0 right-0 bottom-0 origin-center w-full h-10 lg:h-12 2xl:h-14 3xl:h-16 bg-base-content -rotate-1 translate-x-1 -z-10 -translate-y-1"></span>
        <h1 className=" pl-2.5 inline  font-bold text-neutral-content  tracking-wide leading-tight uppercase ">
          sustenabil
        </h1>
      </div>
      <h1 className="inline  font-bold text-neutral-content tracking-wide leading-tight uppercase">
        , inclusiv:
      </h1>
    </motion.div>
  );
};

const AccordionItem = ({ item, isActive, onClick }) => {
  return (
    <motion.li
      onClick={onClick}
      variants={itemVariants}
      className=" relative font-medium leading-snug tracking-wide group text-neutral-content"
    >
      <div
        className={`flex flex-col items-center transition-colors duration-300 relative w-full border-t border-neutral-content border-opacity-20 overflow-hidden ${
          isActive ? "bg-base-content/10" : ""
        }`}
      >
        <Title isActive={isActive} title={item.title} />
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="content"
              initial={{ height: 0 }}
              animate={isActive ? { height: "auto" } : { height: 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.7, 0, 0.25, 1] }}
            >
              <Content text={item.content} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

import { BsPlusLg } from "react-icons/bs";
import SplitLinesAnimation from "../../../utils/SplitLinesAnimation";

export const Title = ({ isActive, title }) => {
  return (
    <div
      className={
        "flex flex-row gap-4 w-full items-center pl-3 pr-4 group-hover:brightness-110 md:pr-8 md:pl-6 py-5 md:py-6 2xl:py-8  z-10 cursor-pointer  transition-all duration-500 " +
        (isActive ? " brightness-150 " : " brightness-75")
      }
    >
      <h2 className="text-lg text-balance font-medium sm:tracking-wide md:text-2xl xl:text-3xl grow uppercase leading-tight">
        {title}
      </h2>
      <motion.span
        initial={{ rotate: 0 }}
        animate={isActive ? { rotate: 135 } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.25, 1] }}
        className="text-2xl md:text-3xl xl:text-4xl"
      >
        <BsPlusLg />
      </motion.span>
    </div>
  );
};

export const Content = ({ text }) => {
  return (
    <div className="pt-2 pb-8 md:pb-10 xl:pb-12 px-4 md:pt-5 xl:pt-6 text-balance sm:px-8 md:px-12 opacity-80 leading-snug text-md md:text-lg lg:text-xl 2xl:text-2xl">
      <SplitLinesAnimation text={text} duration={0.7} stagger={0.1} />
    </div>
  );
};

export default Accordion;
