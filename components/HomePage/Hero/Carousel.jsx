import { useEffect, useState } from "react";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import Image from "next/image";

import { isMobile } from "react-device-detect";

const PHOTOS = ["home2.jpg", "home1.jpg", "home3.jpg"];

const Carousel = ({ scrollYProgress }) => {
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
    }, 5000);

    return () => clearInterval(interval);
  }, [activePhoto]);

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "113%"]);

  return (
    <div className="w-full h-full row-span-6  sm:row-span-7 xl:col-span-6 2xl:col-span-7">
      <motion.div className="relative w-full h-full  group overflow-hidden rounded-3xl 2xl:rounded-4xl shadow-md">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activePhoto}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0 }}
            style={{ scale }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="object-cover w-full h-full brightness-85 relative"
          >
            <Image
              src={`/${PHOTOS[activePhoto]}`}
              alt="banner-img"
              fill={true}
              style={{ objectFit: "cover" }}
              quality={100}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute max-md:opacity-70 opacity-60  group-hover:opacity-80 transition-opacity origin-bottom duration-300 inset-x-0 left-0 right-0 flex flex-row gap-4 max-xl:mx-auto w-fit bottom-3 md:bottom-4 xl:bottom-8 xl:left-10">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={
                "size-3 sm:size-4  border-2 sm:border-3 group-hover:scale-110 border-neutral-content rounded-full cursor-pointer overflow-hidden  transition-all duration-300 " +
                (activePhoto == i && " bg-neutral-content")
              }
              onClick={() => handleSetPhoto(i)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
