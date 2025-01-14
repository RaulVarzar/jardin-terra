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
    color: "bg-primary",
  },
  {
    title: "Natura este casa noastră",
    description:
      "Ne iubim munca la fel de mult cum iubim și mediul care ne înconjoară. De aceea, îl ocrotim și îl cinstim prin tot ceea ce facem, de la tehnologiile utilizate în procesul de proiectare, la materialele naturale folosite și impactul lucrărilor noastre asupra naturii. Ne asigurăm că fiecare spațiu verde pe care îl proiectăm și amenajăm este ecologic și sănătos atât pentru oamenii care beneficiază de el, cât și pentru celelalte viețuitoare, precum insecte sau animale.",
    image: "natura.jpg",
    color: "bg-secondary",
  },
  {
    title: "Spații verzi si grădini sustenabile",
    description:
      "Spațiile verzi și grădinile sustenabile necesită o proiectare și o întreținere realizate într-un mod ecologic. Acest lucru înseamnă că ele sunt gestionate astfel încât să minimizeze impactul negativ asupra mediului înconjurător și să contribuie la protejarea și îmbunătățirea sănătății, bunăstării oamenilor și a ecosistemelor. La Jardin Terra, credem că o grădina sustenabilă trebuie proiectată și gestionată astfel încât să fie eficientă din punct de vedere al utilizării resurselor și să minimizeze impactul asupra mediului sau asupra siguranței generațiilor viitoare.",
    image: "spatii-sustenabile.jpg",
    color: "bg-accent-content",
  },
];

const Sustainability = () => {
  const isMobile = useScreenWidth();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  // GENERAL SCROLL PROGRESS
  const cardsRef = useRef(null);
  // const { scrollYProgress: headerProgress } = useScroll({
  //   target: sectionRef,
  //   offset: [" start 0.75", "start 0.45"],
  // });

  // CHECK IS SECTION IS IN VIEW
  const sectionInView = useInView(sectionRef);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    setReset(sectionInView);
  }, [sectionInView]);

  const titleArray = "SUSTENABILITATE".split("");

  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: [" start", "end 0.3"],
  });

  return (
    <section
      ref={sectionRef}
      id="sustenabilitate"
      className={
        "flex flex-col relative justify-center z-[10] bg-accent  pb-[15vh] " +
        (isMobile ? " mt-36" : " mt-[100vh]")
      }
    >
      <motion.div
        ref={headerRef}
        className="h-fit max-sm:pt-20 sm:h-[20vh] xl:h-[30vh]  grid place-content-center sticky top-0 uppercase font-semibold"
      >
        {/* <motion.h1 className="flex flex-row text-3xl font-semibold tracking-wide text-neutral-content md:text-9xl overflow-hidden xl:text-[6rem] opacity-80 ">
          {titleArray.map((letter, i) => (
            <TitleLetter
              letter={letter}
              id={i}
              key={i}
              progress={headerProgress}
            />
          ))}
        </motion.h1> */}
        <TextReveal duration={1}>
          <motion.h3 className=" font-bold text-5xl leading-none px-24 tracking-wide text-center sm:text-5xl lg:text-7xl xl:text-8xl  text-neutral-content">
            Sustenabilitate
          </motion.h3>
        </TextReveal>
      </motion.div>

      <div
        ref={cardsRef}
        className="relative w-full flex flex-col mx-auto sm:pt-[15vh] xl:pt-[20vh] "
      >
        {TOPICS.map((item, i) => (
          <Card
            key={item.title}
            item={item}
            sectionInView={reset}
            id={i}
            numberOfCards={TOPICS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default Sustainability;

const TitleLetter = ({ letter, id, progress }) => {
  const y = useTransform(progress, [id * 0.04, 0.95], ["120%", "0%"]);

  return <motion.span style={{ y }}>{letter}</motion.span>;
};
