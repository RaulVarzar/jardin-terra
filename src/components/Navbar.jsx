import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/logo.png';
import { FadeIn, FromTop } from './utils/animations';

const Navbar = ({ hidden, scrollProgress }) => {
  return (
    <>
      <motion.nav
        // initial={{ y: -200 }}
        variants={{
          visible: { y: 0, opacity: '100%' },
          hidden: { opacity: '30%' },
        }}
        animate={hidden && scrollProgress > 400 ? 'hidden' : 'visible'}
        whileHover="visible"
        transition={{ duration: 0.35, ease: 'easeInOut', delay: 0.1 }}
        className={
          'fixed top-0 left-0 right-0 z-50 flex justify-center mx-auto overflow-hidden border-neutral-content transition-all uppercase duration-200 ' +
          (scrollProgress > 50
            ? ' backdrop-brightness-85 backdrop-blur-xl shadow-md border-neutral-content border-b-2 border-opacity-10'
            : ' border-opacity-0 py-')
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

          <div
            className={
              'flex flex-row items-center overflow-hidden font-medium tracking-wide  justify-stretch  text-neutral-content group lg:text-base ' +
              (scrollProgress <= 50
                ? ' border-opacity-0'
                : ' border-opacity-10')
            }
          >
            <FromTop delay={1} duration={0.6} className="flex h-full ">
              <NavLink
                to="#servicii"
                className="flex items-center h-full px-5 transition duration-300 cursor-pointer xl:px-10 opacity-80 hover:bg-opacity-10 hover:bg-neutral-content active:scale-95 hover:opacity-100"
              >
                Servicii
              </NavLink>
            </FromTop>
            <FromTop delay={1.15} duration={0.6} className="flex h-full ">
              <NavLink to="#mod-de-lucru">
                <span className="flex items-center h-full px-5 transition duration-300 cursor-pointer xl:px-10 opacity-80 hover:bg-opacity-10 hover:bg-neutral-content active:scale-95 hover:opacity-100">
                  Mod de lucru
                </span>
              </NavLink>
            </FromTop>
            <FromTop delay={1.3} duration={0.6} className="flex h-full ">
              <span className="flex items-center h-full px-5 transition duration-300 cursor-pointer xl:px-10 opacity-80 hover:bg-opacity-10 hover:bg-neutral-content active:scale-95 hover:opacity-100">
                Sustenabilitate
              </span>
            </FromTop>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
export default Navbar;
