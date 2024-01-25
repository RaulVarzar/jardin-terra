import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import PricingCollapse from './PricingCollapse';

const Pricing = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {/*  BUTTON */}
      <motion.div
        layoutId="toggle"
        layout
        onClick={() => setSelectedId('toggle')}
        className="flex flex-row items-center gap-6 px-8 py-3 mx-auto text-base font-light rounded-lg cursor-pointer bg-base-300 negative-shadow text-neutral-content md:text-md xl:text-lg backdrop-brightness-135 border- border-neutral-content border-opacity-15 w-fit group hover:border-opacity-20 hover:backdrop-brightness-125"
      >
        <motion.h3 className="transition duration-300 opacity-90 grow group-hover:opacity-80">
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
        className="z-50 flex flex-col max-w-5xl gap-8 p-4 pb-8 border-1 bg-base-200 border-neutral-content rounded-2xl border-opacity-10 w-fit h-fit"
        layoutId="toggle"
        layout
      >
        <motion.button
          className="z-50 self-end bg-opacity-40 btn rounded-xl text-secondary-content bg-neutral hover:bg-error hover:text-black"
          onClick={() => setSelectedId(null)}
        >
          <i className="text-lg fa-solid fa-xmark"></i>
        </motion.button>

        <div className="flex flex-row items-start w-11/12 gap-4 pb-2 mx-auto md:pb-6">
          <i className="p-4 text-4xl xl:text-5xl text-accent fa-solid fa-comments-dollar"></i>
          <div className="flex flex-col gap-6 px-4">
            <motion.h5 className="text-lg leading-snug tracking-wide text-left 2xl:text-xl text-neutral-content opacity-90">
              La Jardin Terra, fiecare proiect este unic și are o ofertă de preț
              personalizată. Costurile pentru proiectarea spațiilor verzi sunt
              stabilite în funcție de diferite elemente, precum:
            </motion.h5>
            <PricingCollapse />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
