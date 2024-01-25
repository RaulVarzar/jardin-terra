import { forwardRef, useEffect, useRef, useState } from 'react';
import {
  useScroll,
  motion,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion';

import { SERVICES } from '../../utils/data';
import { Reveal } from '../../utils/animations';
import ProjectCard from './ProjectCard';
import ExpandedProjectCard from './ExpandedProjectCard';
import ProgressBar from './ProgressBar';

const HorizontalScrollCarousel = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const targetRef = useRef(null);
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['15%', '-85%']);
  const reverseOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.1],
    ['65%', '0%']
  );
  const opacity = useTransform(scrollYProgress, [0, 1], ['8%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 0.15], ['100%', '70%']);

  const width = useTransform(scrollYProgress, [0.15, 1], ['0%', '100%']);

  const { scrollYProgress: scroll2 } = useScroll({
    target: sectionRef,
    offset: ['start start', 'start end'],
  });

  const carouselX = useTransform(scrollYProgress, [0, 0.06], ['0px', '-150px']);
  const carouselOpacity = useTransform(scroll2, [0.1, 1], ['100%', '0%']);
  const carouselScale = useTransform(scroll2, [0.1, 1], ['100%', '80%']);
  const titleY = useTransform(scroll2, [0, 0.7], ['0%', '200%']);

  return (
    <div ref={targetRef} id={id} className=" h-[450vh] relative">
      <div
        ref={sectionRef}
        className="sticky top-0 flex items-center w-full h-screen overflow-hidden bg-opacity-0 bg-base-100"
      >
        <motion.h3
          style={{
            opacity: reverseOpacity,
            scale,
            x: carouselX,
            y: titleY,
          }}
          ref={ref}
          className="absolute inset-x-0 left-0 right-0 ml-12 text-5xl font-bold leading-none xl:ml-24 w-fit xl:text-7xl text-neutral-content"
        >
          <Reveal delay={0.2}>SERVICIILE NOASTRE</Reveal>
        </motion.h3>

        <motion.div
          style={{
            x: carouselX,
            opacity: carouselOpacity,
            scale: carouselScale,
          }}
          className="flex items-center h-4/5"
        >
          <motion.div
            style={{ x }}
            className="flex gap-8 h-full max-h-[800px] bg-base-200 bg-opacity-10 "
          >
            {SERVICES.map((project) => (
              <ProjectCard
                project={project}
                key={project.title}
                isVisible={isVisible}
                setSelectedId={setSelectedId}
              />
            ))}
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {isVisible && (
            <ProgressBar
              width={width}
              opacity={opacity}
              isVisible={isVisible}
            />
          )}
        </AnimatePresence>
      </div>

      {/* DISPLAY EXPANDED CARD */}
      {selectedId && (
        <ExpandedProjectCard
          setSelectedId={setSelectedId}
          selectedId={selectedId}
          project={SERVICES.find((service) => service.title === selectedId)}
        />
      )}
    </div>
  );
};

export default HorizontalScrollCarousel;
