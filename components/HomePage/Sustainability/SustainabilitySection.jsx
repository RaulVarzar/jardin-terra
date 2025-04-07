"use client";

import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { TextReveal } from "../../utils/animations";
import useScreenWidth from "../../utils/useScreenWidth";

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
  const cardsRef = useRef(null);

  const { scrollYProgress: sectionEnter } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start"],
  });

  const sectionY = useTransform(sectionEnter, [0, 1], ["60vh", "0vh"]);
  const sectionScale = useTransform(sectionEnter, [0, 0.96], ["75%", "100%"]);

  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start 0.15", "end 0.15"],
  });

  const { scrollYProgress: titleYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "start"],
  });
  const titleY = useTransform(titleYProgress, [0.5, 0.8], ["0vh", "0vh"]);
  const titleOpacity = useTransform(
    titleYProgress,
    [0.5, 0.65],
    ["100%", "0%"]
  );

  return (
    <section ref={sectionRef} className="-mt-[30vh] ">
      <motion.div
        style={{ y: sectionY }}
        id="sustenabilitate"
        className={
          "flex flex-col relative will-change-transform  justify-center z-[10]  pb-[15vh]  " +
          (isMobile ? " mt-36" : " ")
        }
      >
        <motion.div
          style={{ scaleX: sectionScale }}
          className="absolute w-full  h-full inset-0 bg-primary overflow-hidden rounded-t-3xl"
        />

        <motion.div
          ref={headerRef}
          style={{ y: titleY, opacity: titleOpacity }}
          className="max-sm:py-20 min-h-[60vh] sm:py-36 lg:py-64 z-10  grid place-content-center sticky  top-0 uppercase font-semibold"
        >
          <TextReveal duration={1}>
            <motion.h3 className=" font-bold text-4xl leading-none lg:px-24 tracking-wide text-center sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl 3xl:text-xxl text-neutral-content">
              Sustenabilitate
            </motion.h3>
          </TextReveal>
        </motion.div>

        <div
          ref={cardsRef}
          className="relative w-full flex flex-col z-20 mx-auto"
        >
          {TOPICS.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              sectionInView={true}
              id={i}
              numberOfCards={TOPICS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Sustainability;

const TitleLetter = ({ letter, id, progress }) => {
  const y = useTransform(progress, [id * 0.04, 0.95], ["120%", "0%"]);

  return <motion.span style={{ y }}>{letter}</motion.span>;
};
