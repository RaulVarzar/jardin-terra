import { Outlet } from 'react-router';
import Navbar from './Navbar';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import ScrollToHashElement from './utils/ScrollToHashElement';

export default function Layout() {
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    setScrollProgress(latest);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className="relative min-h-screen bg-base-200">
      <Navbar hidden={hidden} scrollProgress={scrollProgress} />
      <ScrollToHashElement />
      <Outlet />
    </div>
  );
}
