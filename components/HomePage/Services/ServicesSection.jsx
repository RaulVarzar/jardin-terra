"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import useWindowDimensions from "../../utils/useScreenDimensions";

import { SERVICES } from "../../utils/data";
import Card from "./Card";
import ExpandedCardMobile from "./ExpandedCard/ExpandedCardMobile";

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

  const [hidden, setHidden] = useState(false);

  const [width, setWidth] = useState(null);

  const { width: screenWidth } = useWindowDimensions();

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start", "end "],
  // });

  // const x = useTransform(scrollYProgress, [0.0, 1], ["0", "-100.5%"]);

  const [id, setId] = useState(null);

  // const carouselInView = useInView(carouselRef, { margin: "1000% 0% -35% 0%" });
  const showSlider = useInView(carouselRef, { amount: 0.85 });
  const offset = useMotionValue(0);

  // useEffect(() => {
  //   setWidth(draggableRef.current.offsetWidth - screenWidth);
  // }, []);

  // const x = useTransform(offset, [0, -width], ["0%", "100%"]);
  return (
    <section id="servicii">
      <div className="relative flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 ">
        <Header />

        <motion.div ref={carouselRef} className=" -mt-[60vh] w-full pt-[15vh]">
          <CarouselSharedOverlay />
        </motion.div>
      </div>
      <AnimatePresence>
        {showSlider && !hidden && (
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
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import SharedLayoutTransition from "../../utils/Shared LayoutTransition";
import CarouselSharedOverlay from "./CarouselSharedOverlay";

export const DragSlider = () => {
  const variants = {
    hidden: { opacity: 0, filter: "blur(5px)", y: 10 },
    visible: { opacity: 0.6, filter: "blur(0px)", y: 0 },
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
      {/* <span className="text-2xl font-light tracking-wider">drag</span> */}
      <span className="text-2xl xl:text-3xl">
        <IoMdArrowBack />
      </span>
      <span className="text-3xl xl:text-4xl">
        <TfiHandDrag />
      </span>
      <span className="text-2xl xl:text-3xl">
        <IoMdArrowForward />
      </span>
    </motion.div>
  );
};
