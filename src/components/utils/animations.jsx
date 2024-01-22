import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const Reveal = ({
  children,
  delay,
  duration,
  repeat,
  parentVisible,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: !repeat || false });
  const parentInView = parentVisible || isInView;

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && parentInView) {
      mainControls.start('visible');
    } else if (!parentInView) {
      mainControls.start('hidden');
    }
  }, [isInView, parentVisible]);

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
    </div>
  );
};

export const FromLeft = ({
  children,
  delay,
  duration,
  repeat,
  parentVisible,
  ...props
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: !repeat || false });
  const parentInView = parentVisible || isInView;

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && parentInView) {
      mainControls.start('visible');
    } else if (!parentInView) {
      mainControls.start('hidden');
    }
  }, [isInView, parentVisible]);

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
        hidden: { opacity: 0, y: 30 },
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

export const FromRight = ({
  children,
  delay,
  duration,
  repeat,
  parentVisible,
  ...props
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: !repeat || false });
  const parentInView = parentVisible || isInView;

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && parentInView) {
      mainControls.start('visible');
    } else if (!parentInView) {
      mainControls.start('hidden');
    }
  }, [isInView, parentVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: '100%' },
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

export const Blur = ({ children, delay, duration, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { filter: 'blur(10px)' },
        visible: { filter: 'blur(0px)' },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: duration || 0.4,
        delay: delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
