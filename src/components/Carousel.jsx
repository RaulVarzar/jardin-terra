import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Carousel = () => {
  const [activePhoto, setActivePhoto] = useState(2);

  const handleSetPhoto = (photo) => {
    setActivePhoto(photo);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-4xl">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={activePhoto}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          src={`/home${activePhoto}.jpg`}
          className="object-cover w-full h-full brightness-75 max-sm:aspect-4/5 sm:max-md:aspect-square md:max-xl:aspect-video"
          alt="banner-img"
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 left-0 right-0 flex flex-row gap-4 max-xl:mx-auto w-fit bottom-4 xl:bottom-8 xl:left-10">
        <div
          className={
            'h-2 rounded-full cursor-pointer w-10 xl:w-14 bg-neutral-content ' +
            (activePhoto != 1 && ' opacity-40')
          }
          onClick={() => handleSetPhoto(1)}
        ></div>
        <div
          className={
            'h-2 rounded-full cursor-pointer w-10 xl:w-14 bg-neutral-content ' +
            (activePhoto != 2 && ' opacity-40')
          }
          onClick={() => handleSetPhoto(2)}
        ></div>
        <div
          className={
            'h-2 rounded-full cursor-pointer w-10 xl:w-14 bg-neutral-content ' +
            (activePhoto != 3 && ' opacity-40')
          }
          onClick={() => handleSetPhoto(3)}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
