import { Link } from 'react-router-dom';
import Form from '../ContactPage/Form';
import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import ContactDetails from '../ContactPage/ContactDetails';
import { FadeIn, FromBottom } from '../utils/animations';

const Contact = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(null);
  const container = useRef(null);
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
          whileHover={{ scale: 1.15, opacity: '100%' }}
          className="fixed z-50 bg-opacity-40 btn-circle bg-neutral text-secondary-content top-4 left-4 sm:top-10 sm:left-10"
        >
          <i className=" fa-solid fa-angle-left"></i>
        </motion.button>
      </Link>
      <div className="flex items-center bg-base-200 sticky top-0 h-screen justify-start pl-12 sm:pl-16 xl:pl-20 2xl:pl-24 3xl:px-36 max-lg:min-h-[50vh] lg:w-1/3 text-neutral-content">
        <ContactDetails />
      </div>
      <div
        ref={container}
        className="flex flex-col items-start justify-center gap-4 px-16 text-4xl lg:w-2/3 bg-base-100 rounded-l-4xl text-neutral-content"
      >
        <FromBottom duration={1} delay={0.5}>
          <h3 className="max-w-4xl text-lg ">
            Completează formularul ca să avem un punct de pornire. Acesta poate
            fi începutul unei prietenii frumoase.
          </h3>
        </FromBottom>
        <FadeIn duration={0.8} delay={1}>
          <Form container={container} />
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
