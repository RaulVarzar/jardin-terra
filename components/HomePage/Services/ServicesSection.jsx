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
import ProgressBar from "./ProgressBar";
import Header from "./Header";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ServicesSection = ({ colored }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end"],
  });
  const x = useTransform(scrollYProgress, [0, 0.1, 1], ["0%", "-5%", "-101%"]);

  const width = useTransform(scrollYProgress, [0.2, 1], ["0%", "100%"]);
  const [id, setId] = useState(null);

  return (
    <section>
      <div id={id} className="relative flex flex-row flex-nowrap w-fit ">
        <Header />

        <motion.div
          ref={sectionRef}
          className=" h-[400vh] mt-[550vh]" // mt = header heigth + 150
        />

        <motion.div
          style={{ x }}
          className="flex z-40 sticky -mt-[100vh] top-0 flex-row h-screen items-center justify-end gap-8  md:gap-12 xl:gap-20 pt-20 md:pt-28 pb-12"
        >
          {SERVICES.map((item) => (
            <Card
              className="h-48 bg-base-content w-80 cursor-pointer"
              setSelectedId={setId}
              item={item}
              layoutId={item.id}
              key={item.id}
            />
          ))}
        </motion.div>

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
