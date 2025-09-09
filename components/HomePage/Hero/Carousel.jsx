import { useEffect, useState } from "react";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import Image from "next/image";

import { isMobile } from "react-device-detect";
import { FadeIn } from "../../utils/animations";

const PHOTOS = ["home2.png"];

const Carousel = ({ scrollYProgress, clipPath }) => {
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <FadeIn
      style={{ clipPath }}
      delay={1.4}
      duration={1.3}
      offset={30}
      threshold={0.01}
      className="relative min-h-[90vh]  w-full h-full flex group p-12 z-10 overflow-hidden"
    >
      <motion.div
        // style={{ y, scale: 1.15 }}
        className=" w-full h-full brightness-90 absolute  inset-0"
      >
        <Image
          src={`/${PHOTOS[activePhoto]}`}
          alt="banner-img"
          fill={true}
          quality={100}
          loading="eager"
          className="object-bottom object-cover"
        />

        {/* <div className="absolute max-md:opacity-70 opacity-60  group-hover:opacity-80 transition-opacity origin-bottom duration-300 inset-x-0 left-0 right-0 flex flex-row gap-4 max-xl:mx-auto w-fit bottom-3 md:bottom-4 xl:bottom-8 xl:left-10">
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
        </div> */}
      </motion.div>
    </FadeIn>
  );
};

export default Carousel;
