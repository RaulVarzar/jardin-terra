import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Socials from "./Hero/Socials";

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: "ref",
    offset: ["start end", "end"],
  });

  const opacity = useTransform(scrollYProgress, [0.99, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0.95, 1], [0.8, 1]);

  const y = useTransform(scrollYProgress, [0.8, 1], ["-150vh", "0vh"]);

  return (
    <div className="flex justify-center -z-10 sticky bottom-0 overflow-hidden py-36 text-neutral-content">
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="grid w-full md:grid-cols-2 max-w-8xl border-success"
      >
        <div className="flex flex-col items-center justify-start px-4 py-2">
          <motion.h3 className="text-5xl ">FOOTER</motion.h3>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 px-4 py-2 font-light opacity-90">
            <div className="flex flex-col items-center h-full gap-3 text-xl justify-evenly">
              <i className="fa-regular fa-envelope" />
              <i className="fa-solid fa-location-dot" />
              <i className="fa-solid fa-phone" />
            </div>
            <span className="flex flex-col items-start h-full gap-3 text-xl tracking-wide justify-evenly">
              <p> office@jardinterra.ro</p>
              <p>Cluj-Napoca, RO</p>
              <p>0737 837 383</p>
            </span>
          </div>
          <Socials />
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
