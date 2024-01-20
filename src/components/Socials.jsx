import { motion } from 'framer-motion';

const Socials = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-6 px-4 py-2 text-3xl text-center xl:justify-end text-neutral-content lg:gap-4 lg:text-3xl">
      <motion.span
        initial={{ opacity: 0.75 }}
        whileHover={{
          scale: 1.15,
          opacity: 1,
          transition: { duration: 0.3, delay: 0, ease: 'easeInOut' },
        }}
        className="flex flex-row items-center py-1.5 px-2 lg:px-4  shadow-md cursor-pointer justify-evenly hover:text-neutral transition-colors duration-300"
      >
        <i className=" fa-brands fa-facebook"></i>
      </motion.span>
      <motion.span
        initial={{ opacity: 0.75 }}
        whileHover={{
          scale: 1.15,
          opacity: 1,
          transition: { duration: 0.3, delay: 0, ease: 'easeInOut' },
        }}
        className="flex flex-row items-center py-1.5 px-2 lg:px-4  shadow-md cursor-pointer justify-evenly  transition-colors duration-300 hover:text-neutral"
      >
        <i className=" fa-brands fa-instagram"></i>
      </motion.span>
      <motion.span
        initial={{ opacity: 0.75 }}
        whileHover={{
          scale: 1.15,
          opacity: 1,
          transition: { duration: 0.3, delay: 0, ease: 'easeInOut' },
        }}
        className="flex flex-row items-center py-1.5 px-2 lg:px-4  shadow-md cursor-pointer justify-evenly  transition-colors duration-300 hover:text-neutral "
      >
        <i className=" fa-brands fa-youtube"></i>
      </motion.span>
      <motion.span
        initial={{ opacity: 0.75 }}
        whileHover={{
          scale: 1.15,
          opacity: 1,
          transition: { duration: 0.3, delay: 0, ease: 'easeInOut' },
        }}
        className="flex flex-row items-center py-1.5 px-2 lg:px-4 shadow-md cursor-pointer justify-evenly  transition-colors duration-300 hover:text-neutral"
      >
        <i className=" fa-brands fa-linkedin"></i>
      </motion.span>
    </div>
  );
};

export default Socials;
