import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ item }) => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const imgInView = useInView(imgRef, {
    once: true,
    margin: '-100px',
  });

  const textInView = useInView(textRef, {
    once: true,
    margin: '-100px',
  });

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-10 mx-auto h-fit">
      <motion.img
        ref={imgRef}
        style={{
          scale: imgInView ? 1 : 0.75,
          transition: 'all 1.2s cubic-bezier(0, 0.25, 0.25,1) 0s',
        }}
        src={`images/about/${item.image}`}
        className="w-full max-w-4xl rounded-2xl"
      />
      <div
        ref={textRef}
        className="flex flex-col items-center justify-center gap-3 text-center text-neutral-content"
      >
        <motion.h3
          style={{
            y: textInView ? 0 : 70,
            scaleY: textInView ? 1 : 0.8,
            scaleX: textInView ? 1 : 0.7,
            opacity: textInView ? 1 : 0.4,
            transition: 'all 1.5s cubic-bezier(0, 0.25, 0.25,1) 0s',
          }}
          className="max-w-2xl text-3xl font-semibold leading-tight uppercase xl:text-4xl "
        >
          {item.title}
        </motion.h3>
        <motion.p
          style={{
            y: textInView ? 0 : 150,
            scaleY: textInView ? 1 : 0.8,
            scaleX: textInView ? 1 : 0.7,
            opacity: textInView ? 1 : 0.4,
            transition: 'all 1.3s cubic-bezier(0, 0.25, 0.25,1) 0s',
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
