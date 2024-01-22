import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/logo.png';
import { FadeIn, FromBottom } from './utils/animations';

const Navbar = ({ hidden, scrollProgress }) => {
  return (
    <>
      <motion.nav
        initial={{ y: -200 }}
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden && scrollProgress > 400 ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut', delay: 0.2 }}
        className={
          'fixed top-0 left-0 right-0 z-50 flex justify-center mx-auto overflow-hidden border-neutral-content transition-all uppercase duration-200 ' +
          (scrollProgress > 50
            ? ' backdrop-brightness-75 py-2 backdrop-blur-xl shadow-2xl  border-neutral-content border-b-2 border-opacity-10'
            : ' border-opacity-0')
        }
      >
        <div className="flex flex-row justify-between w-full px-6 py-3 border-b-2 md:hidden border-neutral-content backdrop-brightness-50 backdrop-blur-lg border-opacity-10">
          <Link to="/">
            <img src={logo} className="object-cover w-20 h-auto" alt="" />
          </Link>
          <div className="flex flex-col items-end w-8 gap-1.5 opacity-70 py-4">
            <div className="w-full h-[3px] bg-neutral-content rounded-full"></div>
            <div className="w-9/12 h-[3px] bg-neutral-content rounded-full"></div>
          </div>
        </div>

        <div className="flex-row justify-between hidden w-full h-full max-w-4xl gap-3 px-4 text-base font-thin transition duration-300 xl:max-w-7xl 3xl:max-w-8xl grow lg:px-6 md:flex">
          <FadeIn delay={1} duration={0.5}>
            <NavLink to="#">
              <span>
                <img
                  src={logo}
                  className="object-cover w-24 h-auto py-2"
                  alt=""
                />
              </span>
            </NavLink>
          </FadeIn>

          <div className="flex flex-row items-center justify-between gap-4 overflow-hidden text-base font-medium tracking-wide text-white lg:text-base">
            <FromBottom delay={1}>
              <NavLink to="#servicii">
                <span className="px-5 py-2 transition duration-300 rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-neutral-content active:scale-95">
                  Servicii
                </span>
              </NavLink>
            </FromBottom>
            <FromBottom delay={1.15}>
              <NavLink to="#mod-de-lucru">
                <span className="px-5 py-2 transition duration-300 rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-neutral-content active:scale-95">
                  Mod de lucru
                </span>
              </NavLink>
            </FromBottom>
            <FromBottom delay={1.3}>
              <span className="px-5 py-2 transition duration-300 rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-neutral-content active:scale-95">
                Sustenabilitate
              </span>
            </FromBottom>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
export default Navbar;
