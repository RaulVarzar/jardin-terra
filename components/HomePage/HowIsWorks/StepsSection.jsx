"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "./Header/Header";

import Content from "./Content/Content";

const Sustainability = () => {
  const sectionRef = useRef(null);

  const showHeader = useInView(sectionRef, { margin: "1000% 0% -70% 0%" });

  return (
    // remove the section to make sticky
    <section id="mod-de-lucru" className="relative">
      <motion.div ref={sectionRef} className="z-[10] w-full flex flex-col ">
        <Header visible={showHeader} />
        <Content />
      </motion.div>
    </section>
  );
};

export default Sustainability;
