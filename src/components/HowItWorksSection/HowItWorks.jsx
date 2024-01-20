import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Steps from './Steps';

const HowItWorks = () => {
  const [topic, setTopic] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen grid-rows-1 gap-8 px-6 lg:px-12 2xl:px-24">
      <motion.div
        layout
        className="flex flex-row w-full max-w-3xl gap-2 h-fit justify-evenly max-xl:text-center"
      >
        <span
          onClick={() => setTopic(0)}
          className="relative px-10 py-4 cursor-pointer"
        >
          <span
            className={
              'z-10 mx-auto relative text-center transition-all duration-300 text-neutral-content whitespace-nowrap text-xl xl:text-2xl font-semibold ' +
              (topic === 0 ? ' opacity-100' : ' opacity-50')
            }
          >
            MOD DE LUCRU
          </span>
          {topic === 0 && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-0 w-full h-full mx-auto bg-opacity-5 rounded-2xl bg-neutral-content"
              layoutId="background"
              transition={{ layout: { duration: 0.25, ease: 'easeIn' } }}
            />
          )}
        </span>

        <span
          onClick={() => setTopic(1)}
          className="relative px-10 py-4 cursor-pointer"
        >
          <span
            className={
              'z-10 mx-auto relative text-center transition-all duration-300 text-neutral-content whitespace-nowrap text-xl xl:text-2xl font-semibold  ' +
              (topic === 1 ? ' opacity-100' : ' opacity-50')
            }
          >
            CUM STABILIM PREȚURILE
          </span>
          {topic === 1 && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-0 w-full h-full mx-auto bg-opacity-5 rounded-2xl bg-neutral-content"
              layoutId="background"
              transition={{ layout: { duration: 0.25, ease: 'easeIn' } }}
            />
          )}
        </span>
      </motion.div>
      <div className="row-span-5">
        <Steps />
      </div>
    </div>
  );
};

export default HowItWorks;
