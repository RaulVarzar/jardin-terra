import { forwardRef, useEffect, useRef, useState } from 'react';
import {
  useScroll,
  motion,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion';

import { SERVICES } from '../utils/data';
import { Reveal } from '../utils/animations';
import ProjectCard from '../ProjectCard';

const HorizontalScrollCarousel = forwardRef(({ id }, sectionref) => {
  const [isVivible, setIsVisible] = useState(false);

  const targetRef = useRef(null);

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
  const x = useTransform(
    scrollYProgress,
    [0.12, 0.8, 0.9, 0.95],
    ['15%', '-75%', '-83%', '-85%']
  );
  const reverseOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.3],
    ['75%', '0%']
  );
  const opacity = useTransform(scrollYProgress, [0, 1], ['8%', '25%']);
  const scale = useTransform(scrollYProgress, [0.1, 0.35], ['100%', '70%']);

  const width = useTransform(scrollYProgress, [0.15, 1], ['0%', '100%']);

  return (
    <div ref={targetRef} id={id} className=" h-[250vh] relative">
      <div
        ref={sectionref}
        className="sticky top-0 flex items-center w-full h-screen overflow-hidden"
      >
        <motion.h3
          style={{ opacity: reverseOpacity, scale }}
          ref={ref}
          className="absolute inset-x-0 left-0 right-0 ml-12 text-5xl font-bold leading-none w-fit xl:text-7xl text-neutral-content"
        >
          <Reveal delay={0.5}>SERVICIILE NOASTRE </Reveal>
        </motion.h3>

        <motion.div
          style={{ x }}
          className="flex gap-6 bg-base-200 h-4/5 max-h-[800px]"
        >
          {SERVICES.map((project) => (
            <ProjectCard
              project={project}
              key={project.title}
              isVisible={isVivible}
            />
          ))}
        </motion.div>
        <AnimatePresence>
          {isVivible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
              key={isVivible}
              className="absolute left-0 right-0 flex items-center justify-start h-1 mx-auto rounded-md max-w-80 xl:max-w-xl bg-base-content bottom-10"
            >
              <motion.div
                style={{ width, opacity: opacity }}
                className="absolute z-50 h-0.5 rounded-full bg-neutral-content"
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default HorizontalScrollCarousel;
