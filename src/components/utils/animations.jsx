import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({
  // orientation can be vertical or horizontal
  children,
  delay,
  duration,
  repeat,
  parentVisible,
  offset,
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
    <div ref={ref} className="relative overflow-hidden w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: (offset && `${offset}%`) || "100%" },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: duration || 0.4,
          delay: delay,
          ease: "easeInOut",
        }}
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
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

export const Blur = ({ children, delay, duration, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { filter: "blur(10px)" },
        visible: { filter: "blur(0px)" },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: duration || 0.4,
        delay: delay,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const WordReveal = ({ children, delay, duration, offset }) => {
  const wordArray = children.split(" ");
  return (
    <>
      {wordArray.map((word, i) => (
        <Reveal
          offset={offset || "30"}
          delay={delay + i * 0.2}
          duration={duration}
        >
          <span className="mx-0.5">{word}</span>
        </Reveal>
      ))}
    </>
  );
};
