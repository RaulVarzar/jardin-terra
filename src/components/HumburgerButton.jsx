import { motion } from 'framer-motion';

const HumburgerButton = ({
  handleClick,
  checked,
  scrollProgress,
  ...props
}) => {
  const variants = {
    hidden: {
      x: 100,
      opacity: 0,
      transition: { ease: 'easeInOut', delay: 0, duration: 0.2 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeInOut', delay: 0, duration: 0.1 },
    },
  };

  return (
    <motion.label
      variants={variants}
      animate={scrollProgress < 100 ? 'hidden' : 'visible'}
      // exit={{ x: 100, opacity: 0, transition: { duration: 0.3 } }}
      {...props}
      className={
        'hamburger cursor-pointer  h-full w-full py-2 px-3 hover:bg-neutral-content border-0 border-base-content transition duration-500 ' +
        (checked ? ' opacity-50 ' : ' border-opacity-100')
      }
    >
      <input type="checkbox" onClick={handleClick} checked={checked} />
      <svg viewBox="0 1 32 30" className="w-full h-full">
        <path
          className="line line-top-bottom "
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path className="line" d="M7 16 27 16"></path>
      </svg>
    </motion.label>
  );
};

export default HumburgerButton;
