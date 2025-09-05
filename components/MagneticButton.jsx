"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { isMobile } from "react-device-detect"; // or however you detect mobile

const MagneticButton = ({
  children,
  amount = [2, 2],
  magnify = 1.05,
  className,
  ...props
}) => {
  const ref = useRef(null);

  // raw values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // spring versions for smooth follow
  const x = useSpring(rawX, { stiffness: 120, damping: 12, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 120, damping: 12, mass: 0.2 });

  if (isMobile) {
    return <motion.div>{children}</motion.div>;
  }

  const [xOffset, yOffset] = amount;

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const moveX = clientX - (left + width / 2);
    const moveY = clientY - (top + height / 2);

    rawX.set(moveX / xOffset);
    rawY.set(moveY / yOffset);
  };

  const handleReset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      whileHover={{ scale: magnify }}
      transition={{
        type: "spring",
        stiffness: 105,
        damping: 20,
        mass: 0.15,
      }}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
