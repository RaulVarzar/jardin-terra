import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const ContactCard = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['0.2 end', '0.9 end'],
  });
  const y = useTransform(scrollYProgress, [0.5, 1], ['80px', '0px']);
  const scale = useTransform(scrollYProgress, [0, 1], ['88%', '100%']);

  return (
    <motion.div
      ref={containerRef}
      style={{ y, scale }}
      className="flex items-center justify-center w-full min-h-[80vh] px-8 py-8 md:py-20 gap-y-10 gap-x-8 flex-col lg:grid-cols-2 negative-shadow md:gap-x-12 xl:gap-16 bg-accent rounded-4xl overflow-hidden border-neutral-content border-opacity-10"
    >
      <div className="flex flex-col justify-center gap-4">
        <h3 className="text-4xl font-black leading-none text-center md:tracking-wide md:text-6xl xl:text-7xl text-neutral-content">
          Ai mai multe intrebări?
        </h3>
        <h5 className="max-w-6xl text-3xl font-normal text-center text-balance text-base-content opacity-70">
          Vrem să te cunoaștem, să aflăm mai multe despre spațiul tău verde și
          visul în care dorești să se transforme.
        </h5>
      </div>
      <div className="flex flex-col items-center w-full gap-y-1">
        <Link
          to="/contact"
          className="flex items-center gap-6 px-8 py-8 text-2xl tracking-wide uppercase transition duration-300 rounded-full shadow-md md:px-12 xl:px-20 bg-base-content group text-base-200 hover:scale-95"
        >
          Trimite-ne un mesaj
          <i className="fa-regular fa-message"></i>
        </Link>
        {/* <div className=" divider divider-accent">sau</div>
        <a
          href="mailto:office@jardinterra.ro"
          className="flex items-center gap-2 transition duration-200 cursor-pointer text-md xl:text-lg opacity-40 hover:opacity-65"
        >
          <i className="fa-regular fa-envelope" />
          office@jardinterra.ro
        </a> */}
      </div>
    </motion.div>
  );
};

export default ContactCard;
