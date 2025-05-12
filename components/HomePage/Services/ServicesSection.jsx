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
import ExpandedCard from "./ExpandedCard/ExpandedCard";
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
  const showSlider = useInView(sectionRef, { amount: 0.75 });
  const offset = useMotionValue(0);

  // useEffect(() => {
  //   setWidth(draggableRef.current.offsetWidth - screenWidth);
  // }, []);

  // const x = useTransform(offset, [0, -width], ["0%", "100%"]);
  return (
    <section>
      <div
        id={id}
        className="relative bottom-0 flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 2xl:gap-8 "
      >
        <Header />

        <motion.div ref={carouselRef} className=" -mt-[40vh]">
          <motion.div
            ref={sectionRef}
            // initial={{ y: "0%" }}
            // animate={carouselInView ? { y: 0 } : { y: "0%" }}
            // transition={{ duration: 1.3, ease: [0.7, 0, 0.4, 1] }}
            className="relative z-50 flex justify-start w-[95vw] pt-16 md:pt-0 overflow-clip items-start fade-horizontal "
          >
            <motion.div
              drag="x"
              dragControls={controls}
              dragTransition={{ bounceDamping: 60, bounceStiffness: 300 }}
              dragConstraints={sectionRef}
              onDragEnd={() => {
                if (!hidden && offset.current < -700) {
                  setHidden(true);
                }
              }}
              style={{ touchAction: "none", x: offset }}
              ref={draggableRef}
              className="gap-4 cursor-grab justify-stretch items-stretch active:cursor-grabbing sm:gap-8 md:gap-10 xl:gap-12 flex px-[5vw] xl:px-[5vw] 3xl:px-[7vw] flex-row  max-md:min-h-[80vh] md:min-h-[75vh] 2xl:min-h-[70vh]"
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

        <AnimatePresence>
          {id && (
            <motion.div
              className="fixed flex justify-center inset-0 w-screen top-0 left-0 h-screen z-[1000]  p-4 sm:p-12 backdrop-blur-xl backdrop-brightness-75 lg:p-16 2xl:p-24"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ExpandedCardMobile
                layoutId={id}
                setSelectedId={setId}
                item={SERVICES.find((service) => service.id === id)}
              />
            </motion.div>
          )}
        </AnimatePresence>
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
