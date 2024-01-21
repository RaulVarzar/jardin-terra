import { forwardRef, useEffect, useRef, useState } from 'react';
import {
  useScroll,
  motion,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import { FromLeft, Reveal } from '../utils/animations';

const STEPS = [
  {
    title: 'Identificare și măsurare',
    content:
      'În urma primei discuții pe baza informațiilor primite online, un reprezentant Jardin Terra se deplasează la domiciliul sau sediul tău, pentru a identifica terenul ce necesită amenajare, reamenajare sau retușuri. La fața locului, măsurăm terenul, facem poze, luăm probe de sol și în funcție de nevoile și dorințele tale, facem schița preliminară.',
    image: 'step1.jpeg',
  },
  {
    title: 'Proiectare 2D',
    content:
      'În urma deplasării pe teren și a discuțiilor avute, proiectăm o serie de planuri 2D, pentru a avea mai multe opțiuni de design de unde poți alege. Fiecare plan realizat vine cu explicații și detalii referitoare la activitățile și materialele necesare pentru amenajarea sau construirea spațiului verde, dar și întreținerea acestuia. Planurile 2D conțin obiecte sau imagini pe două dimensiuni. Acestea reprezintă un desen tehnic al viitorului tău spațiu verde, fiind modalitatea cea mai eficientă și rapidă de a ilustra ideile și propunerile noastre, în concordanță cu bugetul tău.',
    image: 'step2.jpeg',
  },
  {
    title: 'Simulare 3D',
    content:
      'Odată ce ne-am decis împreună asupra planului 2D potrivit în funcție de nevoile, dorințele dar și bugetul tău, trecem la etapa următoare. Aceasta constă în proiectarea 3D a planului respectiv, pentru a îi da viață din punct de vedere grafic. Planul 3D reprezintă o simulare pe trei dimensiuni a obiectelor și elementelor specifice viitorului tău spațiu verde. Acesta este o machetă virtuală proiectată de designerul peisagist, care ia în calcul și următoarele aspecte: - pH-ul solului: în funcție de pH și destinația ce o va avea grădina (utilă sau decorativă), recomandăm gazonul potrivit, plantele și arbuștii necesari pentru plantare, dar și lucrările specifice de pregătire și întreținere a solului; - drenarea terenului și utilizarea apei; - sistemul de irigații; - planificarea aleilor; - iluminatul și sursa de energie electrică; - mobilierul de grădină; - alegerea gardului potrivit.',
    image: 'step3.jpeg',
  },
  {
    title: 'Aprovizionare și amenajare',
    content:
      'Odată cu finalizarea proiectării și înainte de a începe lucrările, echipa noastră poate asigura, prin intermediul partenerilor noștri, aprovizionarea de materiale și produse necesare amenajării. Cu ajutorul partenerilor noștri locali, putem oferi și lucrări de amenajare a spațiului verde. Astfel, ne asigurăm de buna implementare a proiectului nostru și de respectarea cerințelor tehnice ale acestuia. La finalizarea lucrărilor de amenajare, îți oferim și un plan cu lucrări specifice de întreținere a spațiului tău verde.',
    image: 'step4.jpeg',
  },
];

const VerticalScrollCarousel = forwardRef(({}, sectionref) => {
  const [activeSection, setActiveSection] = useState(0);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  scrollYProgress.onChange((y) => {
    const progress = Math.floor(y * 100);
    if (progress < 100) {
      setActiveSection(Math.floor((progress / 100) * STEPS.length));
    }
  });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const y = useTransform(scrollYProgress, [0, 1], ['5vh', '75vh']);

  return (
    <div ref={targetRef} className="relative h-[400vh]">
      <div className="sticky flex flex-col items-center w-full h-[100vh] top-0 overflow-hidden justify-center lg:px-4 xl:px-12">
        {/* <motion.h3 className="inset-x-0 left-0 right-0 flex items-center justify-center pt-24 text-3xl font-bold leading-none text-right lg:text-5xl 3xl:text-6xl grow h-fit">
          <Reveal delay={0.5} repeat>
            MOD DE LUCRU
          </Reveal>
        </motion.h3> */}

        <div className="flex flex-row items-center justify-center w-full h-full items-between max-w-8xl">
          <motion.div
            style={{ height }}
            className="z-50 hidden w-2 rounded-full bg-base-content"
          />
          <motion.div className="relative flex flex-col h-full gap-8 p-2 overflow-hidden grow 2xl:flex-row ">
            <FromLeft
              style={{ y: y }}
              delay={0.8}
              duration={0.8}
              repeat
              className="flex flex-col col-span-1 px-3 py-2 overflow-hidden leading-tight tracking-tighter max-2xl:w-11/12 2xl:w-1/4 h-fit xl:py-6 xl:px-8 rounded-xl"
            >
              <motion.span className="font-light opacity-50 text-md sm:text-2xl 2xl:text-3xl text-neutral-content">
                Pasul {activeSection + 1}
              </motion.span>
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  key={activeSection}
                  transition={{ duration: 0.5, ease: 'anticipate' }}
                >
                  <motion.h3 className="text-3xl leading-none sm:text-4xl 2xl:text-5xl text-neutral-content">
                    {STEPS[activeSection].title}
                  </motion.h3>
                </motion.div>
              </AnimatePresence>
            </FromLeft>

            <div className="flex items-center h-full p-0 max-2xl:w-full 2xl:w-3/4">
              <motion.div
                layout="position"
                className="flex flex-col items-center justify-center w-full gap-6 px-4 py-6 overflow-hidden border-2 xl:py-12 sm:px-8 xl:px-12 bg-base-200 border-neutral-content h-fit rounded-2xl border-opacity-10"
              >
                <motion.p
                  layout="position"
                  className="max-w-5xl text-sm sm:text-md xl:text-lg text-neutral-content"
                >
                  {STEPS[activeSection].content}
                </motion.p>
                <motion.div layout="position" className="w-full md:max-w-2xl ">
                  <motion.img
                    src={`/images/how-it-works/${STEPS[activeSection].image}`}
                    className="object-cover w-full rounded-xl max-h-96 "
                    alt={`${STEPS[activeSection].image}`}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default VerticalScrollCarousel;
