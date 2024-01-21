import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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

const Steps = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex">
      <div className="flex flex-col items-center gap-12 mx-auto lg:flex-row 3xl:max-w-8xl">
        <div className="relative flex flex-row px-2 py-1 border-2 shadow-xl lg:px-4 lg:flex-col lg:gap-3 justify-evenly bg-base-200 border-opacity-10 border-neutral-content rounded-2xl">
          {STEPS.map((item, i) => (
            <div
              key={item.title}
              onClick={() => setSelectedTab(i)}
              className={
                'px-6 py-4 w-full justify-start flex flex-col items-start rounded-2xl transition-all duration-300  text-neutral-content cursor-pointer ' +
                (selectedTab === i
                  ? ' text-neutral-content bg-base-100'
                  : ' opacity-50')
              }
            >
              <span className="text-sm opacity-50 rounded-2xl">
                Pasul {i + 1}
              </span>
              <span className="text-xl leading-tight">{item.title}</span>
            </div>
          ))}
        </div>

        <motion.div className="grid items-center justify-center w-full h-full gap-6 px-10 py-6 xl:py-8 xl:grid-cols-5 ">
          <motion.div className="flex flex-col col-span-3 gap-1 xl:gap-2 ">
            <AnimatePresence mode="wait">
              <motion.div
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h2 className="mb-2 text-2xl font-bold leading-tight uppercase xl:text-3xl text-neutral-content">
                  {STEPS[selectedTab].title}
                </motion.h2>
                <motion.p className="text-sm leading-snug tracking-wide xl:text-md text-neutral-content opacity-80">
                  {STEPS[selectedTab].content}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div className="w-full h-full col-span-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                src={`/images/how-it-works/${STEPS[selectedTab].image}`}
                className="object-cover rounded-2xl aspect-square "
                alt={`${STEPS[selectedTab].image}`}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;
