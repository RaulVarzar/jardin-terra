import { useRef, useState } from 'react';
import {
  FadeIn,
  FromBottom,
  FromLeft,
  FromRight,
  Reveal,
} from '../../utils/animations';
import {
  LayoutGroup,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Pricing from './Pricing';
import { STEPS } from '../../utils/data';

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
    offset: ['start end', 'start '],
  });
  const enterSection = useTransform(
    sectionScrollProgress,
    [0.3, 1],
    ['150px', '0px']
  );
  const enterHeader = useTransform(
    sectionScrollProgress,
    [0, 1],
    ['85%', '100%']
  );
  const enterHeaderY = useTransform(
    sectionScrollProgress,
    [0, 0.5],
    ['10vh', '0vh']
  );

  const { scrollYProgress: scroll2 } = useScroll({
    target: elementRef,
    offset: ['end end', 'end start'],
  });

  const exitSteps = useTransform(scroll2, [0, 0.6], ['0%', '-12vh']);
  const exitCarousel = useTransform(scroll2, [0, 0.8], ['0%', '-25vh']);
  const exitProgressBar = useTransform(scroll2, [0, 0.25], ['100%', '0%']);

  const progressBar = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.005,
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
      <motion.div
        style={{ scale: enterHeader, y: enterHeaderY, opacity: enterHeader }}
        className="flex flex-col items-center max-w-4xl gap-6 mx-auto mt-[15vh] pb-12 text-center  2xl:max-w-5xl text-neutral-content"
      >
        <Reveal delay={0.3} duration={0.8}>
          <h3 className="text-4xl font-bold tracking-wider uppercase xl:text-5xl">
            Abordarea noastră
          </h3>
        </Reveal>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
          className="h-2 mx-auto rounded-md w-36 bg-secondary"
        ></motion.div>
        <Reveal delay={0.5} duration={0.8}>
          <p className="pt-2 text-sm font-light leading-snug tracking-wide opacity-50 xl:text-md">
            Înainte de a trece la lopată și săpăligă, analizăm dimensiunile și
            forma spațiului tău verde. Apoi, ascultăm cu atenție dorințele tale
            și începem proiectarea grădinii. Suntem consultanții peisagiști pe
            care te poți baza pentru a avea propriul tău colț de natură, în
            armonie cu nevoile tale personale sau profesionale.
          </p>
        </Reveal>
      </motion.div>
      <FadeIn delay={0.7} duration={0.6} repeat>
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
              'absolute top-0 -right-0 w-0.5 h-full origin-top bg-accent-content trasition duration-500 ' +
              (finished ? ' bg-opacity-30' : ' bg-opacity-55')
            }
          />
          <LayoutGroup>
            {STEPS.map((section, i) => (
              <FromLeft
                key={section.title}
                delay={i * 0.5}
                duration={0.7}
                style={{ y: exitSteps }}
                className="flex flex-col items-end justify-center w-full px-3 overflow-hidden leading-tight tracking-tighter 2xl:text-right "
              >
                <motion.span
                  className={
                    'font-light text-md sm:text-xl 2xl:text-2xl text-neutral-content transition duration-500 ' +
                    (activeSection > i || finished
                      ? ' opacity-5 scale-90'
                      : ' opacity-50')
                  }
                >
                  Pasul {i + 1}
                </motion.span>
                <motion.h3
                  className={
                    'text-lg leading-none md:text-xl lg:text-2xl max-w-80 xl:max-w-96 w-fit sm:text-lg 2xl:text-4xl text-neutral-content transition-all duration-500 ' +
                    (activeSection > i || finished
                      ? ' opacity-10 tracking-tight'
                      : ' opacity-80 tracking-wide')
                  }
                >
                  {section.title}
                </motion.h3>
              </FromLeft>
            ))}
          </LayoutGroup>
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
