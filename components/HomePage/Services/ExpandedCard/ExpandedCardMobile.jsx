import { motion } from "framer-motion";
import { BsChevronContract } from "react-icons/bs";
import { useLenis } from "lenis/react";
import { useEffect } from "react";
import { CardImage } from "./CardImage";
import { CardContent } from "./CardContent";

const ExpandedCard = ({ item, setSelectedId, layoutId }) => {
  const lenisInstance = useLenis();
  // useEffect(() => {
  //   lenisInstance.stop();
  //   return () => {
  //     lenisInstance.start();
  //   };
  // }, []);

  const { title, photo, descriptions, steps } = item;

  return (
    <motion.div
      layoutId={layoutId}
      className="relative group z-50 grid grid-rows-7 md:p-6 2xl:p-8 w-full h-full p-4 max-w-screen-3xl rounded-2xl bg-secondary xl:grid-rows-1 xl:grid-cols-7"
    >
      <CloseButton closeCard={() => setSelectedId(null)} />

      <CardImage photo={photo} />

      <CardContent item={item} />
    </motion.div>
  );
};

export default ExpandedCard;

export const CloseButton = ({ closeCard }) => {
  return (
    <motion.span
      onClick={closeCard}
      className="text-3xl rotate-45 md:text-3xl z-50 cursor-pointer absolute top-4 lg:text-4xl right-4 p-3  md:p-4  transition-colors duration-200 text-base-content  hover:text-error hover:brightness-125 hover:scale-95"
    >
      <BsChevronContract />
    </motion.span>
  );
};
