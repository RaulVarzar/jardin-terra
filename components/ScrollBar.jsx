"use client";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { motion, useMotionTemplate } from "framer-motion";

const ScrollBar = () => {
  //   const lenisInstance = useLenis();

  //   useEffect(() => {
  //     if (lenisInstance.progress) {
  //       const height = useMotionTemplate`${lenisInstance.progress * 100}%`;
  //     }
  //   }, [lenisInstance.progress]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setHeight(document.documentElement.offsetHeight - window.innerHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const y = useMotionTemplate`${(scrollPosition / height).toFixed(3) * 400}px`;

  return (
    <div className="fixed top-0 right-0 h-screen w-10 z-[100]  flex items-center justify-center">
      <div className="h-[400px] w-2 relative bg-neutral rounded-full ">
        <motion.div
          style={{ y }}
          className="absolute h-8 w-3 -left-0.5 top-0 bg-primary-content rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default ScrollBar;
