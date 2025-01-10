"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

import { NavbarLink } from "./NavLink";
import MagneticButton from "../MagneticButton";

import Logo from "./Logo";

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
                    delay: 0.1,
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }
          }
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute w-full h-full transition-colors duration-500  bg-secondary-content"
        />

        <div className="flex flex-row w-full items-center  max-w-screen-3xl  mx-auto justify-between z-50  py-0 md:py-3  xl:py-5  px-4 md:px-6 lg:px-10 ">
          <Logo menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
          <ToggleButton
            toggleMenu={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
          />
        </div>

        <AnimatePresence mode="sync">
          {menuOpen && (
            <motion.div className="w-full  max-w-screen-3xl  place-self-center">
              <motion.div
                exit={{ opacity: 0, transition: { delay: 0.8 } }}
                className="z-50 flex flex-col gap-4  w-fit  place-self-end  pb-12 md:pb-16 xl:pb-20 px-4 md:px-6 lg:px-10 "
              >
                <MainLinks closeNavbar={() => setMenuOpen(!menuOpen)} />

                <Divider />
                <div className="w-full text-base font-extralight tracking-wider sm:text-lg lg:text-xl text-neutral-content flex flex-row items-center justify-end gap-4 md:gap-10 px-2">
                  <SocialLink
                    title="facebook"
                    id={0}
                    link={"https://facebook.com"}
                  />
                  <SocialLink
                    title="instagram"
                    id={1}
                    link={"https://instagram.com"}
                  />
                  <SocialLink
                    title="tiktok"
                    id={2}
                    link={"https://tiktok.com"}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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

export const MainLinks = ({ closeNavbar }) => {
  const LINKS = [
    { title: "Serviciile noastre", id: 1, link: "#servicii" },
    { title: "Mod de lucru", id: 2, link: "#mod-de-lucru" },
    { title: "Sustenabilitate", id: 3, link: "#sustenabilitate" },
    { title: "Contact", id: 4, link: "#contact" },
  ];

  const [hovering, setHovering] = useState(null);

  return (
    <motion.div className="flex-col flex items-end justify-end w-full uppercase font-medium tracking-wider h-fit  py-4   ">
      {LINKS.map((link) => (
        <NavbarLink
          closeNavbar={closeNavbar}
          hovering={hovering}
          setHovering={setHovering}
          content={link}
          key={link.id}
        />
      ))}
    </motion.div>
  );
};

export const SocialLink = ({ title, link, id }) => {
  return (
    <MagneticButton amount={[5, 1.5]}>
      <motion.a
        initial={{ opacity: 0, y: "30%", filter: "blur(5px)" }}
        animate={{ opacity: 0.7, y: 0, filter: "blur(0px)" }}
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
          delay: 0.8 + id * 0.15,
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        href={link}
        target="_blank"
      >
        {title}
      </motion.a>
    </MagneticButton>
  );
};

export const Divider = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{
        scaleX: 0,
        transition: {
          delay: 0.1,
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      transition={{
        delay: 0.6,
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="w-full h-0.5 bg-base-content opacity-40 origin-right"
    />
  );
};
