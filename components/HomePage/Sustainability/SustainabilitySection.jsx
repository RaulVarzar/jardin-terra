"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import Card from "./components/Card";
import Accordion from "./components/Accordion";
import { TextReveal } from "../../utils/animations";
import useScreenWidth from "../../utils/useScreenWidth";
import Image from "next/image";

const TOPICS = [
  {
    title: "Susținem amenajările sustenabile",
    description:
      " Serviciile noastre de proiectare și amenajare a spațiilor verzi implică și evaluarea impactului activității noastre asupra mediului. În procesul de evaluare, ținem cont de responsabilitatea ecologică a spațiului, de biodiversitatea acestuia și compoziția materialelor utilizate.",
    image: "sustenabilitate.jpg",
    color: "bg-secondary",
  },
  {
    title: "Natura este casa noastră",
    description:
      "Ne iubim munca la fel de mult cum iubim și mediul care ne înconjoară. De aceea, îl ocrotim și îl cinstim prin tot ceea ce facem, de la tehnologiile utilizate în procesul de proiectare, la materialele naturale folosite și impactul lucrărilor noastre asupra naturii. Ne asigurăm că fiecare spațiu verde pe care îl proiectăm și amenajăm este ecologic și sănătos atât pentru oamenii care beneficiază de el, cât și pentru celelalte viețuitoare, precum insecte sau animale.",
    image: "natura.jpg",
    color: "bg-primary-content",
  },
  {
    title: "Spații verzi si grădini sustenabile",
    description:
      "Spațiile verzi și grădinile sustenabile necesită o proiectare și o întreținere realizate într-un mod ecologic. Acest lucru înseamnă că ele sunt gestionate astfel încât să minimizeze impactul negativ asupra mediului înconjurător și să contribuie la protejarea și îmbunătățirea sănătății, bunăstării oamenilor și a ecosistemelor. La Jardin Terra, credem că o grădina sustenabilă trebuie proiectată și gestionată astfel încât să fie eficientă din punct de vedere al utilizării resurselor și să minimizeze impactul asupra mediului sau asupra siguranței generațiilor viitoare.",
    image: "spatii-sustenabile.jpg",
    color: "bg-secondary-content",
  },
];

const Sustainability = () => {
  const isMobile = useScreenWidth();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  // GENERAL SCROLL PROGRESS

  const { scrollYProgress: sectionEnter } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start"],
  });
  const { scrollYProgress: titleExit } = useScroll({
    target: sectionRef,
    offset: ["start 0.1", "0.05 start"],
  });

  const titleY = useTransform(titleExit, [0, 1], ["0%", "100%"]);
  const sectionY = useTransform(sectionEnter, [0, 0.9], ["60vh", "0vh"]);
  const sectionScale = useTransform(sectionEnter, [0, 1], ["80%", "100%"]);

  return (
    <section ref={sectionRef} className="-mt-[30vh] ">
      <motion.div style={{ y: sectionY }} className="">
        {/* <motion.h1
          style={{ y: titleY }}
          className="mx-auto w-full borde text-secondary-content text-[8vw] opacity-20 saturate-[70%] tracking-wide font-bold text-center  leading-none"
        >
          SUSTENABILITATE
        </motion.h1> */}
        <motion.div
          id="sustenabilitate"
          className={
            "flex flex-col relative will-change-transform border- border-info justify-center bg-accent-content z-[10]  pb-[15vh] gap-8 md:gap-24 xl:gap-36 2xl:gap-44  " +
            (isMobile ? " mt-36" : " ")
          }
        >
          {/* <motion.div
          style={{ scaleY: sectionScale }}
          className="absolute z-0 w-full border h-full inset-0 bg-primary overflow-hidden rounded-t-3xl"
        /> */}

          <div className="flex flex-col items-center relative md:pt-24 xl:pt-48 gap-y-16 sm:gap-y-24 md:gap-y-32 xl:gap-y-48">
            <motion.div
              ref={headerRef}
              // style={{ y: titleY, opacity: titleOpacity }}
              className="max-md:pt-12  h-scree stick md:top-[10vh] 2xl:top-[15vh] w-full max-w-screen-3xl gap-y-4 items-center justify-start border-warning  z-10 flex flex-col  "
            >
              <div className="flex flex-col px-4 sm:px-8 lg:flex-row gap-y-8 justify-start items-start text-center lg:text-left">
                <TextReveal duration={1}>
                  <motion.h3 className="font-bold text-3xl max-w-4xl w-fit leading-none tracking-wide uppercase  sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-neutral-content">
                    Susținem amenajările sustenabile
                  </motion.h3>
                </TextReveal>
                <div className=" flex justify-end ">
                  <h3 className="text-xl max-md:px-4 max-w-xl text-balance leading-tight sm:leading-snug tracking-wide text-neutral-content opacity-75 font-light  ">
                    Serviciile noastre de proiectare și amenajare a spațiilor
                    verzi implică și evaluarea impactului activității noastre
                    asupra mediului. În procesul de evaluare, ținem cont de
                    responsabilitatea ecologică a spațiului, de biodiversitatea
                    acestuia și compoziția materialelor utilizate.
                  </h3>
                </div>
              </div>
            </motion.div>

            <Photos />
          </div>
          <Accordion />
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Photos = () => {
  const cardsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end"],
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: cardsRef,
    offset: ["0.25 start", "end start"],
  });

  const top = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const leftright = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const clipPathL = useMotionTemplate`inset(${top}% 0% 0% ${leftright}% round 3%)`;
  const clipPathR = useMotionTemplate`inset(${top}% ${leftright}% 0% 0% round 3%)`;

  const exitLeft = useTransform(exitProgress, [0, 1], ["0%", "-15%"]);
  const exitRight = useTransform(exitProgress, [0, 1], ["-15%", "-25%"]);

  return (
    <div
      ref={cardsRef}
      className="relative w-full flex gap-y-16 px-4 sm:px-6 gap-x-12 xl:gap-y-24 flex-col lg:flex-row items-center justify-center z-20 mx-auto pb-12 min-h-scree"
    >
      {/* {TOPICS.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              sectionInView={true}
              id={i}
              numberOfCards={TOPICS.length}
              scrollYProgress={scrollYProgress}
            />
          ))} */}
      <motion.div
        style={{ clipPath: clipPathL, y: exitLeft }}
        className="lg:w-1/2 h-full  max-w-2xl rounded-3xl overflow-hidden aspect-video xl:aspect-square"
      >
        <img
          src="/images/sustenabilitate/main.jpg"
          alt="sustenabilitate-img-1"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ clipPath: clipPathR, y: exitRight }}
        className="lg:w-1/2 h-full max-w-2xl rounded-3xl overflow-hidden aspect-video xl:aspect-square -translate-y-[15%]"
      >
        <img
          src="/images/sustenabilitate/main2.jpg"
          alt="sustenabilitate-img-2"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* <Accordion /> */}
    </div>
  );
};

export default Sustainability;

const TitleLetter = ({ letter, id, progress }) => {
  const y = useTransform(progress, [id * 0.04, 0.95], ["120%", "0%"]);

  return <motion.span style={{ y }}>{letter}</motion.span>;
};
