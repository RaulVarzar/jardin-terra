import { AnimatePresence, motion } from "framer-motion";
import { FadeIn, FromTop } from "./utils/animations";
import HumburgerButton from "./HumburgerButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";

const imgVariants = {
  visible: {
    opacity: "100%",
    scale: 1,
    x: 40,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  hidden: {
    opacity: "30%",
    scale: 0.8,
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  hovering: { opacity: "100%", scale: 0.8 },
};

const menuVariants = {
  hidden: {
    x: "150%",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const Navbar = ({ hidden, scrollProgress, color }) => {
  const [menuOpen, setMenuOpen] = useState(!hidden);

  useEffect(() => {
    if (hidden) {
      setMenuOpen(false);
      return;
    }
    setMenuOpen(true);
  }, [hidden]);

  return (
    <>
      <motion.nav
        className={
          "fixed w-full h-fit py-2 top-0 left-0 right-0 z-50 flex flex-row px-3 md:px-6 lg:px-10 md:py-4 xl:py-6 xl:px-12 2xl:px-16 justify-between items-center mx-auto overflow-hidden border-neutral-content transition-all uppercase duration-200 "
        }
      >
        <a href="/" className=" h-10 sm:h-16 w- z-50">
          <Image
            src={logo}
            alt="Logo"
            style={{ width: "auto", height: "100%" }}
          />
        </a>

        <div className="flex flex-col items-end w-8 md:w-12 gap-2  py-4">
          <div className="w-full h-1 bg-neutral-content rounded-full"></div>
          <div className="w-9/12 h-1 bg-neutral-content rounded-full"></div>
        </div>

        {/* <div className="flex-row items-center justify-between hidden w-full h-full gap-3 px-4 py-4 text-base font-thin transition duration-300 grow lg:px-12 md:flex">
          <FadeIn delay={1} duration={0.5}>
            <a href="#">
              <span>
                <motion.img
                  variants={imgVariants}
                  animate={
                    hidden || scrollProgress > 100 ? "hidden" : "visible"
                  }
                  whileHover="hovering"
                  // src={logo}
                  className="object-cover h-16 py-2 xl:h-20"
                  alt=""
                />
              </span>
            </a>
          </FadeIn>
         
          <FromTop
            delay={0.3}
            duration={1.6}
            className={
              "flex flex-row py-0 overflow-hidden font-semibold tracking-wide border-2 w-fit h-fit group lg:text-base rounded-xl " +
              (menuOpen && !color
                ? " border-accent bg-accent"
                : " border-neutral-content hover:bg-neutral-content") +
              (color && menuOpen
                ? " bg-neutral-content text-base-200"
                : " text-neutral-content ")
            }
          >
            <AnimatePresence mode="sync">
              {menuOpen && (
                <motion.div
                  key={menuOpen}
                  layout
                  variants={menuVariants}
                  animate={!menuOpen ? "hidden" : "visible"}
                  className="flex flex-row py-4 "
                >
                  <a
                    href="#servicii"
                    className="flex items-center h-full px-5 transition duration-300 cursor-pointer text-nowrap xl:px-10 2xl:px-16 opacity-65 active:scale-90 hover:opacity-100"
                  >
                    Servicii
                  </a>
                  <a href="#mod-de-lucru">
                    <span className="flex items-center h-full px-5 transition duration-300 cursor-pointer text-nowrap xl:px-10 2xl:px-16 opacity-65 active:scale-90 hover:opacity-100">
                      Mod de lucru
                    </span>
                  </a>
                  <span className="flex items-center h-full px-5 transition duration-300 cursor-pointer xl:px-10 2xl:px-16 opacity-65 active:scale-90 hover:opacity-100">
                    Sustenabilitate
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode="sync">
              {scrollProgress > 100 && (
                <HumburgerButton
                  key={hidden}
                  handleClick={() => setMenuOpen(!menuOpen)}
                  checked={menuOpen}
                  scrollProgress={scrollProgress}
                  color={color}
                />
              )}
            </AnimatePresence>
          </FromTop>
         
        </div> */}
      </motion.nav>
    </>
  );
};
export default Navbar;
