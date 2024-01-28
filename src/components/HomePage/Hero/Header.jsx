import { Link } from 'react-router-dom';
import { FromLeft, WordReveal, Reveal } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';
import Socials from './Socials.jsx';

const HEADER = 'GRĂDINII TALE'.split('');

const Header = () => {
  return (
    <div className="flex flex-col md:justify-center w-fit md:grow">
      <div className="flex flex-col w-full px-2 xl:px-8 xl:py-8 gap-y-4 md:gap-y-8 xl:gap-y-12 ">
        <div className="flex flex-col w-full gap-2 max-md:items-center ">
          <div className="flex flex-col gap-0 text-neutral-content">
            <Reveal delay={0.8} duration={1.2}>
              <motion.h3 className="text-2xl font-bold leading-none sm:text:3xl md:text-3xl xl:text-4xl 2xl:text-5xl">
                Noi suntem artiștii
              </motion.h3>
            </Reveal>
            <Reveal delay={1.2} duration={1.2}>
              <h3 className="md:gap-1.5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                GRADINII TALE
              </h3>
            </Reveal>
          </div>
          {/* <Reveal delay={1} duration={1.2}> */}
          <h3 className="flex flex-wrap justify-center max-w-2xl font-light leading-none opacity-50 md:justify-start text-neutral-content text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <WordReveal offset="65" delay={1.8} duration={0.5}>
              Proiectăm spații verzi în armonie cu natura
            </WordReveal>
          </h3>
          {/* </Reveal> */}
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4 md:items-start md:justify-start md:gap-8 xl:items-start lg:flex-col xl:flex-col xl:justify-start">
          <FromLeft delay={1.4} duration={0.7}>
            <Link
              to="/contact"
              className="py-2 pl-4 pr-2 text-sm tracking-wider xl:pl-6 xl:pr-4 xl:py-4 border-opacity-10 text-neutral-content hover:border-opacity-15 hover:bg-primary rounded-xl xl:text-md bg-base-300 mybutton hover:text-stone-100 xl:hover:pl-10 hover:pl-8 hover:backdrop-brightness-200"
            >
              Începe un proiect
              <span>
                <i className="p-2 text-sm text-stone-100 fa-solid fa-arrow-right-long"></i>
              </span>
            </Link>
          </FromLeft>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Header;
