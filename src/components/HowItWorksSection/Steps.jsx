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
    title: 'Aprovizionarea de materiale și Amenajare',
    content:
      'Odată cu finalizarea proiectării și înainte de a începe lucrările, echipa noastră poate asigura, prin intermediul partenerilor noștri, aprovizionarea de materiale și produse necesare amenajării. Cu ajutorul partenerilor noștri locali, putem oferi și lucrări de amenajare a spațiului verde. Astfel, ne asigurăm de buna implementare a proiectului nostru și de respectarea cerințelor tehnice ale acestuia. La finalizarea lucrărilor de amenajare, îți oferim și un plan cu lucrări specifice de întreținere a spațiului tău verde.',
    image: 'step4.jpeg',
  },
];

const Steps = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex">
      <motion.div
        layout
        className="flex flex-col w-9/12 mx-auto border-2 3xl:max-w-8xl backdrop-brightness-90 border-base-content rounded-2xl"
      >
        <div className="flex flex-row gap-3 p-3 shadow-md grow ">
          {STEPS.map((item, i) => (
            <div
              key={item.title}
              onClick={() => setSelectedTab(i)}
              className={
                'px-8 py-6  w-full justify-center flex flex-row items-center gap-4 transition-all duration-300  rounded-2xl text-neutral-content cursor-pointer ' +
                (selectedTab > i
                  ? ' bg-base-200'
                  : selectedTab === i
                  ? 'bg-base-content'
                  : ' hover:bg-base-200 ')
              }
            >
              <span className="text-2xl bg-base-conten rounded-2xl">
                {i + 1}
              </span>
            </div>
          ))}
        </div>

        <motion.div
          layout="position"
          //   key={selectedTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid items-start justify-center gap-6 px-10 py-6 xl:py-8 xl:grid-cols-5 "
        >
          <motion.div
            layout
            className="flex flex-col col-span-3 gap-1 xl:gap-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
          <AnimatePresence mode="wait">
            <motion.div
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={selectedTab}
              className="col-span-2 overflow-hidden rounded-2xl"
            >
              <img
                src={`/images/how-it-works/${STEPS[selectedTab].image}`}
                className="object-cover h-full aspect-square "
                alt={`${STEPS[selectedTab].image}`}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Steps;
