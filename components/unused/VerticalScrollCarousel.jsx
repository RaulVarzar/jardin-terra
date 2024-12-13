import { forwardRef, useEffect, useRef, useState } from 'react';
import {
  useScroll,
  motion,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import { FromLeft, FromRight } from '../utils/animations';

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

const VerticalScrollCarousel = forwardRef(({ id }, sectionref) => {
  const [activeSection, setActiveSection] = useState(0);
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
  scrollYProgress.onChange((y) => {
    const progress = Math.floor(y * 100);
    if (progress < 100) {
      setActiveSection(Math.floor((progress / 100) * STEPS.length));
    }
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const y = useTransform(scrollYProgress, [0, 1], ['5vh', '75vh']);

  // individual cards
  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.25, 0.35, 0.45, 0.5, 0.6, 0.7, 0.75, 0.85, 1], //0  0.1 0.1 0.05   0.1 0.1 0.05   0.1 0.1 0.05 0.1 0.15
    [
      '0%',
      '0%',
      '0%',
      '120%',
      '0%',
      '0%',
      '120%',
      '0%',
      '0%',
      '120%',
      '0%',
      '0%',
    ]
  );
  const verticalScroll = useTransform(scrollYProgress, [0, 1], ['10%', '-75%']);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.2, 0.25, 0.35, 0.45, 0.5, 0.6, 0.7, 0.75, 0.85, 1],
    [
      '100%',
      '100%',
      '100%',
      '0%',
      '100%',
      '100%',
      '0%',
      '100%',
      '100%',
      '0%',
      '100%',
      '100%',
    ]
  );

  return (
    <div
      ref={targetRef}
      id={id}
      className="relative h-[400vh] border-b-1 border-neutral-content border-opacity-15"
    >
      <div className="sticky flex flex-col items-center w-full h-[100vh] top-0 overflow-hidden justify-center lg:px-4 xl:px-12">
        <div className="flex flex-row items-center justify-center w-full h-full items-between max-w-8xl">
          <motion.div
            style={{ height }}
            className="z-50 hidden w-2 rounded-full bg-base-content"
          />
          <motion.div className="sticky  flex flex-col h-full gap-8 p-2 overflow-hidden 2xl:flex-row md:h-[85vh]">
            <div
              ref={ref}
              className="flex flex-row items-end 2xl:w-1/4 2xl:flex-col justify-evenly"
            >
              {STEPS.map((title, i) => (
                <FromLeft
                  key={title}
                  delay={i * 0.5}
                  duration={0.8}
                  repeat
                  parentVisible={isVisible}
                  className="items-center justify-center w-full h-full col-span-1 px-3 py-2 overflow-hidden leading-tight tracking-tighter 2xl:text-right xl:py-1 xl:px-2 rounded-xl "
                >
                  <motion.div
                    className={
                      'flex flex-col transition duration-500 w-full  p-1 h-full justify-center ' +
                      (activeSection !== i && ' opacity-30 scale-90') +
                      (activeSection > i && ' opacity-5')
                    }
                  >
                    <motion.span className="font-light opacity-50 text-md sm:text-2xl 2xl:text-3xl text-neutral-content">
                      Pasul {i + 1}
                    </motion.span>
                    <motion.h3 className="text-lg leading-none md:text-xl lg:text-2xl sm:text-lg 2xl:text-4xl text-neutral-content">
                      {title.title}
                    </motion.h3>
                  </motion.div>
                </FromLeft>
              ))}
            </div>

            <div className="h-full overflow-hidden">
              <motion.div
                style={{ y: verticalScroll }}
                className="flex flex-col gap-y-24 h-fit"
              >
                {STEPS.map((step, i) => (
                  <AnimatePresence mode="wait">
                    <motion.div
                      variants={{
                        active: { opacity: 1, scale: 1 },
                        inactive: { opacity: 0.3, scale: 0.8 },
                      }}
                      initial="inactive"
                      animate={activeSection === i && 'active'}
                      transition={{ duration: 0.8 }}
                      key={activeSection}
                      className={
                        'flex flex-col items-center justify-center  w-full max-w-6xl gap-6 px-4 py-6 overflow-hidden border-2 border-opacity-0  xl:py-12 sm:px-8 xl:px-12 bg-base-20 border-neutral-content h-fit rounded-2xl ' +
                        (i % 2 !== 0
                          ? ' xl:flex-row '
                          : ' xl:flex-row-reverse ')
                      }
                    >
                      <motion.div
                        style={{ opacity: 1 }}
                        layout="position"
                        key={activeSection}
                        className=" md:max-w-2xl"
                      >
                        <motion.img
                          src={`/images/how-it-works/${step.image}`}
                          className="object-cover rounded-xl max-w-96 max-h-96"
                          alt={step.image}
                        />
                      </motion.div>
                      <motion.p
                        layout="position"
                        key={activeSection}
                        style={{ opacity: 1 }}
                        className="text-sm sm:text-md xl:text-lg text-neutral-content"
                      >
                        {step.content}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default VerticalScrollCarousel;
