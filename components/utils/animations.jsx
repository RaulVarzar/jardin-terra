"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({
  children,
  delay,
  duration,
  rotate,
  skew,
  exitDuration,
  exitDelay,
  offset,
}) => {
  const ref = useRef(null);

  const variants = {
    hidden: {
      filter: "blur(3px)",
      rotate: rotate || 0,
      opacity: 1,
      skew: skew || 0,
      y: (offset && `${offset}%`) || "100%",
    },
    visible: {
      skew: 0,
      rotate: 0,
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: duration || 0.4,
        delay: delay,
        ease: [0.75, 0, 0.25, 1],
      },
    },
    exit: {
      filter: "blur(3px)",
      rotate: rotate || 0,
      opacity: 1,
      skew: skew || 0,
      y: (offset && `${offset}%`) || "100%",
      transition: {
        duration: exitDuration || 0.4,
        delay: exitDelay || 0,
        ease: [0.75, 0, 0.25, 1],
      },
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden ">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
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
      mainControls.start("visible");
    } else if (!parentInView) {
      mainControls.start("hidden");
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
      transition={{
        duration: duration || 0.3,
        delay: delay || 0,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FromBottom = ({
  children,
  delay,
  duration,
  repeat,
  parentVisible,
  offset,
  ...props
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: !repeat || false });
  const parentInView = parentVisible || isInView;

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && parentInView) {
      mainControls.start("visible");
    } else if (!parentInView) {
      mainControls.start("hidden");
    }
  }, [isInView, parentVisible]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: `${offset}%` || "100%" },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: duration || 0.3,
        delay: delay || 0,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FromTop = ({ children, delay, duration, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: "-200%" },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: duration || 0.3,
        delay: delay || 0,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FromRight = ({
  // cea mai buna versiune
  children,
  delay,
  duration,
  repeat,
  parentVisible,
  offset,
  ...props
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: !repeat || false });
  const parentInView = parentVisible || isInView;

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView && parentInView) {
      mainControls.start("visible");
    } else if (!parentInView) {
      mainControls.start("hidden");
    }
  }, [isInView, parentVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: `${offset}%` || "50%" },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: duration || 0.3,
        delay: delay || 0,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.4,
  repeat = false,
  offset = 100,
  threshold = 0.15,
  className = "",
  ...props
}) => {
  const ref = useRef(null);
  const rootMargin = `0px 0px -${threshold * 100}% 0px`;
  const isInView = useInView(ref, { once: !repeat, margin: rootMargin });

  return (
    <motion.div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: `${offset}%` },
          visible: { opacity: 1, y: "0" },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.5, 0, 0.2, 1],
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const Blur = ({ children, delay, duration, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { filter: "blur(8px)" },
        visible: { filter: "blur(0px)" },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: duration || 0.4,
        delay: delay,
        ease: [0.76, 0, 0.24, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const WordReveal = ({
  children,
  delay = 0,
  duration = 1,
  offset = 130,
  staggerDelay = 0.1,
  once = true,
}) => {
  const wordArray = children.split(" ");

  const variants = {
    hidden: {
      filter: "blur(2px)",
      rotate: 5,
      opacity: 0,
      skew: -10,
      y: "100%",
    },
    visible: (custom) => ({
      skew: 0,
      rotate: 0,
      filter: "blur(0px)",
      opacity: 1,
      y: "0%",
      transition: {
        duration: duration,
        delay: delay + custom * staggerDelay,
        ease: [0.33, 0.0, 0.01, 1.0],
      },
    }),
  };

  return (
    <>
      {wordArray.map((word, i) => (
        <motion.div key={i} className=" relative">
          <motion.span
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            custom={i}
            className="mx-0.5 tracking-wide"
          >
            {word}
          </motion.span>
        </motion.div>
      ))}
    </>
  );
};

export const TextReveal = ({
  duration = 1,
  delay = 0,
  children,
  threshold,
}) => {
  const ref = useRef(null);
  const marginBottom = threshold || 10;
  const isInView = useInView(ref, { margin: `1000% 0% -${marginBottom}% 0%` });

  return (
    <motion.div ref={ref} className="overflow-hidden ">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={
          isInView && {
            y: 0,
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: [0.65, 0, 0.3, 1],
            },
          }
          // : {
          //     y: "110%",
          //     opacity: 0,
          //     transition: {
          //       duration: duration * 0.8,
          //       delay: 0,
          //       ease: [0.65, 0, 0.3, 1],
          //     },
          //   }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const TextFadeIn = ({
  duration = 1,
  delay = 0,
  threshold,
  children,
}) => {
  const ref = useRef(null);
  const marginBottom = threshold || 10;

  const isInView = useInView(ref, { margin: `1000% 0% -${marginBottom}% 0%` });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ y: "10px", opacity: 0, filter: "blur(2px)" }}
        animate={
          isInView && {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration,
              delay,
              ease: [0.75, 0, 0.25, 1],
            },
          }
          // : {
          //     y: "10px",
          //     opacity: 0,
          //     filter: "blur(2px)",
          //     transition: {
          //       delay: 0,
          //       duration: duration * 0.8,
          //       ease: [0.75, 0, 0.25, 1],
          //     },
          //   }
        }
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ScaleIn = ({ duration = 1, delay = 0.3, children }) => {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.65, 0, 0.3, 1],
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
