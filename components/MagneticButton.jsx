"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";

const MagneticButton = ({ children, amount, magnify, className, ...props }) => {
  const ref = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // disable animations on mobile
  if (isMobile) {
    return <motion.div>{children}</motion.div>;
  }
  //////

  const offsets = amount || [2, 2];
  const xOffset = offsets[0];
  const yOffset = offsets[1];

  const handleMouse = (e) => {
    const { clientX, clientY } = e;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const moveX = clientX - (left + width / 2);

    const moveY = clientY - (top + height / 2);

    setPosition({ x: moveX / xOffset, y: moveY / yOffset });
  };

  const handleReset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      animate={{ x, y }}
      whileHover={{ scale: magnify || 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
