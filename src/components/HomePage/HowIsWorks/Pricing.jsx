import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import PricingCollapse from './PricingCollapse';
import CloseButton from '../../CloseButton';

const Pricing = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {/*  BUTTON */}
      <motion.div
        layoutId="toggle"
        layout
        onClick={() => setSelectedId('toggle')}
        className="flex flex-row items-center gap-6 px-8 py-3 mx-auto text-base font-light rounded-lg cursor-pointer backdrop-brightness-125 text-neutral-content md:text-md xl:text-lg w-fit group hover:border-opacity-20 hover:backdrop-brightness-150"
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
      className="fixed top-0 bottom-0 left-0 right-0 z-50 grid max-h-screen px-2 overflow-y-auto sm:px-8 place-content-center backdrop-blur-xl backdrop-brightness-75 "
    >
      <motion.div
        className="relative z-50 flex flex-col max-w-5xl gap-8 px-2 pt-8 pb-8 md:pt-20 md:px-6 border-1 bg-base-200 border-neutral-content rounded-2xl border-opacity-10 w-fit h-fit"
        layoutId="toggle"
        layout
      >
        <CloseButton action={() => setSelectedId(null)} />

        <div className="flex flex-col items-center w-full gap-4 pb-2 mx-auto md:w-11/12 md:items-start md:flex-row md:pb-6">
          <i className="p-4 text-5xl md:text-5xl text-accent fa-solid fa-comments-dollar"></i>
          <div className="flex flex-col gap-6 px-4">
            <motion.h5 className="text-base leading-none tracking-wide text-left text-pretty md:leading-snug md:text-md lg:text-lg 2xl:text-xl text-neutral-content opacity-90">
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
