import { useRef, useState } from 'react';
import {
  FadeIn,
  FromBottom,
  FromLeft,
  FromRight,
  Reveal,
} from '../../utils/animations';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Pricing from './Pricing';
import { STEPS } from '../../utils/data';
import Header from './Header';

const Sustainability = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [finished, setFinished] = useState(false);
  const targetRef = useRef(null);
  const elementRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', '0.2 1 '],
  });
  const enterSection = useTransform(
    sectionScrollProgress,
    [0.3, 1],
    ['150px', '0px']
  );

  const { scrollYProgress: scroll2 } = useScroll({
    target: elementRef,
    offset: ['end end', 'end start'],
  });

  const exitSteps = useTransform(scroll2, [0, 0.6], ['0%', '-15vh']);
  const exitCarousel = useTransform(scroll2, [0, 0.8], ['0%', '-25vh']);
  const exitProgressBar = useTransform(scroll2, [0, 0.25], ['100%', '0%']);

  const progressBar = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  scrollYProgress.onChange((y) => {
    const progress = Math.floor(y * 100);
    if (progress === 100) {
      setFinished(true);
      return;
    }
    if (progress < 100) {
      setFinished(false);
      setActiveSection(Math.floor((progress / 100) * STEPS.length));
    }
  });

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col justify-center h-fit text-accent"
    >
      <Header />
      <FadeIn delay={0.8} duration={1}>
        <Pricing />
      </FadeIn>
      <motion.div
        style={{ y: enterSection }}
        ref={targetRef}
        className="relative flex flex-row min-h-screen px-4 mx-auto lg:px-12 2xl:px-24 w-fit"
      >
        <motion.div className="sticky justify-between  items-center px-8 my-[10vh] top-[10vh] flex flex-col w-1/4 h-[80vh]   place-content-evenly text-neutral-content">
          <motion.div
            style={{ scaleY: progressBar, opacity: exitProgressBar }}
            className={
              'absolute top-0 -right-0 w-1 h-full origin-top bg-neutral-content ' +
              (finished ? ' bg-opacity-50' : ' bg-opacity-100')
            }
          />
          {STEPS.map((section, i) => (
            <FromLeft
              key={section.title}
              delay={i * 0.5}
              duration={0.7}
              style={{ y: exitSteps }}
              animate={{
                scale:
                  activeSection < i
                    ? 0.9
                    : activeSection > i
                    ? 0.8
                    : activeSection === i && 1,
                opacity: activeSection < i ? 0.15 : activeSection > i ? 0.3 : 1,
                transition: { duration: 1 },
              }}
              className="flex flex-col items-end justify-center w-full px-3 overflow-hidden leading-tight tracking-tighter 2xl:text-right "
            >
              <motion.span
                className={
                  'font-light text-md sm:text-xl 2xl:text-2xl text-neutral-content '
                }
              >
                Pasul {i + 1}
              </motion.span>
              <motion.h3
                className={
                  'text-lg leading-none md:text-xl lg:text-2xl max-w-80 xl:max-w-96 w-fit sm:text-lg 2xl:text-4xl text-neutral-content '
                }
              >
                {section.title}
              </motion.h3>
            </FromLeft>
          ))}
        </motion.div>
        <motion.div
          ref={elementRef}
          style={{ y: exitCarousel }}
          className="flex flex-col w-3/4 gap-12 py-[15vh]  max-w-7xl"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className={
                'flex flex-row transition duration-1000 items-center justify-center w-full gap-6 px-4 py-16 min-h-[40vh] overflow-hidden border-neutral-content border-opacity-15 max-w-8xl xl:py-12 sm:px-8 xl:px-12 bg-base-20 h-fit ' +
                (activeSection !== i && ' opacity-30 ') +
                ((activeSection > i || activeSection < i) && ' scale-95')
              }
            >
              <FromBottom delay={0.2} duration={1}>
                <motion.img
                  src={`/images/how-it-works/${step.image}`}
                  className="object-cover rounded-xl max-w-96 max-h-96 2xl:max-w-[400px] z-50"
                  alt={step.image}
                />
              </FromBottom>
              <FromRight offset={10} delay={0.3} duration={0.8}>
                <motion.p className="text-sm sm:text-md xl:text-lg text-neutral-content">
                  {step.content}
                </motion.p>
              </FromRight>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sustainability;
