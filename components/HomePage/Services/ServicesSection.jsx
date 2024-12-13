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

const ServicesSection = ({ id, colored }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const targetRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-102%"]);

  const width = useTransform(scrollYProgress, [0.2, 1], ["0%", "100%"]);

  return (
    <section>
      <div id={id} className="relative flex flex-row flex-nowrap w-fit">
        <Header />

        <div
          ref={sectionRef}
          className={`z-40 flex flex-row items-start h-[400vh] mt-[550vh]`} // mt = header heigth + 150
        >
          <motion.div
            style={{ x }}
            className="flex sticky -mt-[100vh] top-0 flex-row h-screen gap-8 translate-x-full md:gap-12 xl:gap-20  py-20"
          >
            {SERVICES.map((item) => (
              <Card
                colored={colored}
                item={item}
                key={item.title}
                setSelectedId={setSelectedId}
              />
            ))}
          </motion.div>
          <AnimatePresence>
            {isVisible && <ProgressBar width={width} isVisible={isVisible} />}
          </AnimatePresence>
        </div>

        {/* DISPLAY EXPANDED CARD */}
        {selectedId && (
          <ExpandedCard
            key={selectedId}
            setSelectedId={setSelectedId}
            item={SERVICES.find(
              (service) => service.title === selectedId.title
            )}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
