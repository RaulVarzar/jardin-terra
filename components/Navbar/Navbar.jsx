import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png";

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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={
          "fixed w-full flex flex-col h-fit  top-0 left-0 right-0 z-[999]  "
        }
      >
        <motion.div
          initial={{ y: "-100%" }}
          animate={
            menuOpen
              ? { y: 0 }
              : {
                  y: "-100%",
                  transition: {
                    delay: 0.2,
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }
          }
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute w-full h-full bg-base-300 "
        />

        <div className="flex flex-row  w-full items-center justify-between z-50  2xl:px-16 py-2 md:py-4  xl:py-6 xl:px-12 px-3 md:px-6 lg:px-10">
          <motion.a
            // animate={menuOpen ? { scale: 1.5 } : { scale: 1 }}
            href="/"
            className={
              " origin-top-left transition-all delay-300 duration-700 hover:opacity-100  ease-[cubic-bezier(0.76,0.0,0.25,1)]" +
              (menuOpen ? " h-16 md:h-24" : " h-12 md:h-16 opacity-75")
            }
          >
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "auto", height: "100%" }}
            />
          </motion.a>

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-end w-8 md:w-12 gap-2  py-4 cursor-pointer"
          >
            <span className="w-full h-1 bg-neutral-content rounded-full"></span>
            <span className="w-9/12 h-1 bg-neutral-content rounded-full"></span>
          </div>
        </div>
        <AnimatePresence mode="sync">
          {menuOpen && (
            <motion.div
              exit={{ opacity: 0, transition: { delay: 0.8 } }}
              className="z-50  w-full flex-col flex items-start uppercase  font-medium tracking-widest text-3xl gap-8 md:gap-12  md:text-4xl lg:text-5xl xl:text-6xl h-fit  py-4 md:pb-24 lg:px-36 "
            >
              <div className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: "100%",
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                    },
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="flex items-center h-full leading-none  cursor-pointer  opacity-95 active:scale-90 hover:opacity-100"
                >
                  Servicii
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: "100%",
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                    },
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="flex items-center h-full leading-none  cursor-pointer  opacity-95 active:scale-90 hover:opacity-100"
                >
                  Mod de lucru
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: "100%",
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                    },
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="flex items-center h-full leading-none  cursor-pointer  opacity-95 active:scale-90 hover:opacity-100"
                >
                  Sustenabilitate
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.8 } }}
            transition={{ duration: 0.7 }}
            className="h-full w-full backdrop-blur-md fixed backdrop-brightness-65 z-[998] top-0 left-0 inset-0"
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
