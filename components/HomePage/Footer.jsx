"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Socials from "./Hero/Socials";
import logo from "/public/logo.png";
import Image from "next/image";

const Footer = () => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0.95, 1], [0.8, 1]);

  const y = useTransform(scrollYProgress, [0, 1], ["-25vh", "0vh"]);

  return (
    <div
      ref={footerRef}
      className="flex justify-center -z-10 stick bottom-0 overflow-hidden py-36 text-neutral-content"
    >
      <motion.div
        style={{ y, opacity }}
        className="grid w-fit md:grid-cols-2 max-w-8xl border-success lg:gap-x-12 2xl:gap-x-24"
      >
        <div className="flex flex-col relative items-center justify-center px-4 py-2 max-w-60 mx-auto">
          <Image
            src={logo}
            alt="Logo"
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 15vw, 10vw"
          />
        </div>
        <div className="flex flex-col gap-2  items-center">
          <div className="flex flex-row gap-4 px-4 py-2 font-light opacity-90  w-fit">
            <div className="flex flex-col items-center h-full gap-3 text-xl justify-evenly">
              <i className="fa-regular fa-envelope" />
              <i className="fa-solid fa-location-dot" />
              <i className="fa-solid fa-phone" />
            </div>
            <span className="flex flex-col items-center md:items-start h-full gap-3 text-xl tracking-wide justify-evenly">
              <p> office@jardinterra.ro</p>
              <p>Cluj-Napoca, RO</p>
              <p>0737 837 383</p>
            </span>
          </div>
          {/* <Socials /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
