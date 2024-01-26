import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "/logo.png";
import { FadeIn, FromTop } from "./utils/animations";
import HumburgerButton from "./HumburgerButton";
import { useEffect, useState } from "react";

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

const Navbar = ({ hidden, scrollProgress }) => {
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
          "fixed top-0 left-0 right-0 z-50 flex justify-center mx-auto overflow-hidden border-neutral-content transition-all uppercase duration-200 "
        }
      >
        <div className="flex flex-row justify-between w-full px-6 py-3 border-b-2 md:hidden border-neutral-content backdrop-brightness-50 backdrop-blur-lg border-opacity-10">
          <Link to="/">
            <img src={logo} className="object-cover w-20 h-auto" alt="" />
          </Link>
          <div className="flex flex-col items-end w-8 gap-1.5 opacity-70 py-4">
            <div className="w-full h-[3px] bg-neutral-content rounded-full"></div>
            <div className="w-9/12 h-[3px] bg-neutral-content rounded-full"></div>
          </div>
        </div>

        <div className="flex-row items-center justify-between hidden w-full h-full gap-3 px-4 py-4 text-base font-thin transition duration-300 grow lg:px-12 md:flex">
          <FadeIn delay={1} duration={0.5}>
            <NavLink to="#">
              <span>
                <motion.img
                  variants={imgVariants}
                  animate={
                    hidden || scrollProgress > 100 ? "hidden" : "visible"
                  }
                  whileHover="hovering"
                  src={logo}
                  className="object-cover h-16 py-2 xl:h-20"
                  alt=""
                />
              </span>
            </NavLink>
          </FadeIn>
          {/* <AnimatePresence mode="sync"> */}
          <FromTop
            delay={0.3}
            duration={1.6}
            className={
              "flex flex-row py-0 overflow-hidden font-semibold tracking-wide border-2  w-fit h-fit text-base-300 group lg:text-base rounded-xl border-neutral-content " +
              (menuOpen && " bg-neutral-content")
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
                  <NavLink
                    to="#servicii"
                    className="flex items-center h-full px-5 transition duration-300 cursor-pointer text-nowrap xl:px-10 2xl:px-16 opacity-65 active:scale-90 hover:opacity-100"
                  >
                    Servicii
                  </NavLink>
                  <NavLink to="#mod-de-lucru">
                    <span className="flex items-center h-full px-5 transition duration-300 cursor-pointer text-nowrap xl:px-10 2xl:px-16 opacity-65 active:scale-90 hover:opacity-100">
                      Mod de lucru
                    </span>
                  </NavLink>
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
                />
              )}
            </AnimatePresence>
          </FromTop>
          {/* </AnimatePresence> */}
        </div>
      </motion.nav>
    </>
  );
};
export default Navbar;
