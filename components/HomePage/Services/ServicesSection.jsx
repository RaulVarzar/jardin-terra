"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";
import useWindowDimensions from "../../utils/useScreenDimensions";

import { SERVICES } from "../../utils/data";
import Card from "./Card";
import ExpandedCard from "./ExpandedCard";
import Header from "./Header";
import { TfiHandDrag } from "react-icons/tfi";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const draggableRef = useRef(null);

  const controls = useDragControls();
  const [width, setWidth] = useState(null);

  const { width: screenWidth } = useWindowDimensions();

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start", "end "],
  // });

  // const x = useTransform(scrollYProgress, [0.0, 1], ["0", "-100.5%"]);

  const [id, setId] = useState(null);

  const carouselInView = useInView(carouselRef, { margin: "1000% 0% -35% 0%" });
  const showSlider = useInView(sectionRef, { amount: 0.75 });
  const offset = useMotionValue(0);

  useEffect(() => {
    setWidth(draggableRef.current.offsetWidth - screenWidth);
    console.log(width, screenWidth);
  }, []);

  const scaleX = useTransform(offset, [0, -width], [0, 1]);

  return (
    <section>
      <div
        id={id}
        className="relative bottom-0 flex flex-col items-start gap-4 sm:gap-8 lg:gap-10 2xl:gap-12 "
      >
        <Header />

        <motion.div ref={carouselRef}>
          <motion.div
            ref={sectionRef}
            initial={{ y: "40%" }}
            animate={carouselInView ? { y: 0 } : { y: "40%" }}
            transition={{ duration: 1.3, ease: [0.7, 0, 0.4, 1] }}
            className="relative z-50 flex  justify-start w-[95vw] pt-16 md:pt-24 xl:pt-36 overflow-clip items-start carousel-container "
          >
            <motion.div
              drag="x"
              dragControls={controls}
              dragTransition={{ bounceDamping: 60, bounceStiffness: 300 }}
              dragConstraints={sectionRef}
              style={{ touchAction: "none", x: offset }}
              ref={draggableRef}
              className="gap-4 cursor-grab  active:cursor-grabbing sm:gap-8 md:gap-12 xl:gap-20 flex px-[2vw] xl:px-[5vw] 3xl:px-[7vw] flex-row max-md:min-h-screen md:h-[85vh] max-h-[960px] justify-stretch items-stretch"
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

        <div className="relative w-80 mx-auto h-3 rounded-2xl overflow-hidden border border-neutral">
          <motion.div
            style={{ scaleX }}
            className="absolute inset-0 border border-base-300 h-full rounded-full w-full   bg-neutral z-[9999] origin-left"
          ></motion.div>
        </div>

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
      </div>
      <AnimatePresence>
        {showSlider && (
          <motion.div>
            <DragSlider />
          </motion.div>
        )}
      </AnimatePresence>
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

export const DragSlider = () => {
  const variants = {
    hidden: { opacity: 0, filter: "blur(5px)", y: 10 },
    visible: { opacity: 0.4, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(5px)", y: 10 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.5, 0, 0.2, 1] }}
      className="flex fixed bottom-4 md:bottom-10  z-50  w-fit mx-auto inset-x-0 flex-row gap-2 items-center justify-center"
    >
      <span className="text-2xl font-light tracking-wider">drag</span>
      <span className="text-3xl">
        <TfiHandDrag />
      </span>
    </motion.div>
  );
};
