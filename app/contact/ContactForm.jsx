"use client";

import Form from "./Form";
import { useRef } from "react";
import { motion } from "framer-motion";
const ContactForm = () => {
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

export default ContactForm;
