import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import logo from "/public/logo.png";
import Image from "next/image";

export const Logo = ({ menuOpen, closeMenu }) => {
  const lenisInstance = useLenis();

  const handleClick = (targetElement) => {
    if (targetElement) {
      const scrollToOptions = {
        offset: 0,
        lerp: 0.1,
        duration: 2,
        easing: (t) => {
          return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
        },
        immediate: false,
        lock: true,
        force: false,
      };
      lenisInstance.scrollTo(targetElement, scrollToOptions);
      if (menuOpen) {
        closeMenu();
      }
    }
  };

  return (
    <motion.button
      onClick={() => handleClick("#home")}
      className={
        " origin-top-left w-24 md:w-32 relative  transition-all delay-300 duration-700 h-10 md:h-16 hover:opacity-100  ease-[cubic-bezier(0.76,0.0,0.25,1)]" +
        (menuOpen ? " scale-125" : "  opacity-75")
      }
    >
      <Image
        src={logo}
        alt="Logo"
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
      />
    </motion.button>
  );
};

export default Logo;
