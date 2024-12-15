import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import ToggleButton from "./ToggleButton";

import { FaFacebook, FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa6";

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
          className="absolute w-full h-full bg-accent-content "
        />

        <div className="flex flex-row w-full items-center 2xl:px-16 3xl:px-24  mx-auto justify-between z-50  py-2 md:py-3  xl:py-5 xl:px-12 px-4 md:px-6 lg:px-10">
          <motion.a
            href="/"
            className={
              " origin-top-left bg-red-90 transition-all delay-300 duration-700 h-10 md:h-16 hover:opacity-100  ease-[cubic-bezier(0.76,0.0,0.25,1)]" +
              (menuOpen ? " scale-125" : "  opacity-75")
            }
          >
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "auto", height: "100%" }}
            />
          </motion.a>

          <ToggleButton
            toggleMenu={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
          />
        </div>
        <div className="md:px-24 z-50 flex flex-col xl:px-36 2xl:px-44 gap-4 px-8 w-fit place-self-end pb-16 md:pb-20">
          <AnimatePresence mode="sync">
            {menuOpen && (
              <motion.div
                exit={{ opacity: 0, transition: { delay: 0.8 } }}
                className="  flex-col border-b border-base-content border-opacity-25 w-fit flex items-end uppercase text-neutral-content   font-medium tracking-wider text-3xl gap-6 md:gap-8  md:text-4xl lg:text-4xl  h-fit  py-4   "
              >
                <NavbarLink title="Serviciile noastre" id={0} />
                <NavbarLink title="Mod de lucru" id={1} />

                <NavbarLink title="Sustenabilitate" id={2} />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="sync">
            {menuOpen && (
              <motion.div
                exit={{ opacity: 0, transition: { delay: 0.8 } }}
                className=" w-full text-xl opacity-50 text-neutral-content flex flex-row items-center justify-end gap-4 md:gap-10 px-2"
              >
                <SocialLink title="facebook" id={0} />
                <SocialLink title="instagram" id={1} />
                <SocialLink title="tiktok" id={2} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setMenuOpen(!menuOpen)}
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

import React from "react";

export const SocialLink = ({ title, link, id }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: "30%", filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{
        opacity: 0,
        y: "30%",
        transition: {
          delay: 0.1 + id * 0.06,
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      transition={{
        delay: 0.5 + id * 0.15,
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {title}
    </motion.span>
  );
};

export const NavbarLink = ({ title, id, link }) => {
  return (
    <div className="overflow-hidden">
      <motion.span
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: "100%",
          transition: {
            delay: 0.3 - id * 0.1,
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
        transition={{
          delay: 0.3 + id * 0.06,
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="flex items-center h-full leading-none  cursor-pointer  opacity-95 active:scale-90 hover:opacity-100"
      >
        {title}
      </motion.span>
    </div>
  );
};
