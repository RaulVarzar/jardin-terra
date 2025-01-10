"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate } from "framer-motion";
import { BrowserView, isMobile, MobileView } from "react-device-detect";

const ScrollBar = () => {
  if (isMobile) {
    return null;
  }

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

  const y = useMotionTemplate`${(scrollPosition / height).toFixed(3) * 372}px`;

  return (
    <div className="fixed top-0 right-0 h-screen w-10 z-[100]  flex items-center justify-center">
      <div className="h-[400px] w-4 py-12  relative bg-neutral rounded-full ">
        <motion.div
          style={{ y }}
          className="absolute h-6 w-3 left-0.5 top-0.5 bg-primary-content rounded-full origin-center -translate-y-[50%]"
        ></motion.div>
      </div>
    </div>
  );
};

export default ScrollBar;
