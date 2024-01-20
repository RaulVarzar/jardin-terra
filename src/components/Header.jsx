import { Link } from 'react-router-dom';
import { FromLeft, Reveal } from './utils/animations.jsx';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="flex flex-col justify-center w-full grow">
      <div className="flex flex-col w-full px-2 lg:flex-row xl:flex-col xl:px-8 xl:py-8 gap-y-8 rounded-2xl">
        <div className="flex flex-col w-full gap-1 ">
          <div className="flex flex-col gap-2 text-neutral-content">
            <Reveal delay={0.3} duration={0.8}>
              <motion.h3 className="text-2xl font-bold leading-none md:text-3xl xl:text-4xl 2xl:text-5xl">
                Noi suntem artiștii
              </motion.h3>
            </Reveal>
            <Reveal delay={0.5} duration={0.8}>
              <h3 className="text-4xl font-black leading-tight md:text-5xl xl:text-6xl 2xl:text-7xl">
                GRĂDINII TALE
              </h3>
            </Reveal>
          </div>
          <Reveal delay={0.7} duration={0.7}>
            <h3 className="max-w-2xl text-lg font-light leading-none text-gray-100 md:text-xl lg:text-2xl opacity-60 xl:text-3xl">
              Proiectăm spații verzi în armonie cu natura
            </h3>
          </Reveal>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-4 lg:flex-col xl:flex-row xl:justify-start">
          <FromLeft delay={1} duration={0.7} repeat={true}>
            <Link
              to="/despre"
              className="px-6 py-3 text-base tracking-wide uppercase transition duration-300 opacity-50 cursor-pointer text-neutral-content hover:opacity-100"
            >
              Despre noi
            </Link>
          </FromLeft>
          <FromLeft delay={1.4} duration={0.7} repeat={true}>
            <Link
              to="/start"
              className="py-2 pl-6 pr-2 text-sm tracking-wide border-2 border-opacity-10 text-neutral-content hover:border-opacity-15 border-neutral-content backdrop-brightness-85 rounded-xl xl:text-md mybutton hover:text-stone-100 hover:pl-8 hover:bg-base-content"
            >
              Începe un proiect
              <span>
                <i className="p-2 text-sm text-stone-100 fa-solid fa-arrow-right-long"></i>
              </span>
            </Link>
          </FromLeft>
        </div>
      </div>
    </div>
  );
};

export default Header;
