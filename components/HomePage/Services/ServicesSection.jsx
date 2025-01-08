import { useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
  useInView,
  useDragControls,
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
  const carouselRef = useRef(null);

  const controls = useDragControls();

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start", "end "],
  // });

  // const x = useTransform(scrollYProgress, [0.0, 1], ["0", "-100.5%"]);

  const [id, setId] = useState(null);

  const carouselInView = useInView(carouselRef, { margin: "1000% 0% -20% 0%" });

  return (
    <section>
      <div id={id} className="relative bottom-0 flex flex-col items-center ">
        <Header />

        <motion.div ref={carouselRef}>
          <motion.div
            ref={sectionRef}
            initial={{ y: "20%" }}
            animate={carouselInView ? { y: 0 } : { y: "20%" }}
            transition={{ duration: 1.3, ease: [0.2, 0.2, 0.4, 1] }}
            className="relative z-50 py-12 xl:py-20 flex justify-start w-screen items-start"
          >
            <motion.div
              drag="x"
              dragControls={controls}
              dragMomentum={0.1}
              dragElastic={0.6}
              dragTransition={{ bounceDamping: 60, bounceStiffness: 300 }}
              dragConstraints={sectionRef}
              // onDrag={(event, info) => {
              //   console.log(info, event);
              // }}
              className="gap-4 cursor-grab active:cursor-grabbing sm:gap-8 md:gap-12 xl:gap-20 pt-16 md:pt-20 pb-8 flex px-[2vw] xl:px-[5vw] 3xl:px-[7vw] flex-row  h-[90vh] xl:h-[85vh] items-center"
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
        <DragSlider />
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

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export const DragSlider = () => {
  return (
    <div className="flex flex-row gap-5 items-center justify-center opacity-40">
      <span className="text-3xl">
        <IoIosArrowRoundBack />
      </span>
      <span className="text-lg font-extralight">DRAG</span>
      <span className="text-3xl">
        <IoIosArrowRoundForward />
      </span>
    </div>
  );
};
