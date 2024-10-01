import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../../utils/animations";

const Header = () => {
  const headerRef = useRef(null);

  const { scrollYProgress: headerScrollProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "1.7 1"],
  });
  const enterHeader = useTransform(
    headerScrollProgress,
    [0, 0.65, 1],
    ["80%", "102%", "100%"]
  );
  const enterHeaderY = useTransform(
    headerScrollProgress,
    [0, 1],
    ["10vh", "0vh"]
  );

  const enterSubHeaderY = useTransform(
    headerScrollProgress,
    [0, 1],
    ["50vh", "0vh"]
  );

  return (
    <motion.div
      ref={headerRef}
      style={{ scale: enterHeader, y: enterHeaderY, opacity: enterHeader }}
      className="flex flex-col items-center max-w-4xl gap-2 mx-auto mt-[15vh] pb-12 text-center px-6 2xl:max-w-5xl text-neutral-content"
    >
      <Reveal delay={0.3} duration={0.8}>
        <h3 className="text-3xl font-bold tracking-wider uppercase sm:text-4xl xl:text-5xl">
          Modul de lucru
        </h3>
      </Reveal>

      <Reveal delay={0.5} duration={0.8}>
        <motion.p
          stye={{ x: enterSubHeaderY }}
          className="pt-2 text-sm font-light leading-snug tracking-wide opacity-50 xl:text-md text-balance"
        >
          Înainte de a trece la lopată și săpăligă, analizăm dimensiunile și
          forma spațiului tău verde. Apoi, ascultăm cu atenție dorințele tale și
          începem proiectarea grădinii. Suntem consultanții peisagiști pe care
          te poți baza pentru a avea propriul tău colț de natură, în armonie cu
          nevoile tale personale sau profesionale.
        </motion.p>
      </Reveal>
    </motion.div>
  );
};

export default Header;
