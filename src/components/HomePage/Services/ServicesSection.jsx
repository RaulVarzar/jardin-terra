import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

import { SERVICES } from "../../utils/data";
import { Reveal } from "../../utils/animations";
import ProjectCard from "./ProjectCard";
import ExpandedProjectCard from "./ExpandedProjectCard";
import ProgressBar from "./ProgressBar";

const ServicesSection = ({ id, setServicesInView, colored }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const targetRef = useRef(null);
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      setIsVisible(false);
      setServicesInView(false);
      return;
    }
    setIsVisible(true);
    setServicesInView(true);
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0.2, 1], ["5%", "-100%"]);
  const reverseOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["65%", "0%"]
  );
  const scale = useTransform(scrollYProgress, [0.1, 0.2], ["100%", "70%"]);

  const width = useTransform(scrollYProgress, [0.2, 1], ["0%", "100%"]);

  const { scrollYProgress: scroll2 } = useScroll({
    target: sectionRef,
    offset: ["start start", "start end"],
  });

  const carouselOpacity = useTransform(scroll2, [0.1, 1], ["100%", "0%"]);
  const carouselScale = useTransform(scroll2, [0.1, 1], ["100%", "80%"]);
  const titleY = useTransform(scroll2, [0, 0.7], ["0%", "250%"]);

  return (
    <div ref={targetRef} id={id} className=" h-[400vh] relative">
      <div
        ref={sectionRef}
        className="sticky top-0 flex items-center w-full h-screen overflow-hidden"
      >
        <motion.div
          style={{
            opacity: reverseOpacity,
            scale,
            y: titleY,
          }}
          className="flex flex-col justify-start w-full gap-4 md:pl-48"
        >
          <Reveal offset="40" delay={0.2} duration={0.7}>
            <motion.h3
              ref={ref}
              className="text-5xl font-bold leading-none whitespace-nowrap xl:text-7xl text-neutral-content"
            >
              SERVICIILE NOASTRE
            </motion.h3>
          </Reveal>
          <Reveal offset="40" delay={0.5} duration={0.7}>
            <span className="text-md text-balance opacity-80 md:tracking-wide">
              De la grădini decorative, grădini de legume și fructe, spații
              verzi publice sau locuri de joacă pentru copii, la Jardin Terra
              îți stăm la dispoziție cu o gamă largă de opțiuni. Oferim servicii
              de planificare, proiectare și reabilitare spații verzi, indiferent
              de destinație sau suprafață.
            </span>
          </Reveal>
        </motion.div>
        <motion.div
          style={{ opacity: carouselOpacity, scale: carouselScale }}
          className="flex items-center h-4/5"
        >
          <motion.div style={{ x }} className="flex gap-8 h-full max-h-[800px]">
            {SERVICES.map((project) => (
              <ProjectCard
                colored={colored}
                project={project}
                key={project.title}
                isVisible={isVisible}
                setSelectedId={setSelectedId}
              />
            ))}
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {isVisible && <ProgressBar width={width} isVisible={isVisible} />}
        </AnimatePresence>
      </div>
      {/* DISPLAY EXPANDED CARD */}
      {selectedId && (
        <ExpandedProjectCard
          key={selectedId}
          setSelectedId={setSelectedId}
          project={SERVICES.find(
            (service) => service.title === selectedId.title
          )}
        />
      )}
    </div>
  );
};

export default ServicesSection;
