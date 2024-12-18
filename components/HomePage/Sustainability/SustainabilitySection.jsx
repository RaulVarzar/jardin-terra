import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";

const TOPICS = [
  {
    title: "Susținem amenajările sustenabile",
    description:
      " Serviciile noastre de proiectare și amenajare a spațiilor verzi implică și evaluarea impactului activității noastre asupra mediului. În procesul de evaluare, ținem cont de responsabilitatea ecologică a spațiului, de biodiversitatea acestuia și compoziția materialelor utilizate.",
    image: "sustenabilitate.jpg",
  },
  {
    title: "Natura este casa noastră",
    description:
      "Ne iubim munca la fel de mult cum iubim și mediul care ne înconjoară. De aceea, îl ocrotim și îl cinstim prin tot ceea ce facem, de la tehnologiile utilizate în procesul de proiectare, la materialele naturale folosite și impactul lucrărilor noastre asupra naturii. Ne asigurăm că fiecare spațiu verde pe care îl proiectăm și amenajăm este ecologic și sănătos atât pentru oamenii care beneficiază de el, cât și pentru celelalte viețuitoare, precum insecte sau animale.",
    image: "natura.jpg",
  },
  {
    title: "Spații verzi si grădini  sustenabile",
    description:
      "Spațiile verzi și grădinile sustenabile necesită o proiectare și o întreținere realizate într-un mod ecologic. Acest lucru înseamnă că ele sunt gestionate astfel încât să minimizeze impactul negativ asupra mediului înconjurător și să contribuie la protejarea și îmbunătățirea sănătății, bunăstării oamenilor și a ecosistemelor. La Jardin Terra, credem că o grădina sustenabilă trebuie proiectată și gestionată astfel încât să fie eficientă din punct de vedere al utilizării resurselor și să minimizeze impactul asupra mediului sau asupra siguranței generațiilor viitoare.",
    image: "spatii-sustenabile.jpg",
  },
];

const Sustainability = () => {
  const sectionRef = useRef(null);
  // GENERAL SCROLL PROGRESS
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [" start", "end start  "],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  // TITLE ANIMATIONS
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start"],
  });
  const enterTitle = useTransform(
    sectionScrollProgress,
    [0, 1],
    ["50%", "80%"]
  );

  const { scrollYProgress: contentProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start start"],
  });
  const exitHeader = useTransform(contentProgress, [0.4, 0.6], ["100%", "0%"]);
  const letterSpacing = useTransform(
    contentProgress,
    [0.4, 0.7],
    ["1px", "10px"]
  );

  // CHECK IS SECTION IS IN VIEW
  const sectionInView = useInView(sectionRef);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    setReset(sectionInView);
  }, [sectionInView]);

  const titleArray = "SUSTENABILITATE".split("");

  return (
    <div ref={sectionRef} className="flex flex-row justify-center">
      <motion.div className="h-screen sticky top-0 uppercase font-semibold grid place-content-start pt-[25vh] overflow-x-hidden">
        <motion.h1 className="flex flex-row text-3xl font-bold tracking-wider text-neutral-content md:text-6xl opacity-80 ">
          {titleArray.map((letter, i) => (
            <motion.span
              key={i}
              // style={{ margin: letterSpacing }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>

      <div ref={targetRef} className="relative h-fit">
        <motion.div className="flex flex-col gap-16 px-6 pb-12 sm:gap-24 xl:gap-48">
          {TOPICS.map((item) => (
            <Card key={item.title} item={item} sectionInView={reset} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sustainability;
