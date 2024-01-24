import { Link } from 'react-router-dom';
import Form from '../ContactPage/Form';
import { Reveal } from '../utils/animations';
import { useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';

const Contact = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    setScrollProgress(latest);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className="relative flex flex-col min-h-screen lg:flex-row">
      <Link to="/">
        <motion.button
          variants={{
            visible: { x: 0, opacity: '80%' },
            hidden: {
              opacity: '50%',
              x: -100,
              transition: { duration: 0.5, type: 'spring' },
            },
          }}
          animate={hidden ? 'hidden' : 'visible'}
          whileHover={{ scale: 1.1, opacity: '100%' }}
          className="fixed z-50 bg-opacity-40 btn-circle bg-neutral text-secondary-content top-4 left-4 sm:top-10 sm:left-10"
        >
          <i className="fa-solid fa-xmark"></i>
        </motion.button>
      </Link>
      <div className="flex items-center sticky top-0 h-screen justify-start pl-12 sm:pl-16 xl:pl-20 2xl:pl-24 3xl:px-36 max-lg:min-h-[50vh] lg:w-1/3 text-neutral-content">
        <div className="flex flex-col gap-4 sm:gap-8">
          <Reveal delay={0.3} duration={1}>
            <h3 className="text-3xl font-semibold tracking-wider sm:text-4xl md:text-5xl xl:text-6xl opacity-80">
              CONTACT
            </h3>
          </Reveal>
          <span className="flex flex-col items-start text-base font-light tracking-wider md:gap-2 sm:text-md lg:text-xl opacity-60 h-fit">
            <Reveal delay={0.2} duration={1.5}>
              <p> office@jardinterra.ro</p>
            </Reveal>
            <Reveal delay={0.4} duration={1.5}>
              <p>Cluj-Napoca, RO</p>
            </Reveal>
            <Reveal delay={0.6} duration={1.5}>
              <p>0737 837 383</p>
            </Reveal>
          </span>
        </div>
      </div>
      <div className="flex items-start pt-[10vh] h-[200vh] px-16 text-4xl lg:w-2/3 justify-stretch backdrop-brightness-85 text-neutral-content">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
