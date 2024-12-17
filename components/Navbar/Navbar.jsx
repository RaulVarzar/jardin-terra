import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import ToggleButton from "./ToggleButton";

import { FaFacebook, FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa6";
import { NavbarLink } from "./NavLink";

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
          className="absolute w-full h-full bg-accent-content shadow-lg "
        />

        <div className="flex flex-row w-full items-center 2xl:px-16 3xl:px-24  mx-auto justify-between z-50  py-0 md:py-3  xl:py-5 xl:px-12 px-4 md:px-6 lg:px-10">
          <Logo menuOpen={menuOpen} />
          <ToggleButton
            toggleMenu={() => setMenuOpen(!menuOpen)}
            menuOpen={menuOpen}
          />
        </div>

        <AnimatePresence mode="sync">
          {menuOpen && (
            <motion.div
              exit={{ opacity: 0, transition: { delay: 0.8 } }}
              className="md:px-24 z-50 flex flex-col xl:px-36 2xl:px-44 gap-4 px-8 w-fit place-self-end pt-4 pb-16 md:pb-20"
            >
              <MainLinks />

              <Divider />
              <div className="w-full text-base sm:text-lg lg:text-xl opacity-60 text-neutral-content flex flex-row items-center justify-end gap-4 md:gap-10 px-2">
                <SocialLink title="facebook" id={0} />
                <SocialLink title="instagram" id={1} />
                <SocialLink title="tiktok" id={2} />
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

export const MainLinks = () => {
  const LINKS = [
    { title: "Serviciile noastre", id: 1, link: "#servicii" },
    { title: "Mod de lucru", id: 2, link: "#mod-de-lucru" },
    { title: "Sustenabilitate", id: 3, link: "#sustenabilitate" },
    { title: "Contact", id: 4, link: "#contact" },
  ];
  const [hovering, setHovering] = useState(null);
  return (
    <motion.div
      // onMouseEnter={() => setHovering(true)}
      // onMouseLeave={() => setHovering(false)}
      className="flex-col sm:w-fit flex items-end justify-end w-full uppercase font-medium tracking-wider h-fit  py-4   "
    >
      {LINKS.map((link) => (
        <NavbarLink
          hovering={hovering}
          setHovering={setHovering}
          content={link}
          key={link.id}
        />
      ))}
    </motion.div>
  );
};

export const Logo = ({ menuOpen }) => {
  return (
    <motion.a
      href="/"
      className={
        " origin-top-left bg-red-90 transition-all delay-300 duration-700 h-10 md:h-16 hover:opacity-100  ease-[cubic-bezier(0.76,0.0,0.25,1)]" +
        (menuOpen ? " scale-125" : "  opacity-75")
      }
    >
      <Image src={logo} alt="Logo" style={{ width: "auto", height: "100%" }} />
    </motion.a>
  );
};

export const SocialLink = ({ title, link, id }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: "30%", filter: "blur(5px)" }}
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
        delay: 0.8 + id * 0.15,
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {title}
    </motion.span>
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
      className="w-full h-0.5 bg-base-content opacity-10 origin-right"
    />
  );
};
