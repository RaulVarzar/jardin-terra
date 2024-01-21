import { motion } from 'framer-motion';
import { FromBottom } from './utils/animations';

const Socials = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-1 text-3xl text-center xl:justify-start text-neutral-content lg:gap-2 lg:text-3xl">
      <FromBottom delay={0.5} duration={0.8}>
        <motion.span
          initial={{ opacity: 0.75 }}
          whileHover={{
            scale: 1.15,
            opacity: 1,
            transition: { duration: 0.3, delay: 0, ease: 'easeInOut' },
          }}
          className="flex flex-row  px-2 items-center py-1.5 px-0 lg:px-3 cursor-pointer justify-evenly hover:text-neutral transition-colors duration-300"
        >
          <i className=" fa-brands fa-facebook"></i>
        </motion.span>
      </FromBottom>
      <FromBottom delay={0.7} duration={0.8}>
        <motion.span
          initial={{ opacity: 0.75 }}
          whileHover={{
            scale: 1.15,
            opacity: 1,
            transition: { duration: 0.3, delay: 0, ease: 'easeInOut' },
          }}
          className="flex flex-row items-center py-1.5 px-2 lg:px-3  cursor-pointer justify-evenly  transition-colors duration-300 hover:text-neutral"
        >
          <i className=" fa-brands fa-instagram"></i>
        </motion.span>
      </FromBottom>
      <FromBottom delay={0.9} duration={0.8}>
        <motion.span
          initial={{ opacity: 0.75 }}
          whileHover={{
            scale: 1.15,
            opacity: 1,
            transition: { duration: 0.3, delay: 0, ease: 'easeInOut' },
          }}
          className="flex flex-row items-center py-1.5 px-2 lg:px-3 cursor-pointer justify-evenly  transition-colors duration-300 hover:text-neutral "
        >
          <i className=" fa-brands fa-youtube"></i>
        </motion.span>
      </FromBottom>
      <FromBottom delay={1.1} duration={0.8}>
        <motion.span
          initial={{ opacity: 0.75 }}
          whileHover={{
            scale: 1.15,
            opacity: 1,
            transition: { duration: 0.3, delay: 0, ease: 'easeInOut' },
          }}
          className="flex flex-row items-center py-1.5 px-2 lg:px-3 cursor-pointer justify-evenly  transition-colors duration-300 hover:text-neutral"
        >
          <i className=" fa-brands fa-linkedin"></i>
        </motion.span>
      </FromBottom>
    </div>
  );
};

export default Socials;
