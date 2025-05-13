import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const ACCORDION = [
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

const Accordion = () => {
  const [active, setActive] = useState(undefined);

  const toggleActive = (index) => {
    if (index == active) {
      setActive(undefined);
    } else setActive(index);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-24 w-full  items-center lg:items-start py-12 md:py-16 xl:py-24  max-w-screen-3xl mx-auto">
      <div>
        <h1 className="inline text-2xl  2xl:text-5xl lg:pt-24 font-bold text-neutral-content text-center lg:text-right  max-w-4xl text-balance tracking-wide leading-tight uppercase">
          Există mai multe elemente cheie în proiectarea unui spațiu verde
        </h1>
        <div className="relative inline">
          <span className="absolute top-0 left-0 right-0 bottom-0 origin-center w-full h-14 bg-base-content -rotate-1 translate-x-1 -z-10 -translate-y-1/2"></span>
          <h1 className=" pl-2.5 inline text-2xl font-bold text-neutral-content 2xl:text-5xl tracking-wide leading-tight uppercase ">
            sustenabil
          </h1>
        </div>
        <h1 className="inline text-2xl font-bold text-neutral-content 2xl:text-5xl tracking-wide leading-tight uppercase">
          , inclusiv:
        </h1>
      </div>

      <ul className="w-full h-full flex flex-col gap-1  max-w-5xl">
        {ACCORDION.map((item, index) => (
          <AccordionItem
            item={item}
            key={index}
            toggleActive={toggleActive}
            isActive={active == index}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

const AccordionItem = ({ item, toggleActive, isActive, index }) => {
  const [isHovering, setHovering] = useState(false);
  return (
    <motion.li
      onClick={() => toggleActive(index)}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      className="flex relative font-semibol tracking-wide  "
    >
      {/* <motion.div
        initial={{ opacity: 0, top: 0, left: 0, right: 0, bottom: 0 }}
        animate={
          isHovering || isActive
            ? { opacity: 1, top: -6, left: -6, right: -6, bottom: -6 }
            : {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
                transition: { delay: 0.05, duration: 0.2 },
              }
        }
        transition={{ duration: 0.3, ease: [0.7, 0, 0.35, 1] }}
        className="rounded-xl absolute  border border-base-content -z-10 "
      /> */}

      <div className="flex flex-col items-center relative w-full bg-primary-conten  border-t border-neutral-content border-opacity-20 overflow-hidden text-neutral-content ">
        <Title isActive={isActive} title={item.title} />
        <motion.div
          initial={{ height: 0 }}
          animate={isActive ? { height: "auto" } : { height: 0 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.25, 1] }}
          className="bg-secondar  text-lg xl:text-xl"
        >
          <AnimatePresence>
            {isActive && <Content text={item.content} />}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.li>
  );
};

import { BsPlusLg } from "react-icons/bs";

export const Title = ({ isActive, title }) => {
  return (
    <div
      className={
        "flex flex-row gap-4 w-full items-center pl-3 pr-8 py-4 md:py-5 xl:py-6 z-10 cursor-pointer bg-accent-conten transition-opacity duration-300 " +
        (isActive ? " opacity-100" : " opacity-80")
      }
    >
      <span className="text-xl font-bol tracking-wide md:text-2xl xl:text-3xl grow uppercase leading-tight">
        {title}
      </span>
      <motion.span
        initial={{ rotate: 0 }}
        animate={isActive ? { rotate: 180 } : { rotate: 0 }}
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
    <motion.p
      initial={{ y: "20%", opacity: 0 }}
      animate={{
        y: "0%",
        opacity: 0.75,
        transition: {
          delay: 0.3,
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      exit={{
        y: "30%",
        opacity: 0,
        transition: {
          delay: 0,
          duration: 0.3,
          ease: [0.7, 0, 0.3, 1],
        },
      }}
      className="pt-2 pb-8 md:pb-12 xl:pb-16 px-12 opacity-80 leading-snug text-md md:text-lg 2xl:text-xl"
    >
      {text}
    </motion.p>
  );
};

export default Accordion;
