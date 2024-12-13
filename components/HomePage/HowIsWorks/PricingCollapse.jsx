import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

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
      "Costurile pentru materialele utilizate în proiectare pot varia considerabil în funcție de cantitatea, calitatea dar și disponibilitatea acestora pe piață. Pentru stabilirea costurilor etapelor de proiectare, este recomandat să cunoaștem și prețurile furnizorilor de servicii și materie primă, pentru a avea un buget total al activității de amenajare sau reamenajare a spațiului. De asemenea, este important să acordăm atenție costurilor ulterioare, precum întreținerea, pentru a asigura o planificare financiară adecvată.",
  },
];

const PricingCollapse = () => {
  const [selected, setSelected] = useState(null);
  function handleSelect(id) {
    if (id != selected) {
      setSelected(id);
    } else {
      setSelected(null);
    }
  }

  return (
    <motion.div
      layout
      className="w-full gap-2 mx-auto rounded-none  overflow-hidden"
    >
      {PRICING.map((category, i) => (
        <div
          key={category.title}
          className={
            " border-neutral-content overflow-hidden border-opacity-15" +
            (i < PRICING.length - 1 && " border-b-1")
          }
          onClick={() => handleSelect(i)}
        >
          <div
            className={
              "flex flex-row items-center cursor-pointer justify-between gap-4 text-xl max-sm:px-1 max-sm:py-1 font-medium collapse-title text-neutral-content transition duration-300 " +
              (selected !== i && " opacity-60")
            }
          >
            <motion.h3
              layout
              className="text-lg font-normal leading-tight sm:text-xl md:text-2xl grow "
            >
              {category.title}
            </motion.h3>
            <motion.span
              layout
              animate={selected === i ? { rotate: 135 } : { rotate: 0 }}
              transition={{ duration: 0.5, ease: [0.91, 0, 0.495, 0.95] }}
              className="text-xl sm:text-2xl lg:text-3xl "
            >
              <FiPlus />
            </motion.span>
          </div>
          {selected === i && <Content text={category.description} />}
        </div>
      ))}
    </motion.div>
  );
};

export default PricingCollapse;

export const Content = ({ text }) => {
  return (
    <motion.div
      layout
      className="px-2 font-light opacity-75 md:px-6 xl:px-12 text-neutral-content "
    >
      <p className="text-xs max-md:leading-tight sm:text-base md:text-lg  md:py-3">
        {text}
      </p>
    </motion.div>
  );
};
