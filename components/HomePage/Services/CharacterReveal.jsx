import { motion, useTransform } from "framer-motion";

const CharacterReveal = ({ progress }) => {
  const TEXT =
    "De la grădini decorative, grădini de legume și fructe, spații verzi publice sau locuri de joacă pentru copii, la Jardin Terra îți stăm la dispoziție cu o gamă largă de opțiuni. Oferim servicii de planificare, proiectare și reabilitare spații verzi, indiferent de destinație sau suprafață.";
  const splitText = TEXT.split(" ").concat(["  ", "  "]);

  return (
    <p className="flex gap-x-2 gap-y-1 flex-wrap justify-center text-neutral-content leading-4 sm:leading-none tracking-tight text-lg font-light  sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl md:tracking-normal opacity-80 ">
      {splitText.map((word, i) => {
        const start = i / splitText.length;
        const end = start + 3 / splitText.length;
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
  const opacity = useTransform(progress, range, ["20%", "100%"]);

  return (
    <motion.span
      className={
        "" +
        (colored &&
          "text-secondary-content  font-bold brightness-150 saturate-150")
      }
      style={{ opacity }}
    >
      {children}
    </motion.span>
  );
};

export default CharacterReveal;
