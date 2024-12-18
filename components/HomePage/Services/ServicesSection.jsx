import { useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { SERVICES } from "../../utils/data";
import Card from "./Card";
import ExpandedCard from "./ExpandedCard";
import Header from "./Header";
import { TextReveal } from "../../utils/animations";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  // const enterRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start ", "end "],
  });

  const x = useTransform(
    scrollYProgress,
    [0.0, 0.1, 0.98],
    ["0", "-5%", "-101%"]
  );

  const [id, setId] = useState(null);

  const { scrollYProgress: enterProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start"],
  });
  const y = useTransform(
    enterProgress,
    [0.1, 0.35, 1],
    ["20vh", "10vh", "0vh"]
  );

  return (
    <section>
      <div id={id} className="relative flex flex-col ">
        <Header />

        <motion.div style={{ y }}>
          <motion.div
            ref={sectionRef}
            className="h-[400vh] relative z-50 flex justify-start w-fit items-start"
          >
            <motion.div
              style={{ x }}
              className="gap-4 sm:gap-8 md:gap-12 xl:gap-20 pt-20 md:pt-28 pb-12 flex  sticky px-[2vw] xl:px-[5vw] 3xl:px-[7vw]   top-0 flex-row  h-screen items-center justify-end"
            >
              {SERVICES.map((item) => (
                <Card
                  setSelectedId={setId}
                  item={item}
                  layoutId={item.id}
                  key={item.id}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        {/* EXPANDED CARD AND OVERLAY */}
        <AnimatePresence>
          {id && (
            <motion.div
              className="fixed inset-0 w-screen top-0 left-0 h-screen z-[1000] flex sm:p-12 backdrop-blur-xl backdrop-brightness-75 lg:p-16 2xl:p-24"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ExpandedCard
                layoutId={id}
                setSelectedId={setId}
                item={SERVICES.find((service) => service.id === id)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/*----------*/}
      </div>
    </section>
  );
};

export default ServicesSection;

export const Expanded = ({ item, layoutId }) => {
  return (
    <motion.div layoutId={layoutId} className="h-96 w-96 bg-base-300">
      <motion.p>{item.id}</motion.p>
      <p>{item.title}</p>
      <img
        src={`/images/${item.photo}.jpg`}
        className="object-cover w-48 h-48 rounded-lg "
        alt="project-img"
      />
    </motion.div>
  );
};
