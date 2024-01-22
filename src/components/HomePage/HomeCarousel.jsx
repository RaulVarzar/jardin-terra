import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PHOTOS = ['home1.jpg', 'home2.jpg', 'home3.jpg'];

const Carousel = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  const handleSetPhoto = (photo) => {
    setActivePhoto(photo);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhoto((activePhoto) => {
        if (activePhoto === PHOTOS.length - 1) return 0;
        return activePhoto + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl group">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={activePhoto}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          src={`/${PHOTOS[activePhoto]}`}
          className="object-cover w-full h-full brightness-75 aspect-square md:aspect-4/5"
          alt="banner-img"
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 left-0 right-0 flex flex-row gap-4 max-xl:mx-auto w-fit bottom-4 xl:bottom-8 xl:left-10">
        {PHOTOS.map((photo, i) => (
          <div
            key={photo}
            className={
              'h-2 group-hover:h-3 rounded-full cursor-pointer w-10 xl:w-14 bg-neutral-content  transition-all duration-300 ' +
              (activePhoto != i && ' opacity-40')
            }
            onClick={() => handleSetPhoto(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
