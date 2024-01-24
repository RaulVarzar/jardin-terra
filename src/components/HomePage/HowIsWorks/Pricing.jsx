import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLockBodyScroll } from '@uidotdev/usehooks';

const Pricing = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {/*  BUTTON */}
      <motion.div
        layoutId="toggle"
        layout
        onClick={() => setSelectedId('toggle')}
        className="flex flex-row items-center gap-6 px-8 py-3 mx-auto text-base font-light rounded-lg cursor-pointer negative-shadow text-neutral-content md:text-md xl:text-lg backdrop-brightness-135 border- border-neutral-content border-opacity-15 w-fit group hover:border-opacity-20 hover:backdrop-brightness-125"
      >
        <motion.h3 className="transition duration-300 opacity-50 grow group-hover:opacity-80">
          Cum stabilim costurile?
        </motion.h3>
        <motion.i className="opacity-50 fa-solid fa-angle-right group-hover:opacity-80"></motion.i>
      </motion.div>

      {/* CONTENT */}
      {selectedId && (
        <ModalCard selectedId={selectedId} setSelectedId={setSelectedId} />
      )}
    </>
  );
};

export default Pricing;

const ModalCard = ({ setSelectedId }) => {
  useLockBodyScroll();
  const [selected, setSelected] = useState(null);
  function handleSelect(id) {
    if (id === selected) {
      setSelected(null);
      return;
    }
    setSelected(id);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 grid px-2 sm:px-8 place-content-center backdrop-blur-xl backdrop-brightness-75 "
    >
      <motion.div
        className="z-50 flex flex-col max-w-5xl gap-8 p-4 pb-8 border- negative-shadow bg-base-200 border-neutral-content rounded-2xl border-opacity-15 w-fit h-fit"
        layoutId="toggle"
        layouts
      >
        <motion.button
          className="z-50 self-end bg-opacity-35 btn rounded-xl text-secondary-content bg-neutral hover:bg-accent btn- hover:text-black"
          onClick={() => setSelectedId(null)}
        >
          <i className="text-lg fa-solid fa-xmark"></i>
        </motion.button>
        <div className="flex flex-row items-start w-8/12 gap-4 pb-2 mx-auto md:pb-6">
          <i className="px-4 text-4xl xl:text-5xl fa-solid fa-comments-dollar"></i>
          <motion.h5 className="text-lg leading-snug tracking-wide text-left 2xl:text-xl text-neutral-content opacity-90">
            La Jardin Terra, fiecare proiect este unic și are o ofertă de preț
            personalizată. Costurile pentru proiectarea spațiilor verzi sunt
            stabilite în funcție de diferite elemente, precum:
          </motion.h5>
        </div>
        <div className="w-10/12 gap-2 mx-auto join join-vertical">
          <div
            className="border border-t-0 border-x-0 border-b-1 border-neutral-content border-opacity-15 collapse join-item "
            onClick={() => handleSelect(0)}
            checked={selected === 0}
          >
            <input type="radio" name="my-accordion" />
            <div
              className={
                'flex flex-row items-center justify-between gap-4 text-xl font-medium collapse-title text-neutral-content transition duration-300 ' +
                (selected !== 0 && ' opacity-50')
              }
            >
              <h3 className="text-xl font-normal grow xl:text-2xl ">
                Dimensiunea spațiului
              </h3>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="px-2 font-light opacity-75 md:px-6 xl:px-12 text-neutral-content xl:text-md collapse-content">
              <p className="py-3">
                Costurile proiectării unui spațiu verde sunt direct
                proporționale cu dimensiunea sa.
              </p>
            </div>
          </div>
          <div
            className="border border-t-0 border-x-0 border-b-1 border-neutral-content border-opacity-15 collapse join-item"
            onClick={() => handleSelect(1)}
            checked={selected === 1}
          >
            <input type="radio" name="my-accordion" />
            <div
              className={
                'flex flex-row items-center justify-between gap-4 text-xl font-medium collapse-title text-neutral-content transition duration-300 ' +
                (selected !== 1 && ' opacity-50')
              }
            >
              <h3 className="text-xl font-normal grow xl:text-2xl ">
                Complexitatea designului
              </h3>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="px-2 font-light opacity-75 md:px-6 xl:px-12 text-neutral-content xl:text-md collapse-content">
              <p className="py-3">
                Dacă proiectul implică elemente de design complexe, cum ar fi
                construcții de teren, aplicații de apă, scări sau alte elemente
                decorative, costurile vor fi diferite.
              </p>
            </div>
          </div>
          <div
            className="border border-none collapse join-item"
            onClick={() => handleSelect(2)}
            checked={selected === 2}
          >
            <input type="radio" name="my-accordion" />
            <div
              className={
                'flex flex-row items-center justify-between gap-4 text-xl font-medium collapse-title text-neutral-content transition duration-300 ' +
                (selected !== 2 && ' opacity-50')
              }
            >
              <h3 className="text-xl font-normal grow xl:text-2xl ">
                Materialele utilizate
              </h3>
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="px-2 font-light opacity-75 md:px-6 xl:px-12 text-neutral-content xl:text-md collapse-content">
              <p className="py-3">
                Costurile pentru materialele utilizate în proiectare pot varia
                considerabil în funcție de cantitatea, calitatea dar și
                disponibilitatea acestora pe piață. Pentru stabilirea costurilor
                etapelor de proiectare, este recomandat să cunoaștem și
                prețurile furnizorilor de servicii și materie primă, pentru a
                avea un buget total al activității de amenajare sau reamenajare
                a spațiului. De asemenea, este important să acordăm atenție
                costurilor ulterioare, precum întreținerea, pentru a asigura o
                planificare financiară adecvată.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
