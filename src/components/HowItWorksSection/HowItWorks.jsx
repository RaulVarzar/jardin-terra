import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';
import Steps from './Steps';

const HowItWorks = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['90%', '-50%']);

  return (
    <div
      ref={targetRef}
      className="flex flex-col items-center justify-center min-h-screen grid-rows-1 gap-8 px-6 lg:px-12 2xl:px-24"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <motion.h3
          style={{}}
          className="text-5xl font-semibold text-neutral-content"
        >
          MOD DE LUCRU
        </motion.h3>
        <div className="w-48 h-2.5 py-0 my-0 rounded-sm bg-primary" />
      </div>
      <div className="row-span-5">
        <Steps />
      </div>
    </div>
  );
};

export default HowItWorks;
