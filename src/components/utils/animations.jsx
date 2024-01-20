import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const Reveal = ({ children, delay, duration }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const sliderControle = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      sliderControle.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative overflow-hidden w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration || 0.4, delay: delay }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={sliderControle}
        transition={{ duration: 0.8, ease: 'easeIn', delay: delay }}
        className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-primary"
      /> */}
    </div>
  );
};

export const FromLeft = ({ children, delay, duration, repeat, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !repeat });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -25 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duration || 0.3, delay: delay || 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FromBottom = ({ children, delay, duration, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: duration || 0.3, delay: delay || 0 }}
      {...props}
      className="flex items-stretch justify-stretch"
    >
      {children}
    </motion.div>
  );
};

export const FromRight = ({ children, delay, duration, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: duration || 0.3, delay: delay || 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay, duration, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: duration || 0.3, delay: delay || 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
