import { useState } from "react";
import banner from "/home2.jpg";

const Carousel = () => {
  const [activePhoto, setActivePhoto] = useState(1);

  const handleSetPhoto = (photo) => {
    setActivePhoto(photo);
  };

  return (
    <div className="relative w-full h-full overflow-hidden aspect-square 2xl:aspect-4/5 rounded-4xl">
      <img
        src={`/home3.jpg`}
        className="object-cover w-full h-full brightness-75"
        alt="banner-img"
      />
      <div className="absolute flex flex-row gap-4 left-12 bottom-8">
        <div
          className={
            "h-2 rounded-full cursor-pointer w-14 bg-neutral-content " +
            (activePhoto != 1 && " opacity-40")
          }
          onClick={() => handleSetPhoto(1)}
        ></div>
        <div
          className={
            "h-2 rounded-full cursor-pointer w-14 bg-neutral-content " +
            (activePhoto != 2 && " opacity-40")
          }
          onClick={() => handleSetPhoto(2)}
        ></div>
        <div
          className={
            "h-2 rounded-full cursor-pointer w-14 bg-neutral-content " +
            (activePhoto != 3 && " opacity-40")
          }
          onClick={() => handleSetPhoto(3)}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
