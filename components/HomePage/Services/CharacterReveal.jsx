import { motion, useTransform } from "framer-motion";

const CharacterReveal = ({ progress }) => {
  const TEXT =
    "De la grădini decorative, grădini de legume și fructe, spații verzi publice sau locuri de joacă pentru copii, la Jardin Terra îți stăm la dispoziție cu o gamă largă de opțiuni. Oferim servicii de planificare, proiectare și reabilitare spații verzi, indiferent de destinație sau suprafață.";
  const splitText = TEXT.split(" ");

  return (
    <p className="flex gap-2 flex-wrap justify-center text-neutral-content leading-4 sm:leading-none tracking-wide text-base font-light  sm:text-xl lg:text-3xl xl:text-4xl md:tracking-wider opacity-80">
      {splitText.map((word, i) => {
        const start = i / splitText.length;

        const end = start + 1 / splitText.length;
        const colored = word == "Jardin" || word == "Terra";

        return (
          <Word
            key={i}
            range={[start, end]}
            progress={progress}
            colored={colored}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export const Word = ({ children, range, progress, colored }) => {
  // const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  const opacity = useTransform(progress, range, ["20%", "100%"]);

  return (
    <motion.span
      className={
        "" +
        (colored &&
          "text-secondary-content font-bold brightness-150 saturate-150")
      }
      style={{ opacity }}
    >
      {children}
      {/* {characters.map((character, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })} */}
    </motion.span>
  );
};

// export const Character = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, ["20%", "100%"]);

//   // const blurRaw = useTransform(progress, range, [2, 0]);
//   // const filter = useMotionTemplate`blur(${blurRaw}px)`;

//   return (
//     <motion.span
//       style={{ opacity }}
//       transition={{ duration: 0.8, ease: [0.6, 0, 0.45, 1] }}
//       className="origin-bottom-left"
//     >
//       {children}
//     </motion.span>
//   );
// };

export default CharacterReveal;
