import Carousel from '../Carousel';
import Services from '../Services';
import Socials from '../Socials';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Homepage = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      exit={{ opacity: 0 }}
      className="flex flex-col-reverse gap-8 px-4 pt-2 pb-8 xl:px-12 xl:flex-row max-w-8xl"
    >
      <div className="flex flex-col items-center justify-between w-full h-full gap-8 xl:w-1/2 3xl:w-5/12">
        <motion.div
          initial={{ x: '-150%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.25 }}
          exit={{ x: '-150%' }}
          className="flex flex-col w-full gap-12 justify-evenly grow xl:gap-2"
        >
          <Header />
          <Services />
        </motion.div>
        <Socials />
      </div>

      <motion.div
        initial={{ x: '200%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.25 }}
        exit={{ x: '200%' }}
        className="w-full xl:w-1/2 3xl:w-7/12"
      >
        <Carousel />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
