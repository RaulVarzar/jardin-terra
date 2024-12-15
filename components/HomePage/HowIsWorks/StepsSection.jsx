import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Pricing from "./Pricing";
import { STEPS } from "../../utils/data";
import Header from "./Header";
import Card from "./Card";
import ModalCard from "./ModalCard";

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
    offset: ["start end", "0.2 1 "],
  });
  const enterSection = useTransform(
    sectionScrollProgress,
    [0.3, 1],
    ["150px", "0px"]
  );

  const { scrollYProgress: scroll2 } = useScroll({
    target: elementRef,
    offset: ["end end", "end start"],
  });

  const exitSteps = useTransform(scroll2, [0, 0.6], ["0%", "-15vh"]);
  const exitCarousel = useTransform(scroll2, [0, 0.8], ["0%", "-25vh"]);
  const exitProgressBar = useTransform(scroll2, [0, 0.25], ["100%", "0%"]);

  const progressBar = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });

  scrollYProgress.on("change", (y) => {
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

  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col justify-center gap-24 h-fit text-accent"
    >
      <div className="flex flex-col sticky top-0 gap-1  min-h-screen justify-center ">
        <Header />
        <Pricing
          expanded={expandedCard}
          setExpanded={() => setExpandedCard(true)}
        />
      </div>
      {expandedCard && <ModalCard closeCard={() => setExpandedCard(false)} />}
      <motion.div
        ref={targetRef}
        className="relative flex flex-col min-h-screen px-4 pb-32 mx-auto gap-y-10 md:gap-y-16 lg:px-12 2xl:px-24"
      >
        {/* <motion.div className="sticky justify-between  items-center px-8 my-[10vh] top-[10vh] flex flex-col w-1/4 h-[80vh]   place-content-evenly text-neutral-content">
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
              className="flex flex-col items-end justify-center w-full px-3 overflow-hidden leading-tight tracking-tighter text-right 2xl:text-right "
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
        </motion.div> */}
        {/* <motion.div
          ref={elementRef}
          style={{ y: exitCarousel }}
          className="flex flex-col w-full gap-12 py-[15vh]  max-w-7xl"
        > */}
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            style={{ y: i * 12, scale: 1 - i * 0.012 }}
            className=" sticky top-[10vh] md:top-[15vh]"
          >
            <Card step={step} i={i} />
          </motion.div>
        ))}
        {/* </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Sustainability;
