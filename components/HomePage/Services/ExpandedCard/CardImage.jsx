import { motion } from "framer-motion";
import Image from "next/image";

export const CardImage = ({ photo }) => {
  return (
    <motion.div
      layoutId={photo}
      className="z-10 w-full  relative  max-xl:row-span-2 xl:col-span-3 rounded-2xl lg:rounded- overflow-hidden"
    >
      <Image
        src={`/images/${photo}.webp`}
        alt="project-img"
        fill={true}
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 80vw, 100vw "
      />
    </motion.div>
  );
};
