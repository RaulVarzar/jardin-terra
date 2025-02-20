"use client";
import Form from "./Form";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import ContactDetails from "./ContactDetails";
import { FadeIn, FromBottom } from "../../components/utils/animations";
import Link from "next/link";
import { RiHome5Line } from "react-icons/ri";
import MagneticButton from "../../components/MagneticButton";

const Contact = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setScrollProgress(latest);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className="relative flex flex-col min-h-screen bg-base-300 lg:flex-row">
      <Link href="/">
        <MagneticButton
          variants={{
            visible: { x: 0, opacity: "80%" },
            hidden: {
              opacity: "50%",
              x: -100,
              transition: { duration: 0.5, type: "spring" },
            },
          }}
          animate={hidden ? "hidden" : "visible"}
          whileHover={{ scale: 1.05, opacity: "100%" }}
          className="fixed grid p-3 xl:p-4 rounded-full place-content-center text-2xl sm:text-3xl xl:text-4xl z-50 bg-primary-content text-neutral-content top-4 left-4 sm:top-10 sm:left-10"
        >
          <RiHome5Line />
        </MagneticButton>
      </Link>
      <div className="flex items-center sticky top-0 h-fit lg:w-1/3 w-full justify-center min-w-fit lg:h-screen lg:justify-center lg:pl-20 2xl:pl-24 3xl:px-36 max-lg:min-h-[50vh] grow text-neutral-content">
        <ContactDetails />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;

export const ContactForm = () => {
  const container = useRef(null);

  return (
    <motion.div
      ref={container}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, delay: 1.5, ease: [0.65, 0, 0.35, 1] }}
      className="flex flex-col origin-right relative overflow-clip bg-secondary items-start justify-center  text-4xl py-12 lg:w-2/3  max-lg:rounded-t-2xl lg:rounded-l-4xl text-neutral-content"
    >
      <div className="flex flex-col gap-4  mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3, ease: [0.75, 0, 0.35, 1] }}
          className="max-w-4xl text-lg sm:text-xl xl:text-3xl 3xl:text-4xl leading-tight font-semibold "
        >
          Completează formularul ca să avem un punct de pornire. Acesta poate fi
          începutul unei prietenii frumoase.
        </motion.h3>

        <Form container={container} />
      </div>
    </motion.div>
  );
};
