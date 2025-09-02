import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

export function useScrollSteps({ steps = 4, ref }) {
  const internalRef = useRef(null);
  const targetRef = ref ?? internalRef;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start", "end"],
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newStep = Math.min(steps, Math.max(1, Math.floor(v * steps) + 1));
      setStep(newStep);
    });

    return () => unsubscribe();
  }, [scrollYProgress, steps]);

  return { ref: targetRef, step, scrollYProgress };
}
