import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ item }) => {
  const descRef = useRef(null);
  const textRef = useRef(null);

  // const imgInView = useInView(imgRef, {
  //   once: true,
  //   margin: '-100px',
  // });

  // const textInView = useInView(textRef, {
  //   once: true,
  //   margin: '-100px',
  // });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.2 1', '0.8 1'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0.2, 1], [0.4, 1]);

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ['start 1', '1.2 1'],
  });
  const textScale = useTransform(textScrollProgress, [0, 1], [0.8, 1]);
  const textY = useTransform(textScrollProgress, [0.3, 1], ['30px', '0px']);
  const textOpacity = useTransform(textScrollProgress, [0, 1], [0.6, 1]);

  const descriptionScale = useTransform(textScrollProgress, [0.3, 1], [0.8, 1]);
  const descriptionOpacity = useTransform(
    textScrollProgress,
    [0.7, 1],
    [0.5, 1]
  );
  const descriptionY = useTransform(
    textScrollProgress,
    [0.5, 1],
    ['70px', '0px']
  );

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-10 mx-auto h-fit">
      <motion.img
        ref={ref}
        style={{
          scale,
          opacity: imgOpacity,
          transition: 'all 0.8s cubic-bezier(0, 0.75, 0.95,1) 0s',
        }}
        src={`images/sustenabilitate/${item.image}`}
        className="w-full max-w-4xl rounded-2xl"
      />
      <div
        ref={textRef}
        className="flex flex-col items-center justify-center gap-3 text-center text-neutral-content"
      >
        <motion.h3
          style={{
            scale: textScale,
            y: textY,
            opacity: textOpacity,
            transition: 'all 0.4s cubic-bezier(0, 0.25, 0.25,1) 0s',
          }}
          className="max-w-2xl text-3xl font-semibold leading-tight uppercase xl:text-4xl"
        >
          {item.title}
        </motion.h3>
        <motion.p
          style={{
            scale: descriptionScale,
            opacity: descriptionOpacity,
            y: descriptionY,
            transition: 'all 0.7s cubic-bezier(0, 0.25, 0.25,1) 0s',
          }}
          className="font-light tracking-wide opacity-65 text-md md:text-lg 2xl:text-2xl"
        >
          {item.description}
        </motion.p>
      </div>
    </div>
  );
};

export default Card;
